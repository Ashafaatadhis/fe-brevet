import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const retreiveUserDataFromCookie = () => {
  // const storedUserData = JSON.parse(Cookies.get("userData") || "{}");
  const token = Cookies.get("authToken");

  if (!token) return;

  const decode: any = jwtDecode(token);
  console.log(decode);
  return decode;
  // return storedUserData;
};

export default retreiveUserDataFromCookie;
