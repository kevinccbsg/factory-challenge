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
