import Header from '@/components/header/Header';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { tabs, TabsEnum } from './info';
import { useQuery } from '@/hooks';
import { useLocation } from 'react-router-dom';
import AboutUs from './components/About';
import HomPage from './components/Home';
import News from './components/News';
import Product from './components/Product';
import Solution from './components/Solution';

const Home = () => {
  const queryMap = useQuery();
  const location = useLocation();

  const [page, setPage] = useState('');

  const getPage = () => {
    switch (page) {
      case TabsEnum.PRODUCT:
        return <Product />;
      case TabsEnum.SOLUTION:
        return <Solution />;
      case TabsEnum.NEWS:
        return <News />;
      case TabsEnum.ABOUT:
        return <AboutUs />;
      default:
        return <HomPage />;
    }
  };

  useEffect(() => {
    const currentPage = queryMap.get('page');
    setPage(currentPage || '');
  }, [location]);

  return (
    <div>
      <Header items={tabs}></Header>
      <div className="flex justify-center">
        <Button type="primary">主页</Button>
      </div>
      {getPage()}
    </div>
  );
};

export default Home;
