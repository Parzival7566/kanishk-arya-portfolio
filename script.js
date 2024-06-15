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

function openFolder(folderName) {
    alert("Opening " + folderName);
    // Add more complex functionality as needed
}

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
document.getElementById('myVideo').addEventListener('ended', function() {
    console.log("Video ended.");
    openWidgetsPanel(); // Try opening the widgets panel once the video ends
});

// Call loadDesktop to simulate the desktop loading
loadDesktop();