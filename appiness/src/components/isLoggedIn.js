export const isLoggedIn = () => {
  let isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn;
};
