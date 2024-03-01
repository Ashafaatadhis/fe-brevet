const retreiveUserDataLocalStorage = () => {
  const storedUserDataString = localStorage.getItem("userData") || "{}";
  const storedUserData = JSON.parse(storedUserDataString);

  return storedUserData;
};

export default retreiveUserDataLocalStorage;
