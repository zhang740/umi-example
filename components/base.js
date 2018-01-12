import React from 'react';
import axios from 'axios';
import './base.css';

export class Component extends React.PureComponent {

  constructor(props, meta) {
    super(props);

    // meta 处理
    if (meta && meta.title) {
      document.title = meta.title
    }
  }

  componentWillMount() {
    // init
    // http拦截器等
  }

  // 公共方法
}
