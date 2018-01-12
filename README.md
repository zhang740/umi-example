# umi example

## Getting Started

Install dependencies.

```bash
$ npm i
```

Start dev server.

```bash
$ npm start
```

Build.

```bash
$ npm run build
```

### 创建页面
pages目录下每个 .js 文件为一个页面，如果创建文件夹，将以文件夹名称为页面名称，文件夹内创建 page.js。

e.g:
- index.js -> /index.html
- extinfo
	- page.js -> /extinfo.html


### 样式使用
umi默认使用css modules，在页面中 `import styles from './index.css';` 导入。

e.g:
`<div className={styles.submit}></div>`。

### 路由
在 umi 里，页面之间跳转有两种方式：声明式和编程式。

- 通过 umi/link 做声明式跳转
```
import Link from 'umi/link';

export default () => (
  <Link to="/list">Go to list page</Link>
);
```

- 通过 umi/router 做编程式跳转
```
import router from 'umi/router';

function goToListPage() {
  router.push('/list');
}
```

### 环境变量
* process.env.NODE_ENV


### SASS
```bash
npm i node-sass sass-loader
```

`.webpackrc`:
```json
{
 ...
 "extraBabelIncludes": [
 	...
	"node_modules/af-webpack/node_modules" // add
 ]
 "sass": {} // add
}
```

### 注意事项
* .umi 为自动生成目录，不要修改


