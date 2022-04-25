window.addEventListener("DOMContentLoaded", () => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", afterDOMLoaded);
  } else {
    afterDOMLoaded();
  }

  const afterDOMLoaded = () => {
    document.body.classList.add("VS");
  };
});
