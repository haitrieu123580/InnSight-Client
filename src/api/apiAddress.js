import axios from "axios";

export const apiGetProvinces = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: "https://vapi.vnappmob.com/api/province/",
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });

export const apiGetDistricts = (provinceId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/district/${provinceId}`,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });


  export const apiGetWards = (districtId) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://vapi.vnappmob.com/api/province/ward/${districtId}`,
      });

      resolve(response);
    } catch (error) {
      reject(error);
    }
  });