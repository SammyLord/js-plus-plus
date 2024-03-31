// Created by Samuel Lord (NodeMixaholic/Sparksammy)
// Licensed under Samuel Public License with <3

// Functions for commonly used elements

// Generalized element creation
function createElement(tagName, elementID, attributes = {}) {
  const element = document.createElement(tagName);
  element.id = elementID;
  for (const [name, value] of Object.entries(attributes)) {
    element.setAttribute(name, value);
  }
  document.body.appendChild(element);
  return element;
}

function createDiv(elementID) {
  createElement("div", elementID);
}

function createParagraph(elementID, text) {
  let elem = createElement("p", elementID);
  elem.innerText = `${text}`
}

function createButton(elementID, text) {
  createElement("button", elementID, { innerText: text });
}

function createImage(elementID, src) {
  createElement("img", elementID, { src: src });
}

// Get URL parameters
function getURLParameters() {
  return new URLSearchParams(window.location.search);
}

// Read file contents
function readFileContents(file) {
  file = file.toString();
  const fileToRead = new File([""], file);
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsText(fileToRead, "UTF-8");
  });
}

// Read data file as data URL
function readDataFile(file) {
  file = file.toString();
  const fileToRead = new File([""], file);
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(fileToRead);
  });
}

function writeToBody(html) {
  document.body.innerHTML += html.toString();
}

function overwriteBody(html) {
  document.body.innerHTML = html.toString();
}

function randomPOS(elementID) {
  const top = Math.floor(Math.random() * 90);
  const left = Math.floor(Math.random() * 90);
  document.getElementById(elementID).style.top = `${top}%`;
  document.getElementById(elementID).style.left = `${left}%`;
}

function pos(elementID, x, y) {
  document.getElementById(elementID).style.top = `${y}%`;
  document.getElementById(elementID).style.left = `${x}%`;
}

// Select a random value in an array (handles non-arrays)
function randomSelectArray(array) {
  if (Array.isArray(array)) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  } else {
    console.log(`Error: ${array} is not an Array!`);
    return null; // Or throw an error
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function asyncSleep(ms) {
  await new Promise(r => setTimeout(r, ms));
}

// Check if a variable is a function
function isFunction(item) {
  return typeof item === 'function';
}

function applyCSS(elementID, prop, value) {
  document.getElementById(elementID).style[prop] = value;
}

function writeTimeAndDate(elementID, hourFormat) {
  const element = document.getElementById(elementID);
  const date = new Date();
  const locale = hourFormat === 24 ? "en-GB" : "en-US";
  element.innerText = date.toLocaleString(locale);
}

function writeText(elementID, str) {
  document.getElementById(elementID).innerText = String(str);
}

function writeHTML(elementID, str) {
  document.getElementById(elementID).innerHTML = String(str);
}

function clearPage() {
  document.body.innerHTML = "";
}

function createList(listID, items) {
  const list = document.createElement("ul");
  list.id = listID;
  document.body.appendChild(list);
  items.forEach(item => (list.innerHTML += `<li>${item}</li>`));
}

function addToList(listID, jsArray) {
    let listParent = document.getElementById(listID);
    jsArray.forEach(item => {
        listParent.innerHTML += `<li>${item}</li>`;
    });
}

// Gets the value of an attribute
// Example: getAttribute(document.getElementById("link"), "href");
function getAttribute(el, att) {
  let result = el.getAttribute(att);
  return result;
}

// Show/Hide Elements
// Example: hideShow(el)
function hideShow(el) {
  if (el.style.display == 'none') {
    el.style.display = '';
  } else{
    el.style.display = 'none';
  }
}

// Example: fadeOut(el, 1000)
function fadeOut(el, ms) {
  let elem = getElementById(el);
  ms = parseInt(ms);
  for (i = 0; i < (ms + 1); i++) {
    elem.style.opacity -= (i / 100);
    sleep(1);
  }
}

// Example: fadeIn(el, 1000);
function fadeIn(el, ms) {
  elem = getElementById(el);
  elem.style.opacity = 0;
  ms = parseInt(ms);
  for (i = 0; i < (ms + 1); i++) {
    elem.style.opacity += (i / 100);
    sleep(1);
  }
}

function spin(el, ms){
  elem = getElementById(el);
  for (i = 0; i < (ms / 361); i++) {
    elem.style.transform = 'rotate(' + i + 'deg)';
  }
}

//Eval alternative
//Example: exec("alert('Hello, world!')")
function exec(jsCode) {
  let js = jsCode.toString();
  setTimeout(js, 1);
}

function requir3(jsURL) {
  let req = readInternetText(jsURL);
  exec(req);
}

// Example: getFileSize(path/to/file)
function getFileSize(file) {
  file = file.toString();
  file = new File([""], file);
  return file.getFileSize;
}

function lastModified(file) {
  file = file.toString();
  file = new File([""], file);
  return file.lastModified;
}

// Example: playAudio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3", 0.4); 
function playAudio(audio, speed) {
  let ma = new Audio(audio);
  ma.playbackRate = speed;
  ma.play();
}

// Example: redir(url);
function redir(url) {
  window.location.href = url.toString();
}
