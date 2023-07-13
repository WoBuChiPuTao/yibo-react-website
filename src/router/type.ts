import { ComponentType, LazyExoticComponent, ReactNode } from 'react';

export interface RouteInfo {
  path: string;
  title: string;
  component: LazyExoticComponent<() => JSX.Element> | ComponentType<any>;
  children?: RouteInfo[];
  redirect?: string;
  query?: string;
  meta?: Record<string, any>;
}

export interface SetupRouterProps {
  children?: ReactNode;
}

export interface RedirectProps {
  to: string;
}
