let changeColor = document.getElementById("changeColor");
let changeColor2 = document.getElementById("changeColor2");
let changeColor3 = document.getElementById("changeColor3");
let tab = null;
let i = 0;

(async function initPopupWindow() {
  [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
})();

chrome.storage.sync.get("colors", ({ colors }) => {
  changeColor.style.backgroundColor = colors[0];
  changeColor2.style.backgroundColor = colors[1];
  changeColor3.style.backgroundColor = colors[2];
});

changeColor.addEventListener("click", async () => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: preset1,
  });
});
changeColor2.addEventListener("click", async () => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: preset2,
  });
});
changeColor3.addEventListener("click", async () => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id, allFrames: true },
    function: preset3,
  });
});

// filter start

// X red (Protanopia)
const preset1 = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = "black";
    // document.body.style.color = "red";
    let divs = document.getElementsByTagName("div");
    let spans = document.getElementsByTagName("span");
    let ps = document.getElementsByTagName("p");
    let as = document.getElementsByTagName("as");
    let lis = document.getElementsByTagName("lis");

    for (i = 0; i < divs.length; i++) {
      console.log(divs[i].setAttribute("background-color", "black !important"));
      // divs.item(i).style.border = "1px solid red";
    }
  });
};

// X green X red (Deuteranopia)
const preset2 = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = "black";

    // document.body.style.color = "red";
    document.querySelector("span").style.color = "blue";
    document.querySelector("div").style.borderWidth = "20px";

    let divs = document.getElementsByTagName("div");
    let spans = document.getElementsByTagName("span");
    let ps = document.getElementsByTagName("p");
    let as = document.getElementsByTagName("as");
    let lis = document.getElementsByTagName("lis");

    // for (let i = 0; i < divs.length; i++) {
    //   divs.item(i).style.border = "1px solid red";
    //   divs.item(i).style.borderRadius = "20px";
    // }
    // for (i = 0; i < spans.length; i++) {
    //   spans.item(i).style.border = "1px solid red";
    //   spans.item(i).style.borderRadius = "20px";
    // }
    for (i = 0; i < ps.length; i++) {
      // ps.item(i).style.border = "1px solid red";
      ps.item(i).style.borderRadius = "20px";
      ps.item(i).parentElement.style.filter = "saturate(100)";
    }
    // for (i = 0; i < as.length; i++) {
    //   as.item(i).style.color = "red !important";
    // }
    // for (i = 0; i < lis.length; i++) {
    //   lis.item(i).style.color = "red !important";
    // }
  });
};

// changed colour
const preset3 = () => {};

(function () {})();
