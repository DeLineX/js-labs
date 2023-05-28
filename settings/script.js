"use strict";

const saveToStorage = ({ btnColor, bgColor, bgImage }) => {
  if (btnColor) localStorage.setItem("btnColor", btnColor);
  if (bgColor) localStorage.setItem("bgColor", bgColor);
};

const removeFromStorage = (...keys) =>
  keys.forEach((key) => localStorage.removeItem(key));

const getInputValue = (id) => document.querySelector(`#${id}`)?.value;

const btnColorApplyHandler = () => {
  const btnColor = getInputValue("btnColorInput");
  saveToStorage({ btnColor });
  console.log(123);
  location.reload();
};

const btnColorResetHandler = () => {
  removeFromStorage("btnColor");
  location.reload();
};

const bgColorApplyHandler = () => {
  const bgColor = getInputValue("bgColorInput");
  saveToStorage({ bgColor });
  location.reload();
};

const bgColorResetHandler = () => {
  removeFromStorage("bgColor");
  location.reload();
};

document
  .querySelector("#btnColorApply")
  .addEventListener("click", btnColorApplyHandler);
document
  .querySelector("#btnColorReset")
  .addEventListener("click", btnColorResetHandler);

document
  .querySelector("#bgColorApply")
  .addEventListener("click", bgColorApplyHandler);
document
  .querySelector("#bgColorReset")
  .addEventListener("click", bgColorResetHandler);
