/**
 * @Author: qiang.zhang
 * @Email: 1196217890@qq.com
 * @Update: 2020-05-14 13:44:44
 * @Description: 转播列表页面
 */
import Taro from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import withPage from '@/components/with-page';
import Model from '@/model';
import Assets from '@/components/assets';
import Ellipsis from '@/components/ellipsis';
import Empty from '@/components/empty';
// import Utils from '@/utils';
import Common from '@/utils/common'
import ListView from 'taro-listview';
import styles from './turn-live.module.styl';


@withPage
class TurnLive extends Taro.Component {
  constructor(props) {
    super(props);

    this.config = {
      navigationBarTitleText: '推荐直播',
    }

    this.state = {
      pageIndex: 1,
      hasMore: true,
      shopList: [],
      // 界面/组件 初始数据
    };
  }

  componentWillReact() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() {
    this.setState({
      shopList: [],
    }, () => {
      this.redirectMarket({});
    })
  }

  componentDidHide() { }


  /**
   * @description: 获取商品列表
   * @param {type} 
   * @return: 
   */

  redirectMarket = ({ pageNo = 1, callBack, pageSize = 10 }) => {
    const { shopList } = this.state;
    const companyId = this.getCompanyId();
    const currentData = {
      page: pageNo,
      pageSize: pageSize,
      companyId: companyId
    }
    Model.liveapi.redirectMarket(currentData).then(res => {
      if (!res) {
        return false
      }
      this.setState({
        shopList: shopList.concat(res),
        pageIndex: pageNo,
        hasMore: !(res.length < pageSize),
        // isGoodsRequested: true
      }, () => {
        if (callBack) {
          callBack();
        }
      })
    })
  }


  goLive = (livedetail) => {
    const companyId = this.getCompanyId();
    if (livedetail.liveStatus == 2) {
      if (livedetail.streamStatus == 0) {
        Taro.navigateTo({
          url: `/kangLive/pages/golive/golive?liveId=${livedetail.id}&companyId=${companyId}&isLiveOrRedirectLive=${livedetail.isLiveOrRedirectLive || null}&pliveId=${livedetail.pliveId || 0}`
        })
      } else {
        return false;
      }
    } else {
      Taro.navigateTo({
        url: `/kangLive/pages/prelive/prelive?liveId=${livedetail.id}&companyId=${companyId}&isLiveOrRedirectLive=${livedetail.isLiveOrRedirectLive || null}&pliveId=${livedetail.pliveId || 0}`
      })
    }
  }

  insRef = (node) => {
    this.refList = node;
  };

  /**
   * @description: 下拉刷新
   * @param {type} 
   * @return: 
   */

  pullDownRefresh = () => {
    // const companyId = this.getCompanyId();
    // this.queryLiveByCompanyId({ callBack: fn, companyId: companyId });
  }

  /**
   * @description: 分页获取数据
   * @param {type} 
   * @return: 
   */

  onScrollToLower = (fn) => {
    let { pageIndex } = this.state;
    this.setState({
      pageIndex: pageIndex += 1
    })
    const pageNum = this.state.pageIndex;
    this.redirectMarket({ pageNo: pageNum, callBack: fn });
  };


  render() {
    const { isLoaded, hasMore, shopList } = this.state;

    return (
      <View className={styles.listContainer}>


        <ListView
          ref={node => this.insRef(node)}
          isLoaded={isLoaded}
          hasMore={hasMore}
          className={styles.scroll_content}
          onScrollToLower={this.onScrollToLower}
          onPullDownRefresh={this.pullDownRefresh}
          launch={{
            launchEmpty: true
          }}
          renderEmpty={<View className={styles.empty_box}><Empty /></View>}
        >
          {/* 今日爆品 */}
          <View className={styles.firInner}>
            <View className={styles.turnList}>
              {
                (shopList || []).map((v, index) => {
                  return (
                    <View className={styles.turn_Data_List} key={index + 1}>
                      <View className={styles.fixed_style} onClick={() => this.goLive(v)}>
                        <Image className={styles.fixed_style_img} src={v.adverImgUrl}></Image>
                        <View className={styles.liveText}>
                          {v.liveStatus == 2 ?
                            <View className={`${styles.liveLeftText} ${styles.turnLeftText}`}>
                              <Image className={styles.imgStyle} src={Assets.my.shopgif}></Image>
                              <Text>{v.streamStatus == 0 ? '直播中' : '主播已离开'}</Text>
                            </View> : <View className={`${styles.liveLeftText} ${styles.preLeftText}`}>
                              <Text>{v.liveStatus !== 2 ? '直播预告' : null}</Text>
                            </View>}
                        </View>
                        <View className={styles.bot_style}>
                          {v.liveStatus == 1 ? <View className={styles.liveRightText}>{Common.formatDateTime(v.startTime)}开播</View> : null}
                          {v.liveStatus == 2 && v.viewCount != 0 ? <View className={styles.liveRightText}>{`${v.viewCount || 0}人正在观看`}</View> : null}

                          <Ellipsis count={1} className={styles.lookShop_style}>
                            {v.name}
                          </Ellipsis>
                        </View>

                      </View>
                    </View>
                  )
                })

              }
              {/* {
                shopList.length == 0
                  ? <View className={styles.nogoodsContainer}>
                    <Image className={styles.nogoodsImg} src={Assets.goods.defalutNoGoods}></Image>
                    <View className={styles.nogoodsLabel}>这个小店还没上新过商品呢...</View>
                  </View>
                  : null
              } */}
            </View>
          </View>
        </ListView>
      </View>
    );
  }

}

export default TurnLive;
