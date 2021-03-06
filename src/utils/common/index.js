import Taro from '@tarojs/taro';
import { Common, Orderly } from '@jxkang/wechat-utils';
import Config from '@/config';
import Store from '@/store';

const noop = () => {};
const appUtils = {
  /**
   * 获取授权情况
   */
  getAuth(authName) {
    return new Promise((resolve, reject) => {
      Taro.getSetting({
        success: (res) => {
          const auth = res.authSetting;
          if (authName && authName.indexOf('.') === -1) {
            authName = 'scope.' + authName;
          }
          resolve(authName ? auth[authName] : auth);
        }, fail(err) {
          reject(err);
        }
      })
    });
  },
  /**
   * 跳转至登录界面
   * 为了统一方便管理与调试问题
   */
  navigateToLogin({
    params, // 附带在登录界面的参数
    desc // 描述 方便定位问题
  } = {}) {
    const { userInfo } = Store.globalStore.data;
    params = typeof params === 'string' ? params : Common.queryString(params || {});
    const gotoLoginUrl = `/pages/login-guide/login-guide${params ? '?' + params : ''}`;
    console.log('[system]', desc);

    const currentPage = appUtils.getCurrentPage();
    userInfo.token = '';
    Store.globalStore.setData('userInfo', userInfo);

    const jumpOptions = Common.clone(currentPage.options);
    // 过滤私有字段
    delete jumpOptions.__key_;
    const jumpParams = Common.queryString(jumpOptions);

    const currentUrl = currentPage && currentPage.route ? `/${currentPage.route}${jumpParams ? '?' + jumpParams : ''}` : '';
    if (!!currentUrl) {
      const isLogoutPage = currentUrl.search(/\/home|\/setting|\/login\-guide/) > 0;
      if (!isLogoutPage) {
        Taro.setStorageSync('fromUrl', currentUrl); // 从哪个地址跳过来
      }
    }

    if (currentPage.route.indexOf('/login-guide') === -1) {
      Taro.reLaunch({
        url: gotoLoginUrl
      });
    }

  },
  // 轻量级收集表单数据的方法
  formHandlerChange: (cmpt, formName = 'formData') => (value, key) => {
    const formData = cmpt.state[formName];
    value = value.target ? value.target.value : value;
    if (value && typeof value === 'string') { value = value.trim() };
    formData[key] = value;
    cmpt.setState({ [formName]: formData });
  },
  /**
  * 获取完整的文件URL路径
  * @param {String} v 文件路径
  */
  getFileUrl(v, opt) {
    let p = `/${v}`.replace(/^\/+/, '/');
    if (Common.isType(opt, 'object') && /(?:\.jpg)|(?:\.jpeg)|(?:\.png)|(?:\.gif)/i.test(p)) {
      opt.w = opt.w || '';
      opt.h = opt.h || '';
      opt.query = opt.query || '';

      p = p.indexOf('?') > 0 ? opt.query ? `${p}&${opt.query}` : p + `&x-oss-process=image/resize,m_fill,w_${opt.w},h_${opt.h}` : opt.query ? `${p}?${opt.query}` : p + `?x-oss-process=image/resize,m_fill,w_${opt.w},h_${opt.h}`;
      p = p.replace(/(?:w_\b),?|(?:h_\b),?/g, '').replace(/,$/, '');
    }
    return v && (`${v}`.indexOf('//') > -1 ? v : `${Config.imgHost}${p}`);
  },
  //精度计算
  formatPoint(f, digit) {
    if (f === 'NaN') return '--';
    const d = digit || 2;
    // eslint-disable-next-line no-restricted-properties
    const m = Math.pow(10, d);
    const res = Math.round(f * m, 10) / m;
    // return res.toFixed(d);
    return res;
  },
  // 小程序获取当前界面对象
  getCurrentPage() {
    const hisPages = Taro.getCurrentPages();
    const currentPage = hisPages[hisPages.length - 1];
    return currentPage;
  },
  // 延迟 主要防止狂点击触发某事件、事务  options={orderlyTimer: 2000}
  delay(cmptThis, funcs, options) {
    if (Common.isType(cmptThis, 'array')) {
      funcs = cmptThis;
      cmptThis = this;
    }
    funcs.forEach(fn => {
      if (Common.isType(cmptThis[fn], 'function')) {
        cmptThis[fn] = Orderly.call(cmptThis, cmptThis[fn], options);
      }
    });
  },
  //获取订单状态
  getOrderStatus({ afterSale, afterSaleStatus, orderStatus, afterSaleType }) {
    let status = ''
    if (afterSale === 0) {
      switch (orderStatus) {
        case 0:
          status = '待支付'
          break
        case 1:
          status = '待发货'
          break
        case 2:
          status = '待收货'
          break
        case 3:
          status = '已完成'
          break
        case 4:
          status = '已关闭'
          break
        case 7:
          status = '已取消'
          break
        default:
          break
      }

    } else if (afterSale === 1) {
      status = appUtils.getAfterStatus({ afterSaleStatus, afterSaleType })
    }
    return status
  },
  //获取售后状态 afterSaleStatus 52售后寄回 53卖家收货 97取消售后 98售后驳回 99售后完结
  getAfterStatus({ afterSaleStatus, afterSaleType }) {
    let status = ''
    if (afterSaleStatus === 53 || afterSaleStatus === 99) {
      status = '售后完结'
    }
    else if (afterSaleStatus !== 53 && afterSaleStatus !== 99 && afterSaleStatus !== 98 && afterSaleStatus !== 97) {
      switch (afterSaleType) {
        case 1:
          status = "退款中"
          break
        case 2:
          status = "退货中"
          break
        case 3:
          status = "赔付中"
          break
        default:
          status = '售后中'
          break
      }
    }
    else if (afterSaleStatus === 98) {
      switch (afterSaleType) {
        case 1:
          status = "退款驳回"
          break
        case 2:
          status = "退货驳回"
          break
        case 3:
          status = "赔付驳回"
          break
        default:
          status = '售后驳回'
          break
      }
    }
    else if (afterSaleStatus === 97) {
      status = '售后取消'
    }
    return status
  },

  // 日志
  logger(logs = {}) {
    /* 日志 统计字段 列表
    'user_name'       // 用户名称
    'fingerprint'     // 指纹
    'platforminfo'    // 平台数据
    'systeminfo',     // 系统数据<web端,可选>
    'language',       // 语言
    'logs',           // 开发者log日志
    'page_err',       // 界面js报错详情
    'api_url',        // 后端接口url
    'api_req',        // 后端接口入参
    'api_res',        // 后端接口出参
    'platform_type',  // 日志平台类型
    'hostname',       // 域名
    'protocol',       // 协议
    'url',            // url
    'pathname',       // pathname
    'create_time'     // 日志创建时间<可选>
    */
    try {
      const { globalStore: { data: { userInfo, envUserInfo, systemInfo } } } = Store;

      logs.platform_type = 'shops-wechat';
      logs.fingerprint = envUserInfo.openId || '';
      logs.user_name = logs.user_name || (userInfo.phone || userInfo.userName) + '-' + userInfo.nickName;
      logs.pathname = logs.pathname || this.$router.path;
      logs.url = logs.url || `${this.$router.path}?${Common.queryString(this.$router.params)}`;
      logs.language = systemInfo.language;
      logs.platforminfo = JSON.stringify(userInfo);
      logs.systeminfo = JSON.stringify(Object.assign({}, envUserInfo, systemInfo));

      if (logs.user_name.indexOf('undefined') === 0) { logs.user_name = '' }
      if (process.env.NODE_ENV === 'production' || logs.force === true) {
        Taro.request({ url: 'https://web-service.jingxiaokang.com/common/logs', method: 'post', header: { 'content-type': 'application/json; charset=UTF-8' }, dataType: 'text', responseType: 'text', data: logs });
        logs.force === true && console.log(logs);
      } else {
        console.log(logs);
      }
    } catch (err) {
      console.warn(err);
    }
  },
  /**
   * 消息订阅通知
   */
  subscribeMessage(success = noop, fail = noop){
    const errMap = {
      10001: '参数传空了',
      10002: '网络问题，请求消息列表失败',
      10003: '网络问题，订阅请求发送失败',
      10004: '参数类型错误',
      10005: '无法展示 UI，一般是小程序这个时候退后台了导致的',
      20001: '没有模板数据，一般是模板 ID 不存在 或者和模板类型不对应 导致的',
      20002: '模板消息类型 既有一次性的又有永久的',
      20003: '模板消息数量超过上限',
      20004: '用户关闭了主开关，无法进行订阅',
      20005: '小程序被禁封'
    }
    const tmplIds = Config.subscribe.map(v => v.id);
    
    if(Taro.requestSubscribeMessage){
      Taro.requestSubscribeMessage({
        tmplIds,
        success: res => {
          if(res.errMsg === 'requestSubscribeMessage:ok'){
            console.log('小程序消息订阅成功');
          }
          success(res, res.errMsg === 'requestSubscribeMessage:ok');
        }, fail: (err) => {
          // message.warn(err.errMsg);
          console.log(errMap[err.errCode]);
          fail(err, errMap[err.errCode]);
        }
      });
    }
  },
  /**
   * @method formatDateTime 时间戳转年月日时分秒格式
   * @param dates 时间戳
   * @return xxxx-xx-xx xx:xx:xx
   */
  formatDateTime(dates) {
    const date = new Date(dates);
    let m = date.getMonth() + 1;
    m = m < 10 ? (`0${m}`) : m;
    let d = date.getDate();
    d = d < 10 ? (`0${d}`) : d;
    const h = date.getHours();
    let minute = date.getMinutes();
    minute = minute < 10 ? (`0${minute}`) : minute;
    return `${m}-${d} ${h}:${minute}`;
  }
}

export default appUtils;