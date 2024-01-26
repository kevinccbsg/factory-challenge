import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { ToleranceIcons } from '../ToleranceIcons/ToleranceIcons';
import { Status } from '../ToleranceIcons/status';
import { Header } from '../Header/Header';

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
    render: (value) => <ToleranceIcons value={value} />,
  },
];

interface FeatureTableProps {
  title: string;
  data: DataType[];
}

export const FeatureTable = ({ data, title }: FeatureTableProps) => (
  <div>
    <Header title={title} status={Status.OK} />
    <Table
      pagination={false}
      columns={columns}
      dataSource={data}
    />
  </div>
);
