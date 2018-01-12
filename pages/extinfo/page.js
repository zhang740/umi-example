import router from 'umi/router';
import { Component } from '../../components/base';
import { Result, Button, WhiteSpace } from 'antd-mobile';
import styles from './page.css';

const myImg = src => <img src={src} className={`am-icon am-icon-md ${styles.img}`} alt="" />;

export default class extends Component {

  constructor(props) {
    super(props, {
      title: '扩展信息',
    });
  }

  render() {
    const { location } = this.props;
    console.log(location.query);
    return (
      <div>
        <Result
          img={myImg('https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg')}
          title="等待处理"
          message="已提交申请，等待银行处理"
        />
        <WhiteSpace />
        <div className={styles.back}>
          <Button onClick={() => router.goBack()}>返回</Button>
        </div>
        <div className={styles.hd}>高清方案</div>
      </div>
    );
  }
}
