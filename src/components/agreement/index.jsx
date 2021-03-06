/**
 * @Author: limin.zhang
 * @Email: limin.zhang@jdxiaokang.com
 * @Update: 2020-04-14 16:25:25
 * @Description: 用户协议
 */
import Taro from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './index.module.styl';

class Agreement extends Taro.Component {
        constructor(props) {
                super(props);

                this.config = {
                        navigationBarTitleText: '',
                }

                this.state = {
                        // 界面/组件 初始数据
                };
        }

        componentWillReact() { }

        componentDidMount() { }

        componentWillUnmount() { }

        componentDidShow() { }

        componentDidHide() { }

        render() {
                const { } = this.state;

                return (
                        <View className={styles.container}>
                                <View className={styles.content}></View>
                                <View className={styles.title}>一、服务条款的确认及接受</View>
                                <View className={styles.content}>1、康小铺（指www.kangxiaopu.com及其移动客户端软件、应用程序，以下称“本网站”）各项电子服务的所有权和运作权归属于“康小铺”所有，本网站提供的服务将完全按照其发布的服务条款和操作规则严格执行。您确认所有服务条款并完成注册程序时，本协议在您与本网站间成立并发生法律效力，同时您成为本网站正式用户。
        </View>
                                <View className={styles.content}>2、根据国家法律法规变化及本网站运营需要，康小铺有权对本协议条款及相关规则不时地进行修改，修改后的内容一旦以任何形式公布在本网站上即生效，并取代此前相关内容，您应不时关注本网站公告、提示信息及协议、规则等相关内容的变动。您知悉并确认，如您不同意更新后的内容，应立即停止使用本网站；如您继续使用本网站，即视为知悉变动内容并同意接受。
        </View>
                                <View className={styles.title}>二、本网站运用自身开发的操作系统通过国际互联网络为用户提供购买商品等服务。使用本网站，您必须：</View>
                                <View className={styles.content}>（1）自行配备上网的所需设备，包括个人手机、平板电脑、调制解调器、路由器等；</View>
                                <View className={styles.content}>（2）自行负担个人上网所支付的与此服务有关的电话费用、网络费用等；</View>
                                <View className={styles.content}>（3）选择与所安装终端设备相匹配的软件版本，包括但不限于iOS、Android、Windows等多个康小铺发布的应用版本。</View>
                                <View className={styles.title}>2、基于本网站所提供的网络服务的重要性，您确认并同意：</View>
                                <View className={styles.content}>
                                        （1）提供的注册资料真实、准确、完整、合法有效，注册资料如有变动的，应及时更新；
        </View>
                                <View className={styles.content}>
                                        （2）如果您提供的注册资料不合法、不真实、不准确、不详尽的，您需承担因此引起的相应责任及后果，并且康小铺保留终止您使用本网站各项服务的权利。
        </View>
                                <View className={styles.title}>三、订单</View>
                                <View className={styles.content}>1、您在本网站购买的商品将按照本网站上您所指定的送货地址进行配送。订单信息中列出的送货时间为参考时间，参考时间的计算是根据库存状况、正常的处理过程和送货时间、送货地点的基础上估计得出的。您应当清楚准确地填写您的送货地址、联系人及联系方式等配送信息，您知悉并确认，您所购买的商品应仅由您填写的联系人接受身份查验后接收商品，因您变更联系人或相关配送信息而造成的损失由您自行承担。</View>
                                <View className={styles.content}>2、在您下订单时，请您仔细确认所购商品的名称、价格、数量、型号、规格、尺寸、联系地址、电话、收货人等信息。收货人与您本人不一致的，收货人的行为和意思表示视为您的行为和意思表示，您应对收货人的行为及意思表示的法律后果承担连带责任。</View>
                                <View className={styles.content}>3、您理解并同意：本网站上销售商展示的商品和价格等信息仅仅是要约邀请，您下单时须填写您希望购买的商品数量、价款及支付方式、收货人、联系方式、收货地址（合同履行地点）、合同履行方式等内容；系统生成的订单信息是计算机信息系统根据您填写的内容自动生成的数据，仅是您向销售商发出的合同要约；销售商收到您的订单信息后，只有在销售商将您在订单中订购的商品从仓库实际直接向您发出时（以商品出库为标志），方视为您与销售商之间就实际直接向您发出的商品建立了合同关系；如果您在一份订单里订购了多种商品并且销售商只给您发出了部分商品时，您与销售商之间仅就实际直接向您发出的商品建立了合同关系，只有在销售商实际直接向您发出了订单中订购的其他商品时，您和销售商之间就订单中其他已实际直接向您发出的商品才成立合同关系；对于电子书、数字音乐、在线手机充值等数字化商品，您下单并支付货款后合同即成立。当您作为消费者为生活消费需要下单并支付货款的情况下，您货款支付成功后即视为您与销售商之间就已支付货款部分的订单建立了合同关系。</View>
                                <View className={styles.content}>4、尽管销售商做出最大的努力，但由于市场变化及各种以合理商业努力难以控制因素的影响，本网站无法避免您提交的订单信息中的商品出现缺货、价格标示错误等情况；如您下单所购买的商品出现以上情况，您有权取消订单，销售商亦有权自行取消订单，若您已经付款，则为您办理退款。</View>
                                <View className={styles.title}>四、配送和交付</View>
                                <View className={styles.content}>1、您在本网站购买的商品将按照本网站上您所指定的送货地址进行配送。订单信息中列出的送货时间为参考时间，参考时间的计算是根据库存状况、正常的处理过程和送货时间、送货地点的基础上估计得出的。您应当清楚准确地填写您的送货地址、联系人及联系方式等配送信息，您知悉并确认，您所购买的商品应仅由您填写的联系人接受身份查验后接收商品，因您变更联系人或相关配送信息而造成的损失由您自行承担。</View>
                                <View className={styles.content}>2、因如下情况造成订单延迟或无法配送等，本网站将无法承担迟延配送或无法配送的责任：</View>
                                <View className={styles.content}>（1）客户提供错误信息和不详细的地址；</View>
                                <View className={styles.content}>（2）货物送达无人签收或拒收，由此造成的重复配送所产生的费用及相关的后果。</View>
                                <View className={styles.content}>（3）不可抗力，例如：自然灾害及恶劣天气、交通戒严等政府、司法机关的行为、决定或命令、意外交通事故、罢工、法规政策的修改、恐怖事件、抢劫、抢夺等暴力犯罪、突发战争等。</View>
                                <View className={styles.content}>3、您在本网站购买的商品由康小铺的关联方或第三方配送公司（包括顺丰、圆通等，以下称“配送公司”）为您完成订单交付的，系统或单据记录的签收时间为交付时间；您购买的商品采用在线传输方式交付的，销售商向您指定系统发送的时间为交付时间；您购买服务的，生成的电子或者实物凭证中载明的时间为交付时间。</View>
                                <View className={styles.title}>五、用户个人信息保护及授权</View>
                                <View className={styles.content}>1、您知悉并同意，为方便您使用本网站相关服务，本网站将存储您在使用时的必要信息，包括但不限于您的真实姓名、性别、生日、配送地址、联系方式、通讯录、相册、日历、定位信息等。除法律法规规定的情形外，未经您的许可康小铺不会向第三方公开、透露您的个人信息。康小铺对相关信息采取专业加密存储与传输方式，利用合理措施保障用户个人信息的安全。</View>
                                <View className={styles.content}>2、您知悉并确认，您在注册帐号或使用本网站的过程中，需要提供真实的身份信息，康小铺将根据国家法律法规相关要求，进行基于移动电话号码的真实身份信息认证。若您提供的信息不真实、不完整，则无法使用本网站或在使用过程中受到限制，同时，由此产生的不利后果，由您自行承担。</View>
                                <View className={styles.content}>3、您在使用本网站某一特定服务时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”），您在使用该项服务前请阅读并同意相关的单独协议；您使用前述特定服务，即视为您已阅读并同意接受相关单独协议。</View>
                                <View className={styles.content}>4、您充分理解并同意：</View>
                                <View className={styles.content}>（1）接收通过邮件、短信、电话等形式，向在本网站注册、购物的用户、收货人发送的订单信息、促销活动等内容；</View>
                                <View className={styles.content}>（2）为配合行政监管机关、司法机关执行工作，在法律规定范围内康小铺有权向上述行政、司法机关提供您在使用本网站时所储存的相关信息，包括但不限于您的注册信息等，或使用相关信息进行证据保全，包括但不限于公证、见证等；
</View>
                                <View className={styles.content}>（3）康小铺依法保障您在安装或使用过程中的知情权和选择权，在您使用本网站服务过程中，涉及您设备自带功能的服务会提前征得您同意，您一经确认，康小铺有权开启包括但不限于收集地理位置、读取通讯录、使用摄像头、启用录音等提供服务必要的辅助功能。
</View>
                                <View className={styles.content}>（4）康小铺有权根据实际情况，在法律规定范围内自行决定单个用户在本网站及服务中数据的最长储存期限以及用户日志的储存期限，并在服务器上为其分配数据最大存储空间等。</View>
                                <View className={styles.title}>六、用户行为规范</View>
                                <View className={styles.content}>1、本协议依据国家相关法律法规规章制定，您同意严格遵守以下义务：
</View>
                                <View className={styles.content}>（1）不得传输或发表：煽动抗拒、破坏宪法和法律、行政法规实施的言论，煽动颠覆国家政权，推翻社会主义制度的言论，煽动分裂国家、破坏国家统一的言论，煽动民族仇恨、民族歧视、破坏民族团结的言论；
</View>
                                <View className={styles.content}>（2）从中国大陆向境外传输资料信息时必须符合中国有关法规；
</View>
                                <View className={styles.content}>（3）不得利用本网站从事洗钱、窃取商业秘密、窃取个人信息等违法犯罪活动；
</View>
                                <View className={styles.content}>（4）不得干扰本网站的正常运转，不得侵入本网站及国家计算机信息系统；
</View>
                                <View className={styles.content}>（5）不得传输或发表任何违法犯罪的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、伤害性的、庸俗的、淫秽的、不文明的等信息资料；
</View>
                                <View className={styles.content}>（6）不得传输或发表损害国家社会公共利益和涉及国家安全的信息资料或言论；
</View>
                                <View className={styles.content}>（7）不得教唆他人从事本条所禁止的行为；
</View>
                                <View className={styles.content}>（8）不得利用在本网站注册的账户进行牟利性经营活动；
</View>
                                <View className={styles.content}>（9）不得发布任何侵犯他人隐私、个人信息、著作权、商标权等知识产权或合法权利的内容；
</View>
                                <View className={styles.content}>2、您须对自己在网上的言论和行为承担法律责任，您若在本网站上散布和传播反动、色情或其它违反国家法律的信息，本网站的系统记录有可能作为您违反法律的证据。
</View>
                                <View className={styles.title}>七、本网站使用规范</View>
                                <View className={styles.content}>1、关于移动客户端软件的获取与更新：
</View>
                                <View className={styles.content}>您可以直接从康小铺网站上获取康小铺移动客户端软件，也可以从得到康小铺授权的第三方获取，如果您从未经康小铺授权的第三方获取软件或与康小铺移动客户端软件名称相同的安装程序，康小铺无法保证该软件能够正常使用，并对因此给您造成的损失不予负责；
</View>
                                <View className={styles.content}>为了改善用户体验、完善服务内容，康小铺将不断努力开发新的服务，并为您不时提供软件更新，新版本发布后，旧版本的软件可能无法使用，康小铺不保证旧版本软件继续可用及相应的客户服务，请您随时核对并下载最新版本。
</View>
                                <View className={styles.content}>2、除非法律允许或康小铺书面许可，您使用本网站过程中不得从事下列行为：
</View>
                                <View className={styles.content}>（1）删除本网站及其副本上关于著作权的信息；
</View>
                                <View className={styles.content}>（2）对本网站进行反向工程、反向汇编、反向编译，或者以其他方式尝试发现本网站的源代码；
</View>
                                <View className={styles.content}>（3）对康小铺拥有知识产权的内容进行使用、出租、出借、复制、修改、链接、转载、汇编、发表、出版、建立镜像站点等；
</View>
                                <View className={styles.content}>（4）对本网站或者本网站运行过程中释放到任何终端内存中的数据、网站运行过程中客户端与服务器端的交互数据，以及本网站运行所必需的系统数据，进行复制、修改、增加、删除、挂接运行或创作任何衍生作品，形式包括但不限于使用插件、外挂或非经康小铺授权的第三方工具/服务接入本网站和相关系统；
</View>
                                <View className={styles.content}>（5）通过修改或伪造网站运行中的指令、数据，增加、删减、变动网站的功能或运行效果，或者将用于上述用途的软件、方法进行运营或向公众传播，无论这些行为是否为商业目的；
</View>
                                <View className={styles.content}>（6）通过非康小铺开发、授权的第三方软件、插件、外挂、系统，登录或使用本网站及服务，或制作、发布、传播上述工具；
</View>
                                <View className={styles.content}>（7）自行或者授权他人、第三方软件对本网站及其组件、模块、数据进行干扰。</View>

                                <View className={styles.title}>八、违约责任</View>
                                <View className={styles.content}>1、如果康小铺发现或收到他人举报投诉您违反本协议约定或存在任何恶意行为的，康小铺有权不经通知随时对相关内容进行删除、屏蔽，并视行为情节对违规帐号处以包括但不限于警告、限制或禁止使用部分或全部功能、帐号封禁、注销等处罚，并公告处理结果。
</View>
                                <View className={styles.content}>2、康小铺有权依据合理判断对违反有关法律法规或本协议规定的行为采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，您应独自承担由此而产生的一切法律责任。
</View>
                                <View className={styles.content}>3、您理解并同意，因您违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；康小铺因此遭受损失的，您也应当一并赔偿。
</View>
                                <View className={styles.content}>4、除非另有明确的书面说明,康小铺不对本网站的运营及其包含在本网站上的信息、内容、材料、产品（包括软件）或服务作任何形式的、明示或默示的声明或担保（根据中华人民共和国法律另有规定的以外）。
</View>
                                <View className={styles.title}>九、所有权及知识产权</View>
                                <View className={styles.content}>1、您一旦接受本协议，对于您提供、上传、创作、发布在本网站的文字、评论、图片、照片、视频、音频等任何形式的信息内容（包括但不限于客户评价、客户咨询、各类话题文章等），您免费授予康小铺及其关联公司至保护期终止为止、不可撤销的、全球范围的、排他的许可使用著作权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可许可使用的权利）、肖像权、用户ID名称等相关的全部合法权利权益，就康小铺具有诉讼主体资格的权利、权益，康小铺有权以自身名义对第三方侵权行为取证及提起诉讼。您同意康小铺及其关联公司有权存储、使用、复制、修订、编辑、发布、展示、翻译、分发、推广、出版、发行、信息网络传播您以上信息内容，有权改编制作派生作品，并以已知或日后开发的形式、媒体或技术将上述信息纳入其它作品内。
</View>
                                <View className={styles.content}>2、康小铺有权再许可给其他第三方第九条第一款的所有权利。
</View>
                                <View className={styles.content}>3、您应确保在康小铺网站上发表的第九条第一款各类信息内容均不涉及侵犯第三方肖像、隐私、知识产权或其他合法权益。否则康小铺有权随时采取包括但不限于删除、断开链接等措施。
</View>
                                <View className={styles.content}>4、本协议已经构成《中华人民共和国著作权法》第二十四条（条文序号依照2010年修订版《著作权法》确定）及相关法律规定的著作财产权等权利许可使用的书面协议，其效力及于您在本网站上发布的任何受著作权法保护的作品内容，无论该等内容形成于本协议订立前还是本协议订立后。
</View>
                                <View className={styles.content}>5、您同意并已充分了解本协议的条款，承诺不将已发表于本网站的信息，以任何形式发布或授权其它主体以任何方式使用（包括但不限于在各类网站、媒体上使用）。
</View>
                                <View className={styles.content}>6、除法律另有强制性规定外，未经康小铺明确的特别书面同意,任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用本网站的信息内容，否则，康小铺有权追究其法律责任。
</View>
                                <View className={styles.content}>7、本网站所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、数字下载、数据编辑和软件），均是康小铺或其内容提供者的财产，受中国和国际版权法的保护。本网站上所有内容的汇编是康小铺的排他财产，受中国和国际版权法的保护。本网站上所有软件都是康小铺或其关联公司或其软件供应商的财产，受中国和国际版权法的保护。
</View>
                                <View className={styles.title}>十、法律管辖适用及其他</View>
                                <View className={styles.content}>1、本协议的订立、执行和解释及争议的解决均应适用中国法律。如双方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，应向协议签订地有管辖权的人民法院提起诉讼。本协议签订地为中华人民共和国浙江省杭州市萧山区。
</View>
                                <View className={styles.content}>2、如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。
</View>
                                <View className={styles.content}>3、本协议未明示授权的其他权利仍由康小铺保留，您在行使这些权利时须另外取得康小铺的书面许可。康小铺如果未行使前述任何权利，并不构成对该权利的放弃。
</View>
                        </View>
                );
        }

}

export default Agreement;
