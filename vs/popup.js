let changeColor = document.getElementById("changeColor");
let tab = null;

(async function initPopupWindow() {
  [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
})();

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

changeColor.addEventListener("click", async () => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: changeAttributes,
  });
});

const changeAttributes = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    let div = document.createElement("div");
    div.setAttribute("id", "background");
    div.style.position = "fixed";
    div.style.top = 0;
    div.style.left = 0;
    div.style.width = "100%";
    div.style.height = "100%";
    div.style.zIndex = "9999";
    div.style.backgroundColor = color;
    div.textContent = "Injected!";
    // document.body.appendChild(div);

    alert("background inserted");

    document.body.style.backgroundColor = color;

    // document.body.style.color = "red";
    document.querySelector("span").style.color = "blue";
    document.querySelector("div").style.borderWidth = "20px";

    let divs = document.getElementsByTagName("div");
    let spans = document.getElementsByTagName("span");
    // let singleDiv = null;
    console.log(divs.length);
    for (let i = 0; i < divs.length; i++) {
      divs.item(i).style.border = "1px solid red";
      divs.item(i).style.borderRadius = "20px";
      // divs.item(i).style.display = "none";
    }
  });
};

(function () {})();
