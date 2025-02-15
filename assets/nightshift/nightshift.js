var desktopdata = [
    ["nightshift", "../../assets/nightshift/redirect.html"],
    ["save_randy", "../../assets/nightshift/closed.txt"],
    ["my_confession", "../../assets/nightshift/confession.txt"]
]

function closedown(e){
    imagechange = e.querySelector("#img");
    imagechange.src = "../../assets/nightshift/closedown.png";
}

function closeup(e) {
    imagechange = e.querySelector("#img");
    imagechange.src = "../../assets/nightshift/closeup.png";
    closewindow = e.parentElement.parentElement;
    closewindow.style.display = "none";
    closewindow.style.top = null;
    closewindow.style.left = null;
    closewindow.style.zIndex = null;
}

function closedown2(e){
    imagechange = e.querySelector("#img");
    imagechange.src = "../../assets/nightshift/startdown.png"
}

function closeup2(e){
    imagechange = e.querySelector("#img");
    imagechange.src = "../../assets/nightshift/startup.png"
}

function highlightapp(element){
    clearhighlight();
    selector = element.querySelector(".highlighter");
    selector.style.background = "#1d87ff";
}

function clearhighlight(){
    divs = document.getElementsByClassName("appclass");
    for (let i=0; i<divs.length; i++) {
        divs[i].querySelector(".highlighter").style.background = null;
    }
}

function spawntab(e) {
    number = e.id[(e.id).length-1];
    for (let i=0; i<desktopdata.length; i++){
        document.getElementById("container"+i).style.display = "none";
    } 
    tabopen = document.getElementById("container"+number);
    tabopen.style.display = null;
}

function loadtabs(i, data_name, data_iframe) {
    document.getElementById("tabshere").innerHTML +=
        `<div class="tabcontainer" id="container${i}" style="display: none;">
            <div class="tabbuttons">
                <img src="../../assets/nightshift/fileicon.png" width="18px">
                <span style="position: inherit;">${data_name} - File</span>
                <button class="close" onmousedown="closedown(this)" onmouseup="closeup(this)"><img src="../../assets/nightshift/closeup.png" id="img"></button>
            </div>
            <img src="../../assets/nightshift/windowframe1.png" class="tabframe">
            <iframe src="${data_iframe}"></iframe>
        </div>`;
    document.getElementById("desktop").innerHTML += 
        `<button ondblclick="spawntab(this)" id="app${i}" class="appclass" onclick="highlightapp(this)"><img src="../../assets/nightshift/fileicon.png"><span class="highlighter">${data_name}</span></button>`;
}

function loaddesktops(){
    for (let i=0; i<desktopdata.length; i++){
        const tabname = desktopdata[i][0];
        const iframedir = desktopdata[i][1];
        loadtabs(i, tabname, iframedir);
    }
    updatetime()
    setInterval(updatetime, 1000);
}

function updatetime() { 
    const currentTime = new Date();
    const currentDateTime = currentTime.toLocaleTimeString();
    document.getElementById("timetext").textContent = currentDateTime;
}