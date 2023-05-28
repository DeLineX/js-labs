const applyTheme = () => {
  const btnColor = localStorage.getItem("btnColor");
  document.querySelectorAll(".btn").forEach((btn) => {
    if (btnColor) {
      btn.style.backgroundColor = btnColor;
      btn.style.transition = "0s";
    } else {
      btn.style.backgroundColor = undefined;
      btn.style.transition = undefined;
    }

    const bgColor = localStorage.getItem("bgColor");
    if (bgColor) document.body.style.backgroundColor = bgColor;
    else document.body.style.backgroundColor = undefined;
  });
};

applyTheme();
