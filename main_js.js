var klicks = 0;

//VARIABLES CONTAINING WEBSITES
var luigisPizza = '    <div id="containerBox">        <div id="textmenuBox">            <div class="smallBox">                MENU            </div>            <div class="smallBox">                OPENING HOURS            </div>            <div class="smallBox">                ABOUT            </div>            <div class="smallBox">                CONTACT            </div>        </div>        <div id="box1">        </div>        <div id="box2">        </div>        <div id="box3">        </div>    </div>    <div id="bottomBox">    </div>    ';
var jennasYoga = '    <div class="jtopBox"><div id="jlogoBox" onclick="luigisSite()">        </div>    </div>    <div id="jbigBox1">        blabla          </div>    <div id="jbigBox2">        lollmao    </div>';
var marvinsVideo = '    <div class="vbox1">    </div>    <div class="vbox1">    </div>    <div class="vbox1">    </div>    <div class="vbox1">    </div>    <div class="vbox1">            </div>    <div class="vbox1">            </div>';
var discountStore = '    <div id="dtopBox1">        <div id="dlogoBox">        </div>    </div>    <div id="dtopBox2">        <div class="dstandforBox">        </div>        <div class="dstandforBox">        </div>        <div class="dstandforBox">        </div>        <div class="dstandforBox">        </div>            </div>    <div id="dbigBox1">    </div>    <div id="dbigBox2">        <div class="dlogoBox"></div>        <div class="dlogoBox"></div>        <div class="dlogoBox"></div>        <div class="dlogoBox"></div>    </div>    <div id="dbrandBox">    </div>';
var tompasCafe = '<div id="ttopBox" onclick="disableStyleSheets()"></div><div id="tmidBox1"></div><div id="tmidBox2"></div><div id="tbottomBox"></div>';

//CREATING A VARIABLE THAT CAN ADD NEW CSS FILES
var fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet")
fileref.setAttribute("type", "text/css")
        


console.log(document.styleSheets.length)
//REMOVING OLD STYLESHEETS
function disableStyleSheets() {
    if (document.styleSheets.length >= 1) {
        for (var i = 1; i < document.styleSheets.length; i++) {
            document.styleSheets[i].disabled = true;
        }
    }
}

//TOGGLE DIV CLASS
function toggleState() {
    document.querySelector("#opRuta").classList.toggle("inactive");
    document.querySelector("#firstRuta").classList.toggle("inactive");
}

//FUNCTIONS FOR ALL THE SITES
function luigisSite() {
    disableStyleSheets();
    klicks++;
    document.getElementById("containerRuta").innerHTML = luigisPizza;
    document.querySelector("#webnameRuta").innerHTML = "https://www.luigispizzeria.com/";
    document.querySelector("#scoreRuta").innerHTML = "KLICKS: " + klicks;

    fileref.setAttribute("href", "luigis/luigis_pizza_css.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);

}

function jennasSite() {
    disableStyleSheets();
    klicks++;
    document.getElementById("containerRuta").innerHTML = jennasYoga;
    document.querySelector("#webnameRuta").innerHTML = "https://www.jennasyoga.com/";
    document.querySelector("#scoreRuta").innerHTML = "KLICKS: " + klicks;

    fileref.setAttribute("href", "jennas/jennas_yoga_css.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);


}

function marvinsSite() {
    disableStyleSheets();
    klicks++;
    document.getElementById("containerRuta").innerHTML = marvinsVideo;
    document.querySelector("#webnameRuta").innerHTML = "https://www.marvinsvideo.com/";
    document.querySelector("#scoreRuta").innerHTML = "KLICKS: " + klicks;

    fileref.setAttribute("href", "marvins/marvins_video.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

function discountSite() {
    disableStyleSheets();
    klicks++;
    document.getElementById("containerRuta").innerHTML = discountStore;
    document.querySelector("#webnameRuta").innerHTML = "https://www.alwaysdiscountstore.com/";
    document.querySelector("#scoreRuta").innerHTML = "KLICKS: " + klicks;

    fileref.setAttribute("href", "discount/discount_store.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);
}

function tompasSite() {
    disableStyleSheets();
    klicks++;
    document.getElementById("containerRuta").innerHTML = tompasCafe;
    document.querySelector("#webnameRuta").innerHTML = "https://www.tompascafe.com/";
    document.querySelector("#scoreRuta").innerHTML = "KLICKS: " + klicks;

    fileref.setAttribute("href", "tompas/tompas.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);

}


//dynamic content