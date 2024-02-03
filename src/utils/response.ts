import { IResponse } from "../interfaces/IResponse";
const response = (result: any) => {
  const response: IResponse = {
    result: result,
    success: true,
    error: null,
  };
  return response
}
export default response;