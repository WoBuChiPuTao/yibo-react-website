import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface Props {
  children?: ReactNode;
}
function renderLayout(props: Props) {
  return (
    <div>
      我是userLayout
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default renderLayout;
