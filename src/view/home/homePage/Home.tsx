import { Carousel, Divider } from 'antd';
import LatestNew from './components/LatestNew';

import './home.less';
const HomPage = () => {
  return (
    <div className="home">
      <Carousel autoplay>
        <div className="carousel-div carousel-1 cursor-pointer">
          <div className=" h-full flex flex-col justify-center mx-12 cursor-pointer">
            <h2>您你你你你你你你你你你你你你你你</h2>
            <h5>范德萨发烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦烦</h5>
          </div>
        </div>
        <div className="carousel-div carousel-2">
          <div className=" h-full flex flex-col justify-center mx-12 cursor-pointer">
            <h2>哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇哇</h2>
            <h5>顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶的撒钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱钱</h5>
          </div>
        </div>
        <div className="carousel-div carousel-3">
          <div className=" h-full flex flex-col justify-center mx-12 cursor-pointer">
            <h2>呃呃呃呃呃呃呃呃呃呃呃呃呃</h2>
            <h5>日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日日</h5>
          </div>
        </div>
      </Carousel>
      <div className="news">
        <Divider></Divider>
        <h2 className="news-title">动态</h2>
        <LatestNew></LatestNew>
      </div>
    </div>
  );
};

export default HomPage;
