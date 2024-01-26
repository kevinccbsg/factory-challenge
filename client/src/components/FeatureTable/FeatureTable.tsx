import { Table, Typography } from 'antd';
import { red, gold, green } from '@ant-design/colors';
import {
  CheckCircleTwoTone,
  WarningTwoTone,
  ExclamationCircleTwoTone,
} from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

export enum Status {
  OK = 'OK',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

interface DataType {
  key: string;
  control: string;
  deviation: number;
  devOutOftol: number;
  status: Status;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Control',
    dataIndex: 'control',
    key: 'control',
  },
  {
    title: 'deviation',
    dataIndex: 'deviation',
    key: 'deviation',
    width: 90,
    align: 'center',
  },
  {
    title: 'dev out of tolerance',
    dataIndex: 'devOutOftol',
    key: 'devOutOftol',
    width: 200,
    align: 'center',
  },
  {
    title: '',
    key: 'status',
    dataIndex: 'status',
    align: 'center',
    render: (value) => {
      if (value === Status.OK) return <CheckCircleTwoTone twoToneColor={green.primary} />;
      if (value === Status.WARNING) return <WarningTwoTone twoToneColor={gold.primary} />;
      return <ExclamationCircleTwoTone twoToneColor={red.primary} />;
    },
  },
];

interface FeatureTableProps {
  title: string;
  data: DataType[];
}

export const FeatureTable = ({ data, title }: FeatureTableProps) => (
  <div>
    <Typography.Title level={2}>{title}</Typography.Title>
    <Table columns={columns} dataSource={data} />
  </div>
);
