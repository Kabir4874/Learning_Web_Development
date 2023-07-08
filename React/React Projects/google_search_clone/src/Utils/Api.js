import axios from "axios";

const Base_url = "https://www.googleapis.com/customsearch/v1";

const params = {
  key: "AIzaSyBas7Qsa-TiOgphFDIsm3yLZlGCuvayFwM",
  cx: "0011afd3750124711",
};

export const fetchDataFromApi = async (payload) => {
  const { data } = await axios.get(Base_url, {
    params: { ...params, ...payload },
  });
  return data;
};
