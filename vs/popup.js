let changeColor = document.getElementById("changeColor");
let tab = null;

(async function initPopupWindow() {
  [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
})();

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: changeAttributes,
  });
});

const changeAttributes = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
    document.body.style.color = "red";
    document.querySelector("span").style.color = "blue";
    document.querySelector("div").style.borderWidth = "20px";
  });
};
