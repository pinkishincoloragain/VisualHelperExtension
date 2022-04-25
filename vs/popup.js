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
    let h1s = document.getElementsByTagName("h1");
    let h2s = document.getElementsByTagName("h2");
    let h3s = document.getElementsByTagName("h3");
    let h4s = document.getElementsByTagName("h4");
    let h5s = document.getElementsByTagName("h5");
    let h6s = document.getElementsByTagName("h6");
    document.body.classList.add("VS");

    for (i = 0; i < h1s.length; i++) {
      h1s.item(i).style.color = "white";
    }
    for (i = 0; i < h2s.length; i++) {
      h2s.item(i).style.color = "white";
    }
    for (i = 0; i < h3s.length; i++) {
      h3s.item(i).style.color = "white";
    }
    for (i = 0; i < h4s.length; i++) {
      h4s.item(i).style.color = "white";
    }
    for (i = 0; i < h5s.length; i++) {
      h5s.item(i).style.color = "white";
    }
    for (i = 0; i < h6s.length; i++) {
      h6s.item(i).style.color = "white";
    }

    let divs = document.getElementsByTagName("div");
    let spans = document.getElementsByTagName("span");
    let ps = document.getElementsByTagName("p");
    let as = document.getElementsByTagName("as");
    let lis = document.getElementsByTagName("lis");

    for (i = 0; i < divs.length; i++) {
      divs.item(i).style.backgroundColor = "black !important";
    }
    for (let i = 0; i < ps.length; i++) {
      ps.item(i).style.color = "white";
      ps.item(i).style.borderRadius = "20px";
    }
    for (let i = 0; i < as.length; i++) {
      as.item(i).style.color = "yellow";
      as.item(i).style.borderRadius = "20px";
    }
  });
};

// X green X red (Deuteranopia)
const preset2 = () => {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = "white";
    // document.body.style.color = "red";
    let h1s = document.getElementsByTagName("h1");
    let h2s = document.getElementsByTagName("h2");
    let h3s = document.getElementsByTagName("h3");
    let h4s = document.getElementsByTagName("h4");
    let h5s = document.getElementsByTagName("h5");
    let h6s = document.getElementsByTagName("h6");
    document.body.classList.add("VS");

    for (i = 0; i < h1s.length; i++) {
      h1s.item(i).style.color = "black";
    }
    for (i = 0; i < h2s.length; i++) {
      h2s.item(i).style.color = "black";
    }
    for (i = 0; i < h3s.length; i++) {
      h3s.item(i).style.color = "black";
      s;
    }
    for (i = 0; i < h4s.length; i++) {
      h4s.item(i).style.color = "black";
    }
    for (i = 0; i < h5s.length; i++) {
      h5s.item(i).style.color = "black";
    }
    for (i = 0; i < h6s.length; i++) {
      h6s.item(i).style.color = "black";
    }

    let divs = document.getElementsByTagName("div");
    let spans = document.getElementsByTagName("span");
    let ps = document.getElementsByTagName("p");
    let as = document.getElementsByTagName("as");
    let lis = document.getElementsByTagName("lis");

    for (i = 0; i < divs.length; i++) {
      divs.item(i).style.backgroundColor = "white !important";
    }
    for (let i = 0; i < ps.length; i++) {
      ps.item(i).style.color = "black";
      ps.item(i).style.borderRadius = "20px";
    }
    for (let i = 0; i < as.length; i++) {
      as.item(i).style.color = "yellow";
      as.item(i).style.borderRadius = "20px";
    }
  });
};

// changed colour
const preset3 = () => {};

(function () {})();
