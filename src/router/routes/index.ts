import { lazy } from 'react';
import { RouteInfo } from '../type';

export const routes: RouteInfo[] = [
  {
    path: '/',
    title: '主页',
    component: lazy(() => import('@/view/home')),
  },
  {
    path: '/login',
    title: '登录',
    component: lazy(() => import('@/view/login')),
  },
  {
    path: '/user',
    title: '个人中心',
    component: lazy(() => import('@/view/user/layout')),
    redirect: '/user/index',
    children: [
      {
        path: 'index',
        title: '个人中心',
        component: lazy(() => import('@/view/user')),
      },
    ],
  },
  {
    path: '*',
    title: 'PageNotFound',
    component: lazy(() => import('@/view/notFound')),
  },
];
