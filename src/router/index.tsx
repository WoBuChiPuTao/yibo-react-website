import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { routes } from './routes';
import { FunctionComponent, Suspense, useEffect } from 'react';
import { RedirectProps, RouteInfo, SetupRouterProps } from './type';

const setupRouter: FunctionComponent<SetupRouterProps> = (props: SetupRouterProps) => {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>{routerMap(routes)}</Routes>
    </BrowserRouter>
  );
};

function routerMap(routes: RouteInfo[] = []) {
  if (routes && routes.length) {
    return routes.map(({ path, component: Comp, children, redirect }) => {
      return children && children.length ? (
        <Route
          path={path}
          key={path}
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Comp></Comp>
            </Suspense>
          }
        >
          {routerMap(children)} // 递归遍历子路由
          {redirect ? (
            <Route path={path} element={<Redirect to={redirect} />}></Route>
          ) : (
            <Route path={path} element={<Redirect to={children[0].path} />}></Route>
          )}
        </Route>
      ) : (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<span>Loading...</span>}>
              <Comp />
            </Suspense>
          }
        ></Route>
      );
    });
  }
}

const Redirect: FunctionComponent<RedirectProps> = ({ to }) => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  });

  return null;
};

export default setupRouter;
