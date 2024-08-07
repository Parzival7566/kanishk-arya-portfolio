let startContainer = document.querySelector('#w11-start-section');
let startBtn = document.querySelector('#windows-div');
let widgetContainer = document.querySelector('#widget-section');
let widgetBtn = document.querySelector('#widget-div');
let spegniContainer = document.querySelector('#spegni-section');
let spegniBtn = document.querySelector('.spegni-pc-start-section');
let paddingContainer = document.querySelector('.padding-start');
let searchBtn = document.querySelector('#search-div');
let searchContainer = document.querySelector("#search-content");
let footerStartContainer = document.querySelector('#footer-start-section');
let windowsTab = document.querySelector('.windows-tab');
let topPartTab = document.querySelector('.topnavbar-tab');
let closeBtn = document.querySelector("#close-icon");
let MaxBtn = document.querySelector("#max-icon");
let minBtn = document.querySelector("#min-icon");
let heightTab = document.querySelector('.coming-soon-tab');
let appIcon = document.querySelectorAll('.app-icon');
let nomeTab = document.querySelector('.nome-tab');
let tabImage = document.querySelector('#tab-image');
let spanComingSoon = document.querySelector('.coming-soon-span');
let nav = document.querySelector('nav');
let iconNav = document.querySelector("#first-container");
let notifBtns = document.querySelector('#second-container');
let notifContainer = document.querySelector("#notification-section");
var vh = window.innerHeight / 100;
var vw = window.innerWidth / 100;
let isTopBarClicked = false;
let div = document.querySelector("#div");
let firstPositionX;
let firstPositionY;
let lastPositionX;
let lastPositionY;

// from bottom to top WINDOWS START animation 
startBtn.addEventListener("click", function() {
    searchContainer.style.display = "none";
    paddingContainer.style.display = "grid";
    footerStartContainer.style.display = "flex";
    openOneWinCloseOther();
});

// from bottom to top WINDOWS START animation
widgetBtn.addEventListener("click", function() {
    if (startContainer.classList.contains("on-visible-start")) {
        startContainer.classList.toggle("on-visible-start");
        widgetContainer.classList.toggle("on-visible-widget");
    } else {
        widgetContainer.classList.toggle("on-visible-widget");
    }
});

// turn off computer (graficamente e virtualmente) 
spegniBtn.addEventListener("click", function() {
    spegniContainer.classList.toggle("pc-off");
    alert("adesso, windows 11 (web edition) \nsi spegnerà virtualmente, \n \nper ritornare alla homepage, \ncliccare qualsiasi punto sullo schermo!");
});

spegniContainer.addEventListener("click", function() {
    spegniContainer.classList.toggle("pc-off");
});

// SEARCH function in beta 
searchBtn.addEventListener("click", function() {
    paddingContainer.style.display = "none";
    footerStartContainer.style.display = "none";
    searchContainer.style.display = "grid";
    openOneWinCloseOther();
});

// windows moving tab 
topPartTab.addEventListener("mousedown", function() {

    isTopBarClicked = true;
    console.log("mousedown");
    document.onmousemove = function(e) {
        var x = e.clientX;
        var y = e.clientY;
        var MaxWidth = document.documentElement.scrollWidth;
        var MaxX = MaxWidth - windowsTab.offsetWidth;

        if (x <= 0) {
            leftTab();
        } else if (y <= 0) {
            topTab();
        } else if (x >= MaxX) {
            rightTab();
        } else {
            windowsTab.style.transitionDuration = "0s";
            windowsTab.style.left = x + "px";
            windowsTab.style.top = y + "px";
            if (windowsTab.offsetHeight > 90 * vh) {
                windowsTab.style.height = "70vh";
            }
            windowsTab.style.removeProperty("transform");
        }
    }

});
// non mouve più la tab, quando non è necessario
document.addEventListener("mouseup", function() {
    document.onmousemove = null;
});
for (let i = 0; i < appIcon.length; i++) {
    spanComingSoon.style.display = "grid";
    tabImage.style.display = "none";
    appIcon[i].addEventListener("click", function() {
        windowsTab.style.display = "grid";
        spanComingSoon.style.display = "none";
        tabImage.style.display = "grid";
        let appName = appIcon[i].querySelector("span").textContent;
        nomeTab.textContent = appName;
        /* get the image from the app icon */
        let appImage = appIcon[i].querySelector("img").src;
        tabImage.src = appImage;
    });
}
// buttone per cancellare la tab (nascondere la tab)
closeBtn.addEventListener("click", function() {
    windowsTab.style.display = "none";
});

// crea un icona nella nav, e nasconde la tab
minBtn.addEventListener("click", function() {
    windowsTab.style.display = "none";
    /*add element div with img to iconNav*/
    let newDivNav = document.createElement("div");
    let newImageIconNav = document.createElement("img");
    newImageIconNav.src = tabImage.src;
    newDivNav.appendChild(newImageIconNav);
    iconNav.appendChild(newDivNav);
    console.log("MINIMIZED TAB");
});
// ingrandisce la tab a seconda delle dimensioni dello schermo
MaxBtn.addEventListener("click", function() {
    topTab();
});
// per aprire le notifiche
notifBtns.addEventListener("click", function() {
    notifContainer.classList.toggle("notification-on");
});
function leftTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.removeProperty("transform");
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("LEFT TAB");
}
function topTab() {
    windowsTab.style.left = 0 + "px";
    windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.removeProperty("transform");
    windowsTab.style.width = "100vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("TOP TAB");
}
function rightTab() {
    windowsTab.style.transform = "translateX(99%)";
    windowsTab.style.left = 0 + "px";
        windowsTab.style.top = 0 + "px";
    windowsTab.style.removeProperty("right");
    windowsTab.style.width = "50vw";
    windowsTab.style.height = "calc(100vh - var(--nav-height))";
    windowsTab.style.transitionDuration = "0.5s";
    console.log("RIGHT TAB");
}

// funzione per aprire una finestra e chiuderne l'altra (se c'è)
function openOneWinCloseOther() {
    if (widgetContainer.classList.contains("on-visible-widget")) {
        widgetContainer.classList.toggle("on-visible-widget");
        startContainer.classList.toggle("on-visible-start");
    } else {
        startContainer.classList.toggle("on-visible-start");
    }
}

// Function to open a folder
let folderHistory = [];

function openFolder(folderName) {
    folderHistory.push(folderName);
    console.log(`Attempting to open folder: content/${folderName}/index.txt`);
    fetch(`content/${folderName}/index.txt`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const files = data.split('\n').filter(file => file.trim() !== '');
            let folderWindow = `
                <div class="window">
                    <div class="title-bar">
                        <button class="back-btn" onclick="goBack()"></button>
                        <span>${folderName}</span>
                        <div class="window-buttons">
                            <button onclick="minimizeWindow(this)">−</button>
                            <button onclick="maximizeWindow(this)">🔳</button>
                            <button onclick="closeWindow(this)">❌</button>
                        </div>
                    </div>
                    <div class="window-content">
                        <div class="folder-contents">
            `;
            files.forEach(file => {
                const [fileName, link] = file.split('|');
                let linkIcon = '';
                if (link) {
                    if (folderName === 'research_profile') {
                        linkIcon = '<i class="fas fa-external-link-alt"></i>';
                    } else if (link.includes('github.com')) {
                        linkIcon = '<i class="fab fa-github"></i>';
                    } else {
                        linkIcon = '<i class="fas fa-link"></i>';
                    }
                }
                if (fileName.endsWith('.txt')) {
                    folderWindow += `
                        <div class="file-item">
                            <img src="icons/text-file-icon.png" class="file-icon" alt="file" onclick="openTextFile('${folderName}', '${fileName}')">
                            <span>${fileName}</span>
                            ${link ? `<a href="${link}" target="_blank" class="link-icon">${linkIcon}</a>` : ''}
                        </div>`;
                } else if (fileName.endsWith('.jpg') || fileName.endsWith('.png')) {
                    folderWindow += `
                        <div class="file-item">
                            <img src="icons/image-file-icon.png" class="file-icon" alt="file" onclick="openImage('${folderName}', '${fileName}')">
                            <span>${fileName}</span>
                            ${link ? `<a href="${link}" target="_blank" class="link-icon">${linkIcon}</a>` : ''}
                        </div>`;
                } else {
                    folderWindow += `
                        <div class="file-item">
                            <img src="icons/folder-icon.png" class="file-icon" alt="folder" onclick="openFolder('${folderName}/${fileName}')">
                            <span>${fileName}</span>
                            ${link ? `<a href="${link}" target="_blank" class="link-icon">${linkIcon}</a>` : ''}
                        </div>`;
                }
            });
            folderWindow += `
                        </div>
                    </div>
                </div>
            `;
            document.getElementById('windows').innerHTML += folderWindow;
            document.querySelectorAll('.window').forEach(makeResizable);
        })
        .catch(error => console.error('Error:', error));
}

function goBack() {
    if (folderHistory.length > 1) {
        folderHistory.pop();
        const previousFolder = folderHistory[folderHistory.length - 1];
        openFolder(previousFolder);
    }
}

// Function to open a text file
function openTextFile(folderName, fileName) {
    preventVideoRestart(); // Pause the video when opening a new window
    console.log(`Attempting to open text file: content/${folderName}/${fileName}`);
    fetch(`content/${folderName}/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const fileWindow = document.createElement('div');
            fileWindow.className = 'window';
            fileWindow.style.position = 'absolute';
            fileWindow.style.left = '150px';
            fileWindow.innerHTML = `
                <div class="title-bar">
                    <span>${fileName}</span>
                    <div class="window-buttons">
                        <button onclick="minimizeWindow(this)">−</button>
                        <button onclick="maximizeWindow(this)">🔳</button>
                        <button onclick="closeWindow(this)">❌</button>
                    </div>
                </div>
                <div class="window-content">
                    <pre>${data}</pre>
                </div>
            `;
            document.body.appendChild(fileWindow);
            makeResizable(fileWindow);
        })
        .catch(error => console.error('Error:', error));
}

function openImage(folderName, fileName) {
    console.log(`Attempting to open image: content/${folderName}/${fileName}`);
    fetch(`content/${folderName}/${fileName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob(); // Use blob to handle image data
        })
        .then(blob => {
            const imageWindow = document.createElement('div');
            imageWindow.className = 'window';
            imageWindow.style.position = 'absolute';
            imageWindow.style.left = '150px';

            // Calculate the position to place the image window just below the last window
            const lastWindow = document.querySelector('.window:last-of-type');
            if (lastWindow) {
                const lastWindowRect = lastWindow.getBoundingClientRect();
                imageWindow.style.top = `${lastWindowRect.bottom + 10}px`; // 10px for a little spacing
            } else {
                imageWindow.style.top = '150px'; // Default position if no other window is open
            }

            imageWindow.innerHTML = `
                <div class="title-bar">
                    <span>${fileName}</span>
                    <div class="window-buttons">
                        <button onclick="minimizeWindow(this)">−</button>
                        <button onclick="maximizeWindow(this)">🔳</button>
                        <button onclick="closeWindow(this)">❌</button>
                    </div>
                </div>
                <div class="window-content">
                    <img src="${URL.createObjectURL(blob)}" alt="${fileName}" style="max-width: 100%; max-height: 100%;">
                </div>
                <div class="resizer"></div>
            `;
            document.body.appendChild(imageWindow);
            makeResizable(imageWindow);
        })
        .catch(error => console.error('Error:', error));
}

// Function to close a window
function closeWindow(button) {
    const window = button.closest('.window');
    window.remove();
}

// Function to minimize a window
function minimizeWindow(button) {
    const window = button.closest('.window');
    window.style.display = 'none';
}

// Function to maximize a window
function maximizeWindow(button) {
    const window = button.closest('.window');
    if (window.classList.contains('maximized')) {
        window.classList.remove('maximized');
        window.style.width = '600px';
        window.style.height = '400px';
    } else {
        window.classList.add('maximized');
        window.style.width = '100vw';
        window.style.height = '100vh';
        window.style.left = '0';
        window.style.top = '0';
    }
}

// Function to enable window resizing
function makeResizable(element) {
    const resizer = element.querySelector('.resizer');
    resizer.addEventListener('mousedown', initResize, false);

    function initResize(e) {
        window.addEventListener('mousemove', resize, false);
        window.addEventListener('mouseup', stopResize, false);
    }

    function resize(e) {
        element.style.width = (e.clientX - element.offsetLeft) + 'px';
        element.style.height = (e.clientY - element.offsetTop) + 'px';
    }

    function stopResize() {
        window.removeEventListener('mousemove', resize, false);
        window.removeEventListener('mouseup', stopResize, false);
    }
}

// Apply resizable functionality to all windows
document.querySelectorAll('.window').forEach(makeResizable);

// Assuming 'desktopLoaded' is a flag that is true when the desktop is fully loaded
let desktopLoaded = false;

// Function to simulate desktop loading
function loadDesktop() {
    // Simulate some setup tasks
    setTimeout(() => {
        desktopLoaded = true;
        console.log("Desktop loaded.");
        openWidgetsPanel(); // Ensure widgets panel is opened once desktop is loaded
    }, 5000); // Simulate delay for desktop loading
}

// Function to open the widgets panel
function openWidgetsPanel() {
    if (desktopLoaded) {
        widgetBtn.click(); // Simulate a click on the widget button
        console.log("Widgets panel opened.");
    } else {
        console.log("Desktop is not loaded yet.");
    }
}

// Adding event listener to the video
const videoElement = document.getElementById('myVideo');
videoElement.addEventListener('ended', function() {
    console.log("Video ended.");
    openWidgetsPanel(); // Try opening the widgets panel once the video ends
});

// Prevent video from restarting when opening a new window
function preventVideoRestart() {
    videoElement.pause();
}

// Function to open resume.pdf in a new window
function openResume() {
    window.open('resume.pdf', '_blank');
}

// Function to open DONOTOPEN.txt in a new window
function openTxt() {
        console.log(`Attempting to open text file: content/DONOTOPEN.txt`);
        fetch(`content/DONOTOPEN.txt`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const fileWindow = document.createElement('div');
            fileWindow.className = 'window';
            fileWindow.style.position = 'absolute';
            fileWindow.style.left = '150px';
            fileWindow.innerHTML = `
                <div class="title-bar">
                    <span>${`DONOTOPEN.txt`}</span>
                    <div class="window-buttons">
                        <button onclick="minimizeWindow(this)">−</button>
                        <button onclick="maximizeWindow(this)">🔳</button>
                        <button onclick="closeWindow(this)">❌</button>
                    </div>
                </div>
                <div class="window-content">
                    <pre>${data}</pre>
                </div>
            `;
            document.body.appendChild(fileWindow);
            makeResizable(fileWindow);
        })
        .catch(error => console.error('Error:', error));
}

// Function to open a link in a new tab
function openLink(link) {
    window.open(link, '_blank');
}

// Function to open a mail window
function openMail() {
    const mailWindow = `
        <div class="window">
            <div class="title-bar">
                <span>Send Mail</span>
                <div class="window-buttons">
                    <button onclick="minimizeWindow(this)">−</button>
                    <button onclick="maximizeWindow(this)">🔳</button>
                    <button onclick="closeWindow(this)">❌</button>
                </div>
            </div>
            <div class="window-content">
                <form id="mailForm">
                    <label for="to">To:</label>
                    <input type="email" id="to" value="kanishkarya2811@gmail.com" readonly><br><br>
                    <label for="name">Your Name:</label>
                    <input type="text" id="name" required><br><br>
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" required><br><br>
                    <label for="message">Message:</label>
                    <textarea id="message" required></textarea><br><br>
                    <button type="button" onclick="sendMail()">Send Email</button>
                </form>
            </div>
        </div>
    `;
    document.getElementById('windows').innerHTML += mailWindow;
    document.querySelectorAll('.window').forEach(makeResizable);
}

// Function to send mail (You'll need to implement the actual sending logic)
function sendMail() {
    // Get form data
    const name = document.getElementById('name').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Implement your mail sending logic here
    // You can use AJAX to send the mail without leaving the page

    // For example, you can log the mail details to the console
    console.log('Name:', name);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Display a success message or handle errors
    alert('Email sent successfully!'); 
}

// Call loadDesktop to simulate the desktop loading
loadDesktop();