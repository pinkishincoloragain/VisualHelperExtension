/*global chrome*/

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

chrome.runtime.onMessage.addListener((message, sender) => {
  chrome.tabs.sendMessage(sender.tab?.id, {
    value: message.value + " + " + "hello from background script",
  });
});

console.log(
  Object.keys(chrome.tabs.query({ active: true, currentWindow: true })).length
);
