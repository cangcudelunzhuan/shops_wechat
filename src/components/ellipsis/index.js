import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import classnames from 'classnames';
import styles from './style';


const isSupp = Taro.getEnv() !== Taro.ENV_TYPE.WEB || (document.body.style['line-clamp'] || document.body.style['-webkit-line-clamp']) === '';

const Ellipsis = function ({ count = 1, children, className }) {
  return (
    count === -1 ? <View className={className}>{children}</View> : <View className={classnames(styles[count === 1 ? 'ellipsi_box' : isSupp ? 'ellipsis_box' : 'ellipsis_wraper'], styles[`count_${count}`], className)}>{children}</View>
  );
};

export default Ellipsis;