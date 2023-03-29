/* eslint-disable consistent-return */
import { AxiosError } from "axios";
import { HEADERS_DATA } from "config";
import API from "API";

export const findAllDemands = async () => {
  try {
    const token = localStorage.getItem("token_jwt");

    const headers = { ...HEADERS_DATA, token: `${token}` };
    const responseDemands = await API.get("/demand", {
      headers,
    })
      .then((response) => Promise.resolve(response.data))
      .catch((err: Error | AxiosError) => Promise.resolve(err));

    const { Demand } = responseDemands.data;

    if (Demand) {
      return Demand;
    }
  } catch (e: any) {
    return undefined;
  }
};

export const findOneDemands = async (id: string) => {
  console.log(id);
  try {
    const headers = { ...HEADERS_DATA };
    const responseDemands = await API(`/demand/${id}`, {
      headers,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    let { Demand } = responseDemands.data;

    console.log(responseDemands.data);

    if (Demand) {
      return Demand;
    }

  } catch (err: any) {
    return {
      response: "",
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};

export const findAllByUser = async (id: string) => {
  console.log(id);
  try {
    const headers = { ...HEADERS_DATA };
    const responseDemands = await API(`/demandByUser/${id}`, {
      headers,
    })
      .then((response) => response.data)
      .catch((err: AxiosError) => err);

    let { Demand } = responseDemands.data;

    console.log(responseDemands.data);

    if (Demand) {
      return Demand;
    }

  } catch (err: any) {
    return {
      response: "",
      status: 404,
      message: "Contate o administrador do sistema",
    };
  }
};
