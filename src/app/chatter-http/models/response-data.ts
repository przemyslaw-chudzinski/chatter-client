export interface IResponseData<T = any> {
  data?: T;
  results_number?: number;
  message?: string;
  error?: boolean;
}
