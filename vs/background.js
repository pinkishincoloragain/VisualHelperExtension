let colors = ["#e8453c", "#3aa757", "#4688f1"];

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ colors });
});

chrome.tabs.onActivated.addListener((activeInfo) => activate(activeInfo));

async function activate(activeInfo) {
  console.log("change called.");
  // try {
  //   // await chrome.tabs.move(activeInfo.tabId, { index: 0 });
  //   await chrome.scripting.executeScript({
  //     target: { tabId: activeInfo.tabId, allFrames: true },
  //     function: setPageBackgroundColor,
  //   });
  //   console.log(activeInfo.windowId);
  // } catch (error) {
  //   if (
  //     error ==
  //     "Error: Tabs cannot be edited right now (user may be dragging a tab)."
  //   ) {
  //     setTimeout(() => change(activeInfo), 50);
  //     console.log("fish");
  //   }
  // }
}
