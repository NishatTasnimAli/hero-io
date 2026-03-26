import { toast } from "react-toastify";

export const getFromLocalStorage = () => {
  const installed = localStorage.getItem("installed");
  return installed ? JSON.parse(installed) : [];
};

export const saveToLocalStorage = (id) => {
  const installed = getFromLocalStorage();
  if (installed.includes(id)) {
    toast("This app is already installed");
    return;
  }
  installed.push(id);
  localStorage.setItem("installed", JSON.stringify(installed));
  toast.success("App installed successfully");
};

export const removeFromLocalStorage = (id) => {
  const installed = getFromLocalStorage();
  const filtered = installed.filter((i) => i !== id);
  localStorage.setItem("installed", JSON.stringify(filtered));
  toast.success("App uninstalled successfully");
};