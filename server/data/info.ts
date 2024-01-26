import { Response } from 'express';
import { generateFakeControl } from './utils';

export interface Client {
  id: number;
  response: Response;
}

export interface Part {
  name: string;
  features: Feature[];
}

interface Feature {
  name: string;
  controls: Control[];
}

export interface Control {
  control: string;
  tolerance: number;
  deviation: number;
  devOutOftol: number;
}

export const newControlParameter = (): Control => generateFakeControl();

const parts: Part[] = [
  {
    name: 'carDoor',
    features: [
      {
        name: 'seam',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
      {
        name: 'slot',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
      {
        name: 'hole',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
    ],
  },
  {
    name: 'engineBlock',
    features: [
      {
        name: 'cylinder',
        controls: [
          {
            ...generateFakeControl(),
            control: 'diameter',
          },
          {
            ...generateFakeControl(),
            control: 'height',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
      {
        name: 'boltHole',
        controls: [
          {
            ...generateFakeControl(),
            control: 'diameter',
          },
          {
            ...generateFakeControl(),
            control: 'height',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
    ],
  },
  {
    name: 'robotArm',
    features: [
      {
        name: 'arm',
        controls: [
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
      {
        name: 'gripper',
        controls: [
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
    ],
  },
  {
    name: 'controlPanel',
    features: [
      {
        name: 'button',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
      {
        name: 'switch',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
      {
        name: 'knob',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'length',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
        ],
      },
    ],
  },
  {
    name: 'gearbox',
    features: [
      {
        name: 'gear',
        controls: [
          {
            ...generateFakeControl(),
            control: 'diameter',
          },
          {
            ...generateFakeControl(),
            control: 'height',
          },
          {
            ...generateFakeControl(),
            control: 'angle',
          },
          {
            ...generateFakeControl(),
            control: 'material',
          },
        ],
      },
      {
        name: 'shaft',
        controls: [
          {
            ...generateFakeControl(),
            control: 'diameter',
          },
          {
            ...generateFakeControl(),
            control: 'height',
          },
        ],
      },
    ],
  },
  {
    name: 'sensorArray',
    features: [
      {
        name: 'sensor',
        controls: [
          {
            ...generateFakeControl(),
            control: 'width',
          },
          {
            ...generateFakeControl(),
            control: 'height',
          },
          {
            ...generateFakeControl(),
            control: 'material',
          },
        ],
      },
    ],
  },
];

export default parts;
