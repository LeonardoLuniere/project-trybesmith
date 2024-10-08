export type ServiceResponseErrorType = 'UNAUTHORIZED' | 'NOT_FOUND' |
'INVALID_DATA' | 'INVALID_STRING';

export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: {
    message: string
  }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL',
  data: T
};

export type ServiceResponse<T> = ServiceResponseSuccess<T> | ServiceResponseError;