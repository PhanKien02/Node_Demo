import { IResponse } from "../interfaces/IResponse";
const errorResponse = (message: string, details?: unknown,) => {
  const response: IResponse = {
    result: null,
    success: false,
    error: {
      message: message,
      code: 0
    }
  };
  return response
}
export default errorResponse;