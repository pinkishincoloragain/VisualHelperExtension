/*global chrome*/

let color = "#3aa757";
let tab = getCurrentTab();

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.runtime.onMessage.addListener((message, sender) => {
  chrome.tabs.sendMessage(sender.tab?.id, {
    value: message.value + " + " + "hello from background script",
  });
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  // doSomethingWithoutResponding(msg);
  sendResponse();
});

chrome.tabs.onActivated.addListener((activeInfo) => change(activeInfo));

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

console.log(tab);

function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
    console.log("changed!");
  });
}

async function change(activeInfo) {
  try {
    // await chrome.tabs.move(activeInfo.tabId, { index: 0 });
    await chrome.scripting.executeScript({
      target: { tabId: activeInfo.tabId },
      function: setPageBackgroundColor,
    });
    console.log(activeInfo + " Success.");
  } catch (error) {
    if (
      error ==
      "Error: Tabs cannot be edited right now (user may be dragging a tab)."
    ) {
      setTimeout(() => move(activeInfo), 50);
      console.log("fish");
    }
  }
}
