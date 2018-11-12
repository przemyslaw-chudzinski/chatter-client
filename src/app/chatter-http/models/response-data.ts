export interface IResponseData<T = any> {
  data?: T;
  results_number?: number;
  // data?: T;
  message?: string;
  error?: boolean;
}
