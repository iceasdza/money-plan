const key = "spread_sheet_url";
export const checkLocalStorage = (openModal, handleGetData) => {
  const spreadSheetURL = window.localStorage.getItem("spread_sheet_url");
  if (!spreadSheetURL) {
    openModal();
  } else {
    handleGetData();
  }
};

export const setLocalStorage = (value) => {
  window.localStorage.setItem("spread_sheet_url", value);
};

export const getSheetURL = () => {
  return window.localStorage.getItem("spread_sheet_url");
};
