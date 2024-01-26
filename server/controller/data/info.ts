import { Response } from 'express';
import { faker } from '@faker-js/faker';

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

export const newControlParameter = (): Control => ({
  control: faker.lorem.word(),
  tolerance: faker.number.int({ min: 0, max: 1 }),
  deviation: faker.number.int({ min: 0, max: 1 }),
  devOutOftol: faker.number.int({ min: 0, max: 1 }),
});

const parts: Part[] = [
  {
    name: 'carDoor',
    features: [
      {
        name: 'seam',
        controls: [
          {
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'length',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'slot',
        controls: [
          {
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'length',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'hole',
        controls: [
          {
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'length',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
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
            control: 'diameter',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'height',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'boltHole',
        controls: [
          {
            control: 'diameter',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'height',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
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
            control: 'length',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'width',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'gripper',
        controls: [
          {
            control: 'length',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'width',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
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
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'length',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'switch',
        controls: [
          {
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'length',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'knob',
        controls: [
          {
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'length',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
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
            control: 'diameter',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'height',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },
          {
            control: 'angle',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
          {
            control: 'material',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
      {
        name: 'shaft',
        controls: [
          {
            control: 'diameter',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },
          {
            control: 'height',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
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
            control: 'width',
            tolerance: 0.1,
            deviation: 0.05,
            devOutOftol: 0.15,
          },

          {
            control: 'height',
            tolerance: 0.2,
            deviation: 0.1,
            devOutOftol: 0.25,
          },

          {
            control: 'material',
            tolerance: 0.05,
            deviation: -0.03,
            devOutOftol: 0.08,
          },
        ],
      },
    ],
  },
];

export default parts;
