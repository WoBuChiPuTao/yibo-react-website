import Card from '@/components/Card/HomeCard';
import Img2 from '@/assets/2.jpg';

const LatestNew = () => {
  return (
    <>
      <div className="md:flex md:mb-6">
        <div className="md:w-2/3  w-full md:mr-4 mb-6 md:mb-0 enter-y">
          <Card
            href="/?page=product"
            title="你您你你你你你你你你你你你"
            subtitle="顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶"
          ></Card>
        </div>
        <div className="md:w-1/3 w-full mb-6  md:mb-0 enter-y">
          <Card
            className=" text-white bg-gray-400"
            image={Img2}
            title="你您你你你你你你你你你你你"
            subtitle="啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦"
          ></Card>
        </div>
      </div>
      <div className="md:flex md:mb-6">
        <Card
          className="md:w-1/3 w-full  md:mr-4  mb-6  md:mb-0 text-white bg-teal-600 "
          title="你您你你你你你你你你你你你"
          subtitle="顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶顶"
        ></Card>
        <Card
          className="md:w-1/3 w-full md:mr-4  mb-6  md:mb-0"
          image={Img2}
          title="你您你你你你你你你你你你你"
          subtitle="啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦"
        ></Card>
        <Card
          className="md:w-1/3 w-full mb-6 md:mb-0 text-white bg-slate-400"
          image={Img2}
          title="你您你你你你你你你你你你你"
          subtitle="啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦"
        ></Card>
      </div>
      <div className="enter-y"></div>
    </>
  );
};

export default LatestNew;
