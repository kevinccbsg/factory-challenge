import { Typography } from 'antd';
import { ToleranceIcons } from '../ToleranceIcons/ToleranceIcons';
import { Status } from '../ToleranceIcons/status';

export const Header = ({ title, status }: { title: string, status: Status }) => {
  return (
    <div>
      <Typography.Title level={3}>{title}</Typography.Title>
      <ToleranceIcons value={status} />
    </div>
  );
};
