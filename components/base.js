import React from 'react';
import axios from 'axios';
import './base.css';

export class Component extends React.PureComponent {

  constructor(props, meta) {
    super(props);

    this.meta = meta;
  }

  componentWillMount() {
    // init
    // http拦截器等
  }

  // 跟DOM有关的放到这里，防止SSR情况下异常
  componentDidMount() {
    // meta 处理
    const meta = this.meta;
    if (meta && meta.title) {
      document.title = meta.title;
    }
  }

  // 公共方法
}
