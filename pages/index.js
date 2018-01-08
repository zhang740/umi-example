import router from 'umi/router';
import { Component } from '../components/base';
import { Button, Popover, List, Modal, WhiteSpace, Toast, Picker, InputItem } from 'antd-mobile';
import Link from 'umi/link';
import { createForm } from 'rc-form';
import styles from './index.css';

const Item = List.Item;
const Brief = Item.Brief;
const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

export class Index extends Component {
  state = {
    PopVis: false,
  }

  customModal = () => {
    const alert = Modal.alert;
    const alertInstance = alert(
      '确认框',
      <div>
        <p>这段文字比较长，这段文字比较长，这段文字比较长</p>
        <p>(5秒后自动关闭)</p>
      </div>,
      [
        { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
        { text: '好的', onPress: () => console.log('ok') },
      ]
    );
    setTimeout(() => {
      alertInstance.close();
    }, 5000);
  };

  inputModal = () => {
    const prompt = Modal.prompt;
    prompt('输入内容', '请输入内容',
      [
        { text: '取消' },
        {
          text: '确认',
          onPress: value => new Promise((resolve) => {
            Toast.info('延迟1秒关闭', 1);
            setTimeout(() => {
              resolve();
              console.log(`value:${value}`);
            }, 1000);
          }),
        },
      ], 'default', null, ['输入问题'])
  }

  gotoExtInfoPage = () => {
    router.push({
      pathname: '/extinfo',
      query: { id: 123 }
    })
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(error, value);
    });
  }

  renderPop() {
    const { PopVis } = this.state;
    return (
      <Popover mask
        visible={PopVis}
        overlay={[
          (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')}>Scan</Item>),
          (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
          (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
            <span>Help</span>
          </Item>),
        ]}
        align={{
          offset: [-5, 5],
        }}
        onVisibleChange={(v) => this.setState({ PopVis: v })}
        onSelect={(item) => {
          console.log('popover select:', item);
          this.setState({
            visible: false,
          });
        }}
      >
        <div></div>
      </Popover>
    )
  }

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        {this.renderPop()}
        <List>
          <Link to="/extinfo"><Item>链接跳转</Item></Link>
          <Item arrow="horizontal" onClick={() => this.setState({ PopVis: true })}>弹出Popover</Item>
          <Item extra="扩展信息" arrow="horizontal" onClick={this.gotoExtInfoPage}>路由跳转</Item>
        </List>
        <WhiteSpace />
        <List>
          <Item onClick={this.customModal}>弹出对话框</Item>
          <Item onClick={this.inputModal}>输入对话框</Item>
          <Item extra="扩展信息" align="top" multipleLine>
            多行文本
            <Brief>第二行</Brief>
            <Brief>第三行</Brief>
          </Item>
          <Picker title="标题" data={[
            { value: '1', label: '1' },
            { value: '2', label: '2' },
            { value: '3', label: '3' },
          ]} cols={1} {...getFieldProps('picker', {
            normalize: (v, prev) => v && v[0],
          }) }>
            <Item arrow="horizontal">选择器</Item>
          </Picker>
          <InputItem
            {...getFieldProps('money', {
              rules: [{ required: true }],
              normalize: (v, prev) => {
                if (v && !/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(v)) {
                  if (v === '.') {
                    return '0.';
                  }
                  return prev;
                }
                return v;
              },
            }) }
            type="money"
            placeholder="请输入金额"
            clear
          >金额</InputItem>
        </List>
        <div className={styles.submit}>
          <Button type="primary" onClick={this.submit}>提交</Button>
        </div>
      </div>
    );
  }
}

export default createForm()(Index);
