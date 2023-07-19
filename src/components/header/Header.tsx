import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './header.module.less';
import logo from '/vite.svg';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';

interface Tab {
  path: string;
  label: string;
}

interface Props {
  items: Tab[];
  fillBack?: boolean;
  onChange?: (path: string) => void | Promise<void>;
}

function Header({ items, fillBack, onChange }: Props) {
  const navigate = useNavigate();

  const [selectedPath, setPath] = useState(window.location.pathname + window.location.search);
  // 上次滚动事件的值
  const [scrollTop, setScrollTop] = useState(document.documentElement.scrollTop);
  const [isShow, setShow] = useState(true);

  const [openDrawer, setOpen] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const changePath = (path: string) => {
    if (selectedPath === path) return;
    setPath(path);
    navigate(path);
    setOpen(false);
    onChange && onChange(path);
  };

  const listenrToTop = () => {
    const toTop = document.documentElement.scrollTop;
    const sub = toTop - scrollTop;
    if (sub < 0 && isShow === false) {
      setShow(true);
    } else if (sub > 0 && toTop > 50 && isShow === true) {
      setShow(false);
    }
    setScrollTop(toTop);
  };

  useEffect(() => {
    document.addEventListener('scroll', listenrToTop);

    return () => {
      document.removeEventListener('scroll', listenrToTop);
    };
  });

  return (
    <>
      <div
        ref={headerRef}
        className={scrollTop ? `${styles.header} ${styles.header_bg_white}` : styles.header}
        style={{ top: isShow ? '0px' : '-5rem' }}
      >
        <MenuOutlined
          className={
            !scrollTop && !fillBack ? `${styles.icon_menu} ${styles.icon_white}` : styles.icon_menu
          }
          onClick={() => setOpen(true)}
        />
        <a href="/">
          <img src={logo} alt="" />
        </a>

        <div
          className={
            !scrollTop && !fillBack
              ? `${styles.header_right} ${styles.header_white}`
              : styles.header_right
          }
        >
          <ul className={styles.title}>
            {items.map((item, index) => (
              <li
                key={index}
                className={
                  selectedPath === item.path
                    ? `${styles.title_link} ${styles.link_selected} `
                    : styles.title_link
                }
                onClick={() => changePath(item.path)}
              >
                <a>{item.label}</a>
              </li>
            ))}
          </ul>
          <div
            className={
              !scrollTop && !fillBack
                ? `${styles.lang_select} ${styles.select_white}`
                : styles.lang_select
            }
          >
            <div className={`${styles.lang} ${styles.lang_active}`}>CH</div>
            <div className={styles.lang_en}>EN</div>
          </div>
        </div>
      </div>
      {fillBack && <div className={styles.header_back}></div>}
      <Drawer
        className={styles.drawer}
        placement={'left'}
        width={280}
        onClose={() => setOpen(false)}
        open={openDrawer}
      >
        <ul className={styles.menu}>
          {items.map((item, index) => (
            <li key={index} className={styles.item} onClick={() => changePath(item.path)}>
              {item.label}
            </li>
          ))}
        </ul>
        <div className={styles.lang}>
          <div className={styles.lang_ch}>中文</div>
          <div className={styles.lang_en}>English</div>
        </div>
      </Drawer>
    </>
  );
}

export default Header;
