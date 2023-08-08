import axios, { AxiosError, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { router } from "../router/Routes";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 500));
axios.defaults.baseURL = "http://localhost:3000/api/v1";
const responseBody = (response: AxiosResponse) => response.data;

axios.interceptors.response.use(
  async (res) => {
    await sleep();
    return res;
  },
  (error: AxiosError) => {
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
      case 400:
        if (data.errors) {
          const modelStateErrors: string[] = [];
          for (const key in data.errors) {
            data.errors[key] && modelStateErrors.push(data.errors[key]);
          }
          throw modelStateErrors.flat();
        }
        toast.error(data.title);
        break;
      case 401:
        toast.error(data.title);
        break;
      case 500:
        router.navigate("/server-error", { state: { error: data } });
        break;
      default:
        break;
    }
    return Promise.reject(error.response);
  },
);

const requests = {
  get: (url: string, params?: URLSearchParams) => axios.get(url, { params }).then(responseBody),
};

const agent = {};

export default agent;
