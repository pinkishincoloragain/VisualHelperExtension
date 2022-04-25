function loadCSS(css) {
  var head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.id = "extension";
  style.textContent = css;
  head.appendChild(style);
}

function unloadCSS() {
  var cssNode = document.getElementById("extension");
  cssNode?.parentNode?.removeChild(cssNode);
}

function setBg(css) {
  unloadCSS();
  setTimeout(() => loadCSS(css));
}

function convertIntoCss(url) {
  const css = `html body { 
        background: url(${url}); \n
        image-rendering: crisp-edges; \n        
        image-rendering: -webkit-optimize-contrast; \n
        background-size:     cover; \n
        background-repeat:   no-repeat; \n
        background-position: center center; \n    
      }\n`;
  return css;
}
