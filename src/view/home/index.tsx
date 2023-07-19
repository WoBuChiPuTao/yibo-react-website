import Header from '@/components/header/Header';
import { useEffect, useState } from 'react';
import { tabs, TabsEnum } from './info';
import { useQuery } from '@/hooks';
import { useLocation } from 'react-router-dom';
import AboutUs from './components/About';
import HomPage from './homePage/Home';
import News from './components/News';
import Product from './components/Product';
import Solution from './components/Solution';
import ServiceSupport from './serviceSupport/ServiceSupport';

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
      case TabsEnum.SUPPORT:
        return <ServiceSupport />;
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
      <Header items={tabs} fillBack={page !== TabsEnum.HOME_PAGE}></Header>
      {getPage()}
    </div>
  );
};

export default Home;
