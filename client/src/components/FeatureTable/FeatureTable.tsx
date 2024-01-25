import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  control: string;
  deviation: number;
  devOutOftol: number;
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
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    render: () => (
      <Tag color="volcano">Test</Tag>
    ),
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
