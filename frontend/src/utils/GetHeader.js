export const getHeader = () => {
  const jwt = localStorage.getItem("jwt");

  const config = {
    headers: {
      Authorization: `Bearer ${jwt}`,
    },
  };

  return config;
};
