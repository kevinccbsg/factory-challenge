import { Response } from 'express';

export interface Client {
  id: number;
  response: Response;
}

export interface Part {
  name: string;
  features: FeatureParameter[];
}

export interface FeatureParameter {
  control: string;
  tolerance: number;
  deviation: number;
  devOutOftol: number;
}

export const newFeatureParameter: FeatureParameter = {
  control: 'example',
  tolerance: 0,
  deviation: 0,
  devOutOftol: 0,
};

const parts: Part[] = [
  {
    name: 'carDoor',
    features: [
      {
        control: 'seam',
        tolerance: 0.05,
        deviation: 0.02,
        devOutOftol: 0.03,
      },
      {
        control: 'slot',
        tolerance: 0.1,
        deviation: -0.05,
        devOutOftol: 0.15,
      },
      {
        control: 'hole',
        tolerance: 0.2,
        deviation: 0.1,
        devOutOftol: 0.25,
      },
    ],
  },
  {
    name: 'engineBlock',
    features: [
      {
        control: 'cylinderDiameter',
        tolerance: 0.1,
        deviation: 0.05,
        devOutOftol: 0.12,
      },
      {
        control: 'length',
        tolerance: 0.2,
        deviation: 0.15,
        devOutOftol: 0.25,
      },
      {
        control: 'boltHole',
        tolerance: 0.05,
        deviation: -0.03,
        devOutOftol: 0.08,
      },
    ],
  },
  {
    name: 'robotArm',
    features: [
      {
        control: 'rotationAngle',
        tolerance: 0.1,
        deviation: -0.02,
        devOutOftol: 0.12,
      },
      {
        control: 'reachDistance',
        tolerance: 0.2,
        deviation: 0.1,
        devOutOftol: 0.22,
      },
      {
        control: 'gripForce',
        tolerance: 0.05,
        deviation: 0.03,
        devOutOftol: 0.08,
      },
    ],
  },
  {
    name: 'controlPanel',
    features: [
      {
        control: 'buttonSize',
        tolerance: 0.1,
        deviation: 0.05,
        devOutOftol: 0.12,
      },
      {
        control: 'displayBrightness',
        tolerance: 0.2,
        deviation: -0.1,
        devOutOftol: 0.22,
      },
      {
        control: 'switchDurability',
        tolerance: 0.05,
        deviation: 0.02,
        devOutOftol: 0.07,
      },
    ],
  },
  {
    name: 'gearAssembly',
    features: [
      {
        control: 'gearTeethCount',
        tolerance: 0.1,
        deviation: 0.02,
        devOutOftol: 0.12,
      },
      {
        control: 'shaftLength',
        tolerance: 0.2,
        deviation: 0.1,
        devOutOftol: 0.22,
      },
      {
        control: 'bearingFriction',
        tolerance: 0.05,
        deviation: -0.03,
        devOutOftol: 0.08,
      },
    ],
  },
  {
    name: 'sensorArray',
    features: [
      {
        control: 'sensorAccuracy',
        tolerance: 0.1,
        deviation: -0.05,
        devOutOftol: 0.15,
      },
      {
        control: 'responseTime',
        tolerance: 0.2,
        deviation: 0.1,
        devOutOftol: 0.25,
      },
      {
        control: 'powerConsumption',
        tolerance: 0.05,
        deviation: 0.03,
        devOutOftol: 0.08,
      },
    ],
  },
  {
    name: 'conveyorBelt',
    features: [
      {
        control: 'speed',
        tolerance: 0.1,
        deviation: 0.02,
        devOutOftol: 0.12,
      },
      {
        control: 'width',
        tolerance: 0.2,
        deviation: 0.1,
        devOutOftol: 0.22,
      },
      {
        control: 'beltMaterialDurability',
        tolerance: 0.05,
        deviation: -0.03,
        devOutOftol: 0.08,
      },
    ],
  },
  {
    name: 'lightFixture',
    features: [
      {
        control: 'brightness',
        tolerance: 0.1,
        deviation: 0.05,
        devOutOftol: 0.12,
      },
      {
        control: 'colorTemperature',
        tolerance: 0.2,
        deviation: -0.1,
        devOutOftol: 0.22,
      },
      {
        control: 'energyConsumption',
        tolerance: 0.05,
        deviation: 0.02,
        devOutOftol: 0.07,
      },
    ],
  },
];

export default parts;
