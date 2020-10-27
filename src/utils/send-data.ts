import axios from "axios";

export const sendData = (kcal: number) => () => {
  axios.post('.netlify/functions/save-db', { kcal: kcal });
};
