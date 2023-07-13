import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.less';

interface Tab {
  path: string;
  label: string;
}

interface Props {
  items: Tab[];
  onChange?: (path: string) => void | Promise<void>;
}

function Header({ items, onChange }: Props) {
  const navigate = useNavigate();

  const [selectedPath, setPath] = useState(window.location.pathname + window.location.search);

  const changePath = (path: string) => {
    if (selectedPath === path) return;
    setPath(path);
    navigate(path);

    onChange && onChange(path);
  };

  return (
    <div className={styles.header}>
      {items.map((item, index) => (
        <div key={index} className=" bg-red-600" onClick={() => changePath(item.path)}>
          {item.label}
        </div>
      ))}
    </div>
  );
}

export default Header;
