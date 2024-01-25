import { Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  control: string;
  deviation: number;
  devOutOfTolerance: number;
  tags: string[];
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
    dataIndex: 'devOutOfTolerance',
    key: 'devOutOfTolerance',
    width: 200,
    align: 'center',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    align: 'center',
    render: (_, { tags }) => (
      <>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    control: 'x',
    deviation: 0,
    devOutOfTolerance: 0,
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    control: 'x',
    deviation: 0,
    devOutOfTolerance: 0,
    tags: ['loser'],
  },
  {
    key: '3',
    control: 'x',
    deviation: 0,
    devOutOfTolerance: 0,
    tags: ['cool', 'teacher'],
  },
];

export const FeatureTable: React.FC = () => (
  <div>
    <Typography.Title level={2}>Feature Table</Typography.Title>
    <Table columns={columns} dataSource={data} />
  </div>
);
