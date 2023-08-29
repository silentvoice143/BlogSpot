////getting access token

export const getAccessToken = () => {
  // console.log("getting token");
  // console.log(sessionStorage.getItem("accessToken"));
  return sessionStorage.getItem("accessToken");
};
