import { Typography } from 'antd';
import { ToleranceIcons } from '../ToleranceIcons/ToleranceIcons';
import { Status } from '../ToleranceIcons/status';
import style from './Header.module.css';

export const Header = ({ title, status }: { title: string, status: Status }) => {
  return (
    <div className={`${style.container} ${style[status.toLowerCase()]}`}>
      <Typography.Title level={3}>{title}</Typography.Title>
      <ToleranceIcons value={status} />
    </div>
  );
};
