import { Typography } from 'antd';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={styles.container}>
      <Typography.Title level={1}>Factory</Typography.Title>
    </div>
  );
};

export default Nav;
