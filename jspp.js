// JS++
// Created by Samuel Lord (NodeMixaholic/Sparksammy)
// Now Maintained by Sneed Group
// Licensed under Samuel Public License with <3
class JSPlusPlus {
    static General = class {

        static Helpers = class {
            sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }

        isToxic(sentences) {
                let pp = new JSPlusPlus
	            // Load the model. Users optionally pass in a threshold and an array of
	            // labels to include.
                    pp.require("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs")
                    pp.require("https://cdn.jsdelivr.net/npm/@tensorflow-models/toxicity")
	            let threshold = 0.9;
	            let toxic = false

	            toxicity.load(threshold).then(model => {
		            model.classify(sentences).then(predictions => {
			            predictions.forEach(classified => {
				            if (classified.label == "toxicity") {
					            toxic = classified.results.match
			            	}
			            });
		            });
	            });
	            return toxic
            }
            
            async asyncSleep(ms) {
                await new Promise(r => setTimeout(r, ms));
            }

            consoleUseWarner(warning) {
                try {
                    console.log(`%cSTOP!%c
                ${warning}`, "font-size: 42px; color: white; background-color: red;", "font-size: 20px; color: white; background-color: red;")
                } catch {
                    console.warn(`STOP!
                    ${warning}`)
                }
            }

            // Constructor Helpers BEGIN
            enableJSConstructorHelpers() {
                Date.prototype.toUSADateString = function() {
                    let day = this.getDate().toString().padStart(2, '0');
                    let month = (this.getMonth() + 1).toString().padStart(2, '0');
                    let year = this.getFullYear();
                    return `${day}/${month}/${year}`;
                };
                
                Date.prototype.toISODateString = function() {
                    let year = this.getFullYear();
                    let month = (this.getMonth() + 1).toString().padStart(2, '0');
                    let day = this.getDate().toString().padStart(2, '0');
                    return `${year}-${month}-${day}`;
                };
                
                Object.merge = function(target, source) {
                    for (let key in source) {
                        if (source.hasOwnProperty(key)) {
                            target[key] = source[key];
                        }
                    }
                    return target;
                };
                
                Function.prototype.once = function() {
                    let called = false;
                    const func = this;
                    return function(...args) {
                        if (!called) {
                            called = true;
                            return func.apply(this, args);
                        }
                    };
                };
                
                String.prototype.capitalize = function() {
                    return this.charAt(0).toUpperCase() + this.slice(1);
                };
                
                Array.prototype.last = function() {
                    return this[this.length - 1];
                };
                
                Array.prototype.unique = function() {
                    return [...new Set(this)];
                };
                
                Array.prototype.remove = function(element) {
                    const index = this.indexOf(element);
                    if (index !== -1) {
                        this.splice(index, 1);
                    }
                    return this;
                };
                
                String.prototype.reverse = function() {
                    return this.split('').reverse().join('');
                };
                
                Function.prototype.debounce = function(wait) {
                    let timeout;
                    const func = this;
                    return function(...args) {
                        clearTimeout(timeout);
                        timeout = setTimeout(() => func.apply(this, args), wait);
                    };
                };
                
                Date.prototype.addDays = function(days) {
                    let date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                };
                
                Array.prototype.flatten = function() {
                    return this.reduce((flat, toFlatten) => {
                        return flat.concat(Array.isArray(toFlatten) ? toFlatten.flatten() : toFlatten);
                    }, []);
                };
                
                String.prototype.camelCase = function() {
                    return this.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
                        return index === 0 ? match.toLowerCase() : match.toUpperCase();
                    }).replace(/\s+/g, '');
                };
                
                Number.prototype.toCurrency = function(locale = 'en-US', currency = 'USD') {
                    return this.toLocaleString(locale, { style: 'currency', currency });
                };
                
                Object.isEmpty = function(obj) {
                    return Object.keys(obj).length === 0 && obj.constructor === Object;
                };
                
                Array.prototype.chunk = function(size) {
                    let result = [];
                    for (let i = 0; i < this.length; i += size) {
                        result.push(this.slice(i, i + size));
                    }
                    return result;
                };
                
                Array.prototype.first = function() {
                    return this[0];
                };
                
                String.prototype.contains = function(substring) {
                    return this.indexOf(substring) !== -1;
                };
                
                Object.assignDeep = function(target, ...sources) {
                    sources.forEach(source => {
                        for (let key in source) {
                            if (source[key] instanceof Object) {
                                if (!target[key]) {
                                    target[key] = {};
                                }
                                Object.assignDeep(target[key], source[key]);
                            } else {
                                target[key] = source[key];
                            }
                        }
                    });
                    return target;
                };
                
                Array.prototype.shuffle = function() {
                    for (let i = this.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [this[i], this[j]] = [this[j], this[i]];
                    }
                    return this;
                };
                
                String.prototype.isPalindrome = function() {
                    let normalized = this.replace(/[\W_]/g, '').toLowerCase();
                    return normalized === normalized.split('').reverse().join('');
                };
                
                Number.prototype.isPrime = function() {
                    if (this <= 1) return false;
                    for (let i = 2, sqrt = Math.sqrt(this); i <= sqrt; i++) {
                        if (this % i === 0) return false;
                    }
                    return true;
                };
                
                Array.prototype.compact = function() {
                    return this.filter(Boolean);
                };
                
                Array.prototype.pluck = function(property) {
                    return this.map(item => item[property]);
                };
                
                String.prototype.toKebabCase = function() {
                    return this.replace(/([a-z])([A-Z])/g, '$1-$2')
                               .replace(/[\s_]+/g, '-')
                               .toLowerCase();
                };
                
                Function.prototype.memoize = function() {
                    const cache = {};
                    const func = this;
                    return function(...args) {
                        const key = JSON.stringify(args);
                        if (!cache[key]) {
                            cache[key] = func.apply(this, args);
                        }
                        return cache[key];
                    };
                };
                
                Object.invert = function(obj) {
                    let inverted = {};
                    for (let key in obj) {
                        if (obj.hasOwnProperty(key)) {
                            inverted[obj[key]] = key;
                        }
                    }
                    return inverted;
                };
                
                Date.prototype.toTimeString = function() {
                    let hours = this.getHours().toString().padStart(2, '0');
                    let minutes = this.getMinutes().toString().padStart(2, '0');
                    let seconds = this.getSeconds().toString().padStart(2, '0');
                    return `${hours}:${minutes}:${seconds}`;
                };
                
                String.prototype.truncate = function(length) {
                    return this.length > length ? this.slice(0, length) + '...' : this;
                };
                
                Number.prototype.toOrdinal = function() {
                    const suffixes = ["th", "st", "nd", "rd"];
                    const v = this % 100;
                    return this + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
                };
                
                Array.prototype.sum = function() {
                    return this.reduce((total, num) => total + num, 0);
                };
                
                String.prototype.isUpperCase = function() {
                    return this.valueOf() === this.toUpperCase();
                };
                
                Function.prototype.delay = function(ms) {
                    setTimeout(this, ms);
                };
                
                Object.keysAmount = function(obj) {
                    return Object.keys(obj).length;
                };
                
                Date.prototype.isWeekend = function() {
                    const day = this.getDay();
                    return day === 0 || day === 6;
                };
                
                Array.prototype.average = function() {
                    return this.sum() / this.length;
                };
                
                String.prototype.isLowerCase = function() {
                    return this.valueOf() === this.toLowerCase();
                };
                console.log("Javascript Extras Enabled!")
            }
            // Constructor Helpers END
        }

        static Debug = class {
            tryCatch(funcTry, funcCatch) {
                try {
                    funcTry
                } catch {
                    funcCatch
                }
            }
        }

        //Eval alternative
        //Example: exec("alert('Hello, world!')")
        exec(jsCode) {
            let js = jsCode.toString();
            Function(js)()
        }


        readInternetText(url) {
            try {
                var request = new XMLHttpRequest(); // Create a new XMLHttpRequest object
                request.open('GET', url, false); // Open the request with synchronous mode
                request.send(null); // Send the request with no additional data
        
                if (request.status === 200) { // Check if the request was successful
                    return request.responseText; // Return the response text
                } else {
                    return 'Error: ' + request.status; // Return an error message if the request failed
                }
            } catch {
                try {
                    let http = require('http');
                    let body = ""
                    let request = http.get(url, function (res) {
                        var data = '';
                        res.on('data', function (chunk) {
                            data += chunk;
                        });
                        res.on('end', function () {
                            body = data.toString()
                        });
                    });
                    request.on('error', function (e) {
                        body = e.message
                    });
                    request.end();
                    return body;
                } catch {
                    return "Unknown error fetching URL! :'("
                }
            }
        }

        require(jsURI) {
            try {
                let req = JSPlusPlus.JSPlusPlus.readInternetText(jsURI);
		let gen = new JSPlusPlus.General
                gen.exec(req);
            } catch {
                console.log(`Error! (Using Node.JS/Bun?)
                
                If on NodeJS or equivalent try:
                'let ${jsURI} = require("${jsURI}")'`)
            }
        }


    }
    static HTMLFrontend = class {
	const htmlFront = new JSPlusPlus.HTMLFrontend
        // Get element by ID
        getElementById(elementID) {
          return document.getElementById(elementID)
        }
        
        //Convert markdown to HTML and back
        markdownToHTML(markdown) {
            // Replace headers (h1, h2, h3) with corresponding HTML tags
            markdown = markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
            markdown = markdown.replace(/^## (.*$)/gim, '<h2>$1</h2>');
            markdown = markdown.replace(/^### (.*$)/gim, '<h3>$1</h3>');
        
            // Replace bold and italic text with corresponding HTML tags
            markdown = markdown.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>');
            markdown = markdown.replace(/\*(.*)\*/gim, '<i>$1</i>');
        
            // Replace unordered list items with HTML list tags
            markdown = markdown.replace(/\* (.*?)(\n|$)/gim, '<li>$1</li>');
        
            // Replace inline code with HTML <code> tag
            markdown = markdown.replace(/`(.*?)`/gim, '<code>$1</code>');
        
            // Replace blockquotes with HTML <blockquote> tag
            markdown = markdown.replace(/^\s*> (.*)$/gim, '<blockquote>$1</blockquote>');
        
            // Replace horizontal rules with HTML <hr> tag
            markdown = markdown.replace(/^\s*[-*_]{3,}\s*$/gim, '<hr>');
        
            // Replace line breaks with HTML <br> tag
            markdown = markdown.replace(/\n$/gim, '<br>');
        
            // Replace images with HTML <img> tag
            markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2">');
        
            // Replace links with HTML <a> tag
            markdown = markdown.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
        
            markdown = markdown.replaceAll("<ol><ul>", "")
        
            markdown = markdown.replaceAll("</ul></ol>", "")
            
            return markdown;
        }
        
        htmlToMarkdown(html) {
            // Replace headers (h1, h2, h3) with corresponding Markdown tags
            html = html.replace(/<h1>(.*?)<\/h1>/gim, '# $1');
            html = html.replace(/<h2>(.*?)<\/h2>/gim, '## $1');
            html = html.replace(/<h3>(.*?)<\/h3>/gim, '### $1');
        
            // Replace bold and italic text with corresponding Markdown tags
            html = html.replace(/<b>(.*?)<\/b>/gim, '**$1**');
            html = html.replace(/<i>(.*?)<\/i>/gim, '*$1*');
        
            // Replace unordered list items with Markdown list tags
            html = html.replace(/<ul>(.*?)<\/ul>/gim, function(match, p1) {
                let listItems = p1.trim().split('</li>');
                listItems.pop();
                listItems = listItems.map(item => '* ' + item.trim().replace(/<li>/gim, '')).join('\n');
                return listItems;
            });
        
            // Replace ordered list items with Markdown list tags
            html = html.replace(/<li>(.*?)<\/li>/gim, '* $1\n');
        
            // Replace inline code with Markdown backticks
            html = html.replace(/<code>(.*?)<\/code>/gim, '`$1`');
        
            // Replace blockquotes with Markdown blockquote tag
            html = html.replace(/<blockquote>(.*?)<\/blockquote>/gim, '> $1');
        
            // Replace horizontal rules with Markdown horizontal rules
            html = html.replace(/<hr>/gim, '---');
        
            // Replace line breaks with Markdown line breaks
            html = html.replace(/<br>/gim, '\n');
        
            // Replace images with Markdown image syntax
            html = html.replace(/<img alt="(.*?)" src="(.*?)">/gim, '![$1]($2)');
        
            // Replace links with Markdown link syntax
            html = html.replace(/<a href="(.*?)">(.*?)<\/a>/gim, '[$2]($1)');
        
            html = html.replaceAll("<ol><ul>", "")
        
            html = html.replaceAll("</ul></ol>", "")
            
            return html;
        }
        
        // Generalized element creation
        createElement(tagName, elementID, attributes = {}) {
          const element = document.createElement(tagName);
          element.id = elementID;
          for (const [name, value] of Object.entries(attributes)) {
            element.setAttribute(name, value);
          }
          document.body.appendChild(element);
          return element;
        }
        
        createDiv(elementID) {
          htmlFront.createElement("div", elementID);
        }
        
        createParagraph(elementID, text) {
          let elem = htmlFront.createElement("p", elementID);
          elem.innerText = `${text}`
          return elem
        }
        
        initHead(pageTitle = "") {
            // Create head element
            let head = document.createElement("head");
        
            // Create title element
            let titleElement = document.createElement("title");
            titleElement.textContent = pageTitle;
        
            // Create link element for app icon
            let appIcon = document.createElement("link");
            appIcon.rel = "apple-touch-icon";
            appIcon.sizes = "180x180";
            appIcon.href = "icon.png";
        
            // Create link element for favicon
            let favicon = document.createElement("link");
            favicon.rel = "icon";
            favicon.type = "image/png";
            favicon.href = "icon.png";
        
            // Append title, app icon, and favicon to the head element
            head.appendChild(titleElement);
            head.appendChild(appIcon);
            head.appendChild(favicon);
        
            // Append head element to the document
            document.documentElement.insertBefore(head, document.documentElement.firstChild);
        }
        
        
        initBody(bodyID = "body") {
          // Create a new body element with the desired id
          const newBody = document.createElement("body");
          newBody.id = bodyID;
        
          // Get a reference to the existing body element (if any)
          const oldBody = document.body;
        
          // Replace the existing body (if present) with the new one
          if (oldBody) {
              document.documentElement.replaceChild(newBody, oldBody);
          } else {
              // Simply append the new body if none exists
              document.documentElement.appendChild(newBody);
          }
        }
        
        createButton(elementID, text, attributes = {}) {
          let elem = createElement("button", elementID);
          elem.innerText = `${text}`
          for (const [name, value] of Object.entries(attributes)) {
            elem.setAttribute(name, value);
          }
          return elem;
        }
        
        // Insert element with ID to element with ID
        insertElementIntoId(elementIdOuter, elementIdSelf, tagName) {
          const element = document.createElement(tagName);
          element.id = elementIdSelf;
          for (const [name, value] of Object.entries(attributes)) {
            element.setAttribute(name, value);
          }
          getElementById(elementIdOuter).appendChild(element);
          return element;
        }
        
        // Insert HTML to element with ID
        insertHTMLIntoId(elementIdOuter, html) {
          getElementById(elementIdOuter).innerHTML = `${String(html)}`;
          return element;
        }
        
        changeAttributes(element, attributes = {}) {
          for (const [name, value] of Object.entries(attributes)) {
            element.setAttribute(name, value);
          }
        }
        
        createImage(elementID, src) {
          return htmlFront.createElement("img", elementID, { src: src });
        }
        
        // Get URL parameters
        getURLParameters() {
          return new URLSearchParams(window.location.search);
        }
        
        // Read file contents
        readFileContents(file) {
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
        readDataFile(file) {
          file = file.toString();
          const fileToRead = new File([""], file);
          const reader = new FileReader();
          return new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(fileToRead);
          });
        }
        
        writeToBody(html) {
          document.body.innerHTML += html.toString();
        }
        
        overwriteBody(html) {
          document.body.innerHTML = html.toString();
        }
        
        randomPOS(elementID) {
          const top = Math.floor(Math.random() * 90);
          const left = Math.floor(Math.random() * 90);
          document.getElementById(elementID).style.top = `${top}%`;
          document.getElementById(elementID).style.left = `${left}%`;
        }
        
        pos(elementID, x, y) {
          document.getElementById(elementID).style.top = `${y}%`;
          document.getElementById(elementID).style.left = `${x}%`;
        }
        
        // Select a random value in an array (handles non-arrays)
        randomSelectArray(array) {
          if (Array.isArray(array)) {
            const randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
          } else {
            console.log(`Error: ${array} is not an Array!`);
            return null; // Or throw an error
          }
        }
        
        
        // Check if a variable is a function
        isFunction(item) {
          return typeof item === 'function';
        }
        
        applyCSS(elementID, prop, value) {
          document.getElementById(elementID).style[prop] = value;
        }
        
        writeTimeAndDate(elementID, hourFormat) {
          const element = document.getElementById(elementID);
          const date = new Date();
          const locale = hourFormat === 24 ? "en-GB" : "en-US";
          element.innerText = date.toLocaleString(locale);
        }
        
        writeText(elementID, str) {
          document.getElementById(elementID).innerText = String(str);
        }
        
        writeHTML(elementID, str) {
          document.getElementById(elementID).innerHTML = String(str);
        }
        
        clearPage() {
          document.body.innerHTML = "";
        }
        
        createList(listID, items) {
          const list = document.createElement("ul");
          list.id = listID;
          document.body.appendChild(list);
          items.forEach(item => (list.innerHTML += `<li>${item}</li>`));
        }
        
        addToList(listID, jsArray) {
            let listParent = document.getElementById(listID);
            jsArray.forEach(item => {
                listParent.innerHTML += `<li>${item}</li>`;
            });
        }
        
        // Gets the value of an attribute
        // Example: getAttribute(document.getElementById("link"), "href");
        getAttribute(element, attribute) {
          let result = element.getAttribute(attribute);
          return result;
        }
        
        // Show/Hide Elements
        // Example: hideShow(element)
        hideShow(element) {
          if (element.style.display == 'none') {
            element.style.display = '';
          } else{
            element.style.display = 'none';
          }
        }
        
        // Example: fadeOut(element, 1000)
        fadeOut(element, ms) {
          let elem = getElementById(element);
          ms = parseInt(ms);
          for (i = 0; i < (ms + 1); i++) {
            elem.style.opacity -= (i / 100);
            JSPlusPlus.General.Helpers.sleep(1);
          }
        }
        
        // Example: fadeIn(element, 1000);
        fadeIn(element, ms) {
          elem = getElementById(element);
          elem.style.opacity = 0;
          ms = parseInt(ms);
          for (i = 0; i < (ms + 1); i++) {
            elem.style.opacity += (i / 100);
            JSPlusPlus.General.Helpers.sleep(1);
          }
        }
        
        spin(elementID, duration) {
          const element = document.getElementById(elementID);
          if (!element) {
            console.error(`Element with ID '${elementID}' not found.`);
            return;
          }
        
          let start;
          const animate = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const rotation = (elapsed / duration) * 360;
            element.style.transform = `rotate(${rotation}deg)`;
        
            if (elapsed < duration) {
              requestAnimationFrame(animate);
            } else {
              start = null;
              element.style.transform = 'none'; // Reset transform after animation completes
            }
          };
        
          requestAnimationFrame(animate);
        }
        
        // Example: getFileSize(path/to/file)
        getFileSize(file) {
          file = file.toString();
          file = new File([""], file);
          return file.getFileSize;
        }
        
        lastModified(file) {
          file = file.toString();
          file = new File([""], file);
          return file.lastModified;
        }
        
        // Example: playAudio("https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3", 0.4); 
        playAudio(audio, speed) {
          let ma = new Audio(audio);
          ma.playbackRate = speed;
          ma.play();
        }
        
        // Example: redir(url);
        redir(url) {
          window.location.href = url.toString();
        }
        
        // to import Google Fonts via name
        importGoogleFont(fontName) {
            // Create a new link element
            const link = document.createElement('link');
            
            // Set the rel attribute to 'stylesheet'
            link.rel = 'stylesheet';
            
            // Set the href attribute to the Google Fonts URL with the specified font name
            link.href = `https://fonts.googleapis.com/css?family=${fontName.replace(' ', '+')}`;
            
            // Append the link element to the head of the document
            document.head.appendChild(link);
        }
        
        
        initGun(relays = []) {
            let pp = new JSPlusPlus
            pp.require("https://cdn.jsdelivr.net/npm/gun/gun.js")
            return Gun(relays)
        }
    }
}

