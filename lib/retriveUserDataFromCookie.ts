import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const retreiveUserDataFromCookie = () => {
  // const storedUserData = JSON.parse(Cookies.get("userData") || "{}");
  const token = Cookies.get("authToken");

  if (!token) return;

  try {
    const decode: any = jwtDecode(token);
    console.log(decode);
    return decode;
  } catch (err) {
    return;
  }
  // return storedUserData;
};

export default retreiveUserDataFromCookie;
