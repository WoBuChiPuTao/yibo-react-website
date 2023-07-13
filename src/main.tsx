import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './router';

// tailwindcss样式引入
import 'tailwindcss/tailwind.css';
// 引入与antd样式冲突的tailwindcss文件
import './style/tailwindcss/preflight.css';

import './style/index.less';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router></Router>
  </React.StrictMode>,
);
