import jwtDecode from "jwt-decode";
import { instance } from ".";

const register = async (userInfo) => {
  const formData = new FormData();
  for (const key in userInfo) formData.append(key, userInfo[key]);
  const { data } = await instance.post(
    "/mini-project/api/auth/register",
    formData
  );
  storeToken(data.token);
  return data;
};

const logIn = async (userInfo) => {
  const { data } = await instance.post(
    "/mini-project/api/auth/login",
    userInfo
  );
  storeToken(data.token);
  return data;
};

const getProfile = async () => {
  const { data } = await instance.get("/mini-project/api/auth/me");
  return data;
};

const getTransactions = async () => {
  const { data } = await instance.get("/mini-project/api/transactions/my");
  return data;
};

const putDeposit = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/deposit",
    { amount: amount }
  );
  return data;
};

const putWithdraw = async (amount) => {
  const { data } = await instance.put(
    "/mini-project/api/transactions/withdraw",
    {
      amount: amount,
    }
  );
  return data;
};

const getUsers = async () => {
  const { data } = await instance.get("/mini-project/api/auth/users");
  return data;
};

const storeToken = (token) => {
  localStorage.setItem("token", token);
};

const checkToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    const decode = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decode.exp < currentTime) {
      localStorage.removeItem("token");
      return false;
    }
    return true;
  }
  return false;
};

const logOut = () => {
  localStorage.removeItem("token");
};

export {
  register,
  logIn,
  getProfile,
  checkToken,
  getTransactions,
  putDeposit,
  getUsers,
  putWithdraw,
  logOut,
};
