import './HomeCard.less';

import defaultImg from '@/assets/3.jpg';

interface Props {
  className?: string;
  title: string;
  href?: string;
  subtitle?: string;
  image?: string;
}

function Card({ href, image, title, subtitle, className }: Props) {
  return (
    <div className={`home-card ${className}`}>
      <div className="card-header">
        <a href={href}>
          <img src={image || defaultImg} />
        </a>
      </div>
      <div className="card-body">
        <a href={href}>
          <span>{title}</span>
          <p>{subtitle}</p>
        </a>
      </div>
    </div>
  );
}

export default Card;
