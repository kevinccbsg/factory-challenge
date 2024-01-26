import { faker } from '@faker-js/faker';

export const generateFakeControl = () => {
  // Set the ideal measurement and tolerance range
  const idealMeasurement = faker.number.float({ min: 90, max: 110, precision: 0.01 });
  const tolerance = faker.number.float({ min: 1, max: 10, precision: 0.01 });

  // Generate the actual measurement within the tolerance range
  const actualMeasurement = faker.number.float({
    min: idealMeasurement - tolerance,
    max: idealMeasurement + tolerance,
    precision: 0.01,
  });

  // Calculate the deviation from the ideal measurement
  const deviation = actualMeasurement - idealMeasurement;

  // Calculate the deviation outside tolerance
  const devOutOftol = Math.abs(deviation) > tolerance ? Math.abs(deviation) - tolerance : 0;

  return {
    control: faker.lorem.word({ length: 4 }),
    tolerance,
    deviation,
    devOutOftol,
  };
};