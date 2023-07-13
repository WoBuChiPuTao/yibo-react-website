import { FC } from 'react';


export enum TabsEnum {
  HOME_PAGE = '',
  PRODUCT = 'product',
  SOLUTION = 'solution',
  NEWS = 'news',
  ABOUT = 'about',
}

export const tabs = [
  {
    path: '/',
    label: '首页',
  },
  {
    path: `/?page=${TabsEnum.PRODUCT}`,
    label: '产品信息',
  },
  {
    path: `/?page=${TabsEnum.SOLUTION}`,
    label: '解决方案',
  },
  {
    path: `/?page=${TabsEnum.NEWS}`,
    label: '新闻动态',
  },
  {
    path: `/?page=${TabsEnum.ABOUT}`,
    label: '关于我们',
  },
];
