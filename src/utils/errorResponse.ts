import { IResponse } from "../interfaces/IResponse";
const errorResponse = (message: string, details?: unknown, code?: number) => {
  const response: IResponse = {
    result: null,
    success: false,
    error: {
      message: message,
      code: code,
      details: details || null
    }
  };
  return response
}
export default errorResponse;