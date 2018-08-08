export interface IResponseData<T = any> {
  results?: T[];
  results_number?: number;
  data?: T;
  message?: string;
  error?: boolean;
}
