import {
  CheckCircleTwoTone,
  WarningTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';
import { red, gold, green } from '@ant-design/colors';
import { Status } from './status';

export const ToleranceIcons = ({ value }: { value: Status }) => {
  if (value === Status.OK) return <CheckCircleTwoTone twoToneColor={green.primary} />;
  if (value === Status.WARNING) return <WarningTwoTone twoToneColor={gold.primary} />;
  return <ExclamationCircleTwoTone twoToneColor={red.primary} />;
};
