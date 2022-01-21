export interface ICarModel {
  id: string;
  model: string;
}

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  name: string;
  label: string;
  value: any;
  error?: string;
  options: IOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface ISelectInput {
  error?: string;
}
