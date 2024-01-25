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
