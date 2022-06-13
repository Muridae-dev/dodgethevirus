//DEFINING VARIABLES GLOBALLY
var klicks = 0;
//CONTAINING WEBSITES
var hiphopFandom = '    <div id="containerBox">        <!--DIGGA MED HUVUDET; TVÅ GÅNGER UP/NER SEN BYT SIDA; MED SOLGLAJJOR OCH HÖRLURAR-->        <div id="hpicBox">            <img src="../imgs/biggie.png" style="height:100%; width:auto;">        </div>        <div id="hpicBoxFreddie">            <img src="../imgs/freddie_gibbs.jpeg" style="height:100%;width:auto;">        </div>        <!--RÖRANDE KNAPPAR TYP; SKATEBOARD STYLE; FLERA BILDER-->        <div id="button1" onclick="playSong(1)">hypnotize</div>        <div id="button2" onclick="playSong(2)">gimme the loot</div>        <div id="button3" onclick="playSong(3)">juicy</div>        <div id="button4" onclick="playSong(4)">1970 something</div>        <div id="button1F" onclick="playSong(5)">gat damn</div>        <div id="button2F" onclick="playSong(6)">death row</div>        <div id="button3F" onclick="playSong(7)">big boss rabbit</div>        <div id="button4F" onclick="playSong(8)">baby $hit</div>        <div id="festersBox" onclick="festersPage()"><img src="../imgs/fester.jpg" style="height:100%; width:auto;"></div>    </div>';
var tompasCafe = '    <div id="containerBox">        <div id="welcomeText">            WELCOME TO TOMPAS CAFÉ        </div>        <div id="smallBox1" onclick="moveBox(1)">            MENU            <div id="innersmallBox1">asdasdasdasd</div>        </div>        <div id="smallBox2" onclick="moveBox(2)">            CONTACT            <div id="innersmallBox2">asdasdasdasd</div>        </div>        <div id="smallBox3" onclick="moveBox(3)">            ABOUT US            <div id="innersmallBox3">asdasdasdasd</div>        </div>        <div id="smallBox4" onclick="moveBox(4)">            SPONSORS            <div id="innersmallBox4"></div>        </div><a onclick="murkysPage()">OUR FISHY FRIEND</a>    </div>';
var murkysFishies = '<div id="mbigBox">    <img src="../imgs/murky.png" style="height:30%;width:auto;">    <div id="mtitleText">MURKYS FISHIES</div>    <div id="catfish"><img src="../imgs/fishies/catfish.jpeg" style="height:100%;"></div>    <div id="alligatorGar"><img src="../imgs/fishies/alligatorGar.jpeg" style="height:100%;"></div>    <div id="gadda"><img src="../imgs/fishies/gadda.jpeg" style="height:100%;"></div>    <div id="abborre"><img src="../imgs/fishies/abborre.jpeg" style="height:100%;"></div>    <div id="bullshark"><img src="../imgs/fishies/bullshark.jpeg" style="height:100%;"></div>    <div id="gurky" onclick="gurkysPage()">if you are into deep sea shit klick here<img src="../imgs/gurky.png" style="height:100%; width:auto;"></div></div>';
var gurkyAnglers = '    <div id="containerBox">        <div id="gurkyBox">            <img src="../imgs/gurky.png" style="height:100%; width:auto;">            <div id="textBox">Hello and welcome to my page (SCROLL TO CONTINUE)</div>        </div>        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_iomkzwwh.json"  background="transparent"  speed="0.5"  style="width: 100vw; height: 100vh; z-index: 0;"  loop  autoplay></lottie-player>    </div>    <div class="fishBox" id="spermWhale" style="top:280%; left:50%;">        <img src="../imgs/deepfish/sperm whale.jpeg">    </div>    <div class="fishBox" id="giantSquid" style="top:400%; left:40%;">        <img src="../imgs/deepfish/giantsquid.jpeg">    </div>    <div class="fishBox" id="anglerFish" style="top:530%; left:65%;">        <img src="../imgs/deepfish/29SCI-ANGLERFISH1-articleLarge.jpeg">    </div>    <div class="fishBox" id="glandShark" style="top:670%; left:20%;">        <img src="../imgs/deepfish/greenlandshark.jpeg">    </div>    <div class="fishBox" id="bfinSquid" style="top:800%; left:40%;">        <img src="../imgs/deepfish/bigfinsquid.jpeg">    </div>    <div class="fishBox" id="nzoth" style="top:940%; left:50%;">        <img src="../imgs/deepfish/nzoth.jpeg">    </div>    <div class="fishBox" id="cthulu" style="top:1100%; left:30%;">        <img src="../imgs/deepfish/cthulu.jpeg">    </div>    <div id="chinaBox">        <img src="../imgs/deepfish/china.jpeg">    </div>';
var festersSpooky = '    <div id="containerBox">        <div class="pumpkinBox1">            <img src="../imgs/pumpkin.png" style="height:100%; width:auto;">        </div>        <div class="pumpkinBox2">            <img src="../imgs/pumpkin.png" style="height:100%; width:auto;">        </div>        <div id="festerBox" onclick="spinFaster()">            <img src="../imgs/fester.jpg" style="height:100%; width:auto;">        </div>        <div id="textBox" onclick="createSkeletons()">            YOOOHOOOO WELCOME TO THE SPOOKY PAGE        </div>        <div id="clickBox">            HOT TIP: CLICK STUFF ON THE PAGE        </div>    </div>';

var pageArray = [
    //HOGGERS (0)
    {
        pageHTML: '<div id="containerBox"></div>',
        pageURL: 'http://www.hoggerslair.com/',
        pageJS: '../hoggers/hoggers.js',
        pageCSS: '../hoggers/hoggers.css'
    },
    //OCCULT (1)
    {
        pageHTML: '<div id="containerBox"></div>',
        pageURL: 'http://www.hell.com/',
        pageJS: '../occult/occult.js',
        pageCSS: '../occult/occult.css'

    },
    //UTHERS (2)
    {
        pageHTML: '    <div id="utherBox">        <img src="../imgs/utherun.png" style="height:100%;">    </div>    <script src="uther.js"></script>',
        pageURL: 'http://www.unholyuthers.com/',
        pageJS: '../uthers/uther.js',
        pageCSS: '../uthers/uther.css'

    }, 
    //HIPHOP (3)
    {
        pageHTML: '    <div id="containerBox">        <div id="textBox">            Press <span class="hintText"> A</span> to <span class="hintText">m</span>ove to other rapper        </div>        <!--DIGGA MED HUVUDET; TVÅ GÅNGER UP/NER SEN BYT SIDA; MED SOLGLAJJOR OCH HÖRLURAR-->        <div id="hpicBox">            <img src="../imgs/biggie.png" style="height:100%; width:auto;">        </div>        <div id="hpicBoxFreddie">            <img src="../imgs/freddie_gibbs.jpeg" style="height:100%;width:auto;">        </div>        <!--RÖRANDE KNAPPAR TYP; SKATEBOARD STYLE; FLERA BILDER-->        <div id="button1" onclick="playSong(1)">hypnotize</div>        <div id="button2" onclick="playSong(2)">gimme the loot</div>        <div id="button3" onclick="playSong(3)">juicy</div>        <div id="button4" onclick="playSong(4)">1970 something</div>        <div id="button1F" onclick="playSong(5)">gat damn</div>        <div id="button2F" onclick="playSong(6)">death row</div>        <div id="button3F" onclick="playSong(7)">big boss rabbit</div>        <div id="button4F" onclick="playSong(8)">baby $hit</div>        <div id="festersBox" onclick="switchPage(4)"><img src="../imgs/fester.jpg" style="height:100%; width:auto;"></div>        <div id="murkyBox" onclick="switchPage(6)"><img src="../imgs/murky.png" style="height:100%; width:auto;"></div>    </div>',
        pageURL: 'https://www.hiphopfandom.com/',
        pageJS: '../hiphop/hiphop.js',
        pageCSS: '../hiphop/hiphop.css'

    },
    //FESTERS (4)
    {
        pageHTML: '    <div id="containerBox">        <div class="pumpkinBox1">            <img src="../imgs/pumpkin.png" style="height:100%; width:auto;">        </div>        <div class="pumpkinBox2">            <img src="../imgs/pumpkin.png" style="height:100%; width:auto;">        </div>        <div id="festerBox" onclick="spinFaster()">            <img src="../imgs/fester.jpg" style="height:100%; width:auto;">        </div>        <div id="textBox" onclick="createSkeletons()">            YOOOHOOOO WELCOME TO THE SPOOKY PAGE        </div>        <div id="clickBox">            HOT TIP: CLICK STUFF ON THE PAGE        </div>        <div id="theoBox" onclick="switchPage(10)">            <img src="../imgs/happyman.png" style="height:100%; width:auto;">            <div id="theoTextBox">                CHECK OUT MY TINY PAGE            </div>        </div>        <div id="utherBox" onclick="switchPage(2)">            <div id="textBoxUther">                BECOME ONE WITH THE DARK            </div>        </div>    </div>    <script src="../festers/festers.js"></script>',
        pageURL: 'https://www.festersspookypage.com/',
        pageJS: '../festers/festers.js',
        pageCSS: '../festers/festers.css'
    },
    //MARVINS (5)
    {
        pageHTML: '    <div id="containerBox">        <div id="hiphopBox" onclick="switchPage(3)">            <img src="../imgs/biggie.png" style="height:100%; width:auto;">            <div id="textBoxBiggie">HIPHOP FANDOM</div>            <img src="../imgs/biggie.png" style="height:100%; width:auto; float:right;">        </div>        <div class="vbox1">            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CDD2NesiHdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>        <div class="vbox1">            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/1alXHOMDBN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>        <div class="vbox1">            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/DN0gAQQ7FAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>        <div class="vbox1">            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3Aj2Pt5vWT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>        <div class="vbox1">            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PGpIg7BLtQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>        <div class="vbox1">            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aFdE__2OKc8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>        <div id="hoggerBox" onclick="switchPage(0)">            <img src="../imgs/hogger.png" style="height:100%; width:auto;">            <div id="textBoxHogger">FREE CUTE PUPPIES, WORLDWIDE DELIVERY 100% SAFE</div>            <img src="../imgs/hogger.png" style="height:100%; width:auto; float:right;"></div>    </div>',
        pageURL: 'https://www.marvinsvideos.com/',
        pageJS: null,
        pageCSS: '../marvins/marvins_video.css'
    },
    //MURKYS (6)
    {
        pageHTML: '    <div id="containerBox">        <div id="cart" onclick="funcCart()">            <div id="cartText">CART</div>            <div id="cartPic">                <img src="../imgs/cart.png" style="height:90%; width:100%;">            </div>        </div>        <div id="cartItems">        </div>        <div class="gurky" onclick="switchPage(9)" style="left:2%;transform:translate(0,-50%);">            <div class="gurkyTextBox" style="top:30%;">                GURKY ANGLERS            </div>            <div class="gurkyTextBox" style="top:90%">                DEEP SEA ADVENTURES            </div>            <img src="../imgs/gurky.png" style="height:100%; width:auto;">        </div>        <div id="mbigBox">            <img src="../imgs/murky.png" style="height:30%;width:auto;">            <div id="mtitleText">MURKYS FISHIES</div>            <div id="fishContainer">                <div id="catfish">                    <img src="../imgs/fishies/catfish.jpeg" id="catfishPic" style="height:100%;">                    <div class="cartBox" id="cartCatfish" onclick="addCart(1)">ADD TO CART</div>                                    </div>                <div id="alligatorGar">                    <img src="../imgs/fishies/alligatorGar.jpeg" id="garPic" style="height:100%;">                    <div class="cartBox" id="cartGar" onclick="addCart(2)">ADD TO CART</div>                </div>                <div id="gadda">                    <img src="../imgs/fishies/gadda.jpeg" id="gaddaPic" style="height:100%;">                    <div class="cartBox" id="cartGadda" onclick="addCart(3)">ADD TO CART</div>                </div>                <div id="abborre">                    <img src="../imgs/fishies/abborre.jpeg" id="abborrePic" style="height:100%;">                    <div class="cartBox" id="cartAbborre" onclick="addCart(4)">ADD TO CART</div>                </div>                        </div>        </div>        <div class="gurky" onclick="switchPage(9)" style="left:98%;transform:translate(-100%,-50%);">            <div class="gurkyTextBox" style="top:30%;">                GURKY ANGLERS            </div>            <div class="gurkyTextBox" style="top:90%">                DEEP SEA ADVENTURES            </div>            <img src="../imgs/gurky.png" style="height:100%; width:auto;">        </div>    </div>  ',
        pageURL: 'https://www.murkysfishies.com/',
        pageJS: '../murkys/murkys.js',
        pageCSS: '../murkys/murkys.css'
    },
    //FINDTHEPIG (7)
    {
        pageHTML: '    <div id="containerBox">        <div id="textBox"  onclick="setPositions()">            FIND MY PIG PLEASE<br/>            <span>(PRESS TEXT TO START)</span>        </div>    </div>',
        pageURL: 'https://www.findthepig.com/',
        pageJS: '../findthepig/ftp.js',
        pageCSS: '../findthepig/ftp.css'
    },
    //JENNAS (8)
    {
        pageHTML: '    <div id="containerBox">        <div class="logoBox">            <div id="textBox">                BOOK YOUR TIME HERE            </div>            <div id="picBox">                <img src="../imgs/jenna2.png" style="height:auto; width:100%;">            </div>        </div>        <div class="jBox1">            <img src="../imgs/soder.jpeg" style="height:auto; width:100%;" id="picBox2">            <div class="textBox2 active" id="tx2">                SPONSORS            </div>            <div class="sponsoreBox"  id="sp1" style="left:33%;" onclick="switchPage(5)">                <div class="sponsoreText">MARVINS COOL VIDEO SITE</div>            </div>            <div class="sponsoreBox" id="sp2" style="left:66%;">                <div class="sponsoreText">TOMPAS CAFÉ</div>            </div>        </div>    </div>    <script src="jennas.js"></script>',
        pageURL: 'https://www.jennsyoga.com/',
        pageJS: '../jennas/jennas.js',
        pageCSS: '../jennas/jennas.css'
    },
    //GURKYS (9)
    {
        pageHTML: '<div id="containerBox">        <div id="gurkyBox">            <img src="../imgs/gurky.png" style="height:100%; width:auto;">            <div id="textBox">Hello and welcome to my page (SCROLL TO CONTINUE)</div>        </div>        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_iomkzwwh.json"  background="transparent"  speed="0.5"  style="width: 100vw; height: 100vh; z-index: 0;"  loop  autoplay></lottie-player>    </div>    <div class="fishBox" id="spermWhale" style="top:280%; left:50%;">        <img src="../imgs/deepfish/sperm whale.jpeg">    </div>    <div class="fishBox" id="giantSquid" style="top:400%; left:40%;">        <img src="../imgs/deepfish/giantsquid.jpeg">    </div>    <div class="fishBox" id="anglerFish" style="top:530%; left:65%;">        <img src="../imgs/deepfish/29SCI-ANGLERFISH1-articleLarge.jpeg">    </div>    <div class="fishBox" id="glandShark" style="top:670%; left:20%;">        <img src="../imgs/deepfish/greenlandshark.jpeg">    </div>    <div class="fishBox" id="bfinSquid" style="top:800%; left:40%;">        <img src="../imgs/deepfish/bigfinsquid.jpeg">    </div>    <div class="fishBox" id="nzoth" style="top:940%; left:50%;">        <img src="../imgs/deepfish/nzoth.jpeg">    </div>    <div class="fishBox" id="cthulu" style="top:1100%; left:30%;">        <img src="../imgs/deepfish/cthulu.jpeg">    </div>    <div id="chinaBox">        <div id="gurkyPigBox" onclick="switchPage(7)">            <img src="../imgs/ftp/pic1.png">        </div>        <img src="../imgs/deepfish/china.jpeg">    </div>',
        pageURL: 'https://www.gurkyangler.com/',
        pageJS: '../gurkys/gurkys.js',
        pageCSS: '../gurkys/gurkys.css'
    },
    //THEOS (10)
    {
        pageHTML: '    <div id="containerBox">        <div id="occultBox" onclick="switchPage(1)">            <div id="textBoxOccult">                LOOKING FOR WORSHIPPERS            </div>        </div>        <div class="minusPlusBox" id="plusBox" onclick="zoomIn()">+</div>        <div class="minusPlusBox" id="minusBox" onclick="zoomOut()">-</div>        <div id="scaleTainer">            <div id="headerBox">                HEY CAN YOU EVEN READ ME???            </div>            <div id="contentBox">                But I must explain to you how all this mistaken idea of denouncing pleasure <br/>                and praising pain was born and I will give you a complete account of the<br/>                system, and expound the actual teachings of the great explorer of the truth,<br/>                the master-builder of human happiness. No one rejects, dislikes, or avoids<br/>                pleasure itself, because it is pleasure, but because those who do not know<br/>                how to pursue pleasure rationally encounter consequences that are extremely<br/>                painful. Nor again is there anyone who loves or pursues or desires to obtain<br/>                pain of itself, because it is pain, but because occasionally circumstances<br/>                occur in which toil and pain can procure him some great pleasure. To take a<br/>                trivial example, which of us ever undertakes laborious physical exercise,<br/>                except to obtain some advantage from it? But who has any right to find fault<br/>                with a man who chooses to enjoy a pleasure that has no annoying consequences,<br/>                or one who avoids a pain that produces no resultant pleasure?                <div id="murkyBox" onclick="switchPage(6)">                    <img src="../imgs/murky.png" style="height:100%; width:auto;">                    <div id="murkyTextBox">CHECK OUT MY FRIENDS PAGE</div>                </div>                <div id="picBox"><img src="../imgs/happyman.png" style="height:100%; width:auto;"></div>            </div>        </div>        <div id="hoggerBox" onclick="switchPage(0)">                <img src="../imgs/hogger.png" style="height:100%; width:auto;">                <div id="textBoxHogger">FREE CUTE PUPPIES, WORLDWIDE DELIVERY 100% SAFE</div>                <img src="../imgs/hogger.png" style="height:100%; width:auto; float:right;">        </div>    </div>',
        pageURL: 'https://www.theospage.com/',
        pageJS: '../theos/theos.js',
        pageCSS: '../theos/theos.css'
    },
    //TOMPAS (11)
    {
        pageHTML: '    <div id="containerBox">        <div id="welcomeText">            WELCOME TO TOMPAS CAFÉ        </div>        <div id="smallBox1">            <div class="textBox" onclick="moveBox(1)">MENU</div>            <div id="innersmallBox1">asdasdasdasd</div>        </div>        <div id="smallBox2">            <div class="textBox" onclick="moveBox(2)">CONTACT</div>            <div id="innersmallBox2">asdasdasdasd</div>        </div>        <div id="smallBox3">            <div class="textBox" onclick="moveBox(3)">ABOUT US</div>            <div id="innersmallBox3">asdasdasdasd</div>        </div>        <div id="smallBox4">            <div class="textBox" onclick="moveBox(4)">SPONSORS</div>            <div id="innersmallBox4">                <div class="sponsorsBox" style="top:25%;" onclick="switchPage(8)"><img src="../imgs/jenna2.png" style="height:auto; width:100%;"></div>                <div class="sponsorsBox" style="top:75%;"><div>MARVINS COOL VIDEO WEBSITE</div></div>            </div>        </div>    </div>',
        pageURL: 'https://www.tompascafe.com/',
        pageJS: '../tompas/tompas.js',
        pageCSS: '../tompas/tompas.css'
    },
    //PLATFORMER (12)
    {
        pageHTML: '    LEFT/RIGHT KEYS TO MOVE, SPACE TO JUMP, HOLD SHIFT TO RUN    <canvas></canvas>',
        pageURL: 'https://www.cubeplatformer.com/',
        pageJS: '../platformer/game.js',
        pageCSS: '../platformer/game.css'
    },
    //SNAKE (13)
    {
        pageHTML: '   <div id="textIntro" onclick="runGame()">SNAKE GAME <br/> GET 10 SCORE IN ORDER TO PROCEED <br /> CLICK HERE TO START  </div>    <div class="mainRuta">        <div id="snakeScoreRuta">            SCORE: 0        </div>        <div id="miniRuta">        </div>    </div>',
        pageURL: 'https://www.thebestsnakegameintheworld.com/',
        pageJS: '../snake/snakeScripts.js',
        pageCSS: '../snake/styleSnake.css'
    },
    //DRAGONS CASTLE (14)
    {
        pageHTML: '    <div id="containerBox">        <div id="castleBox">                    </div>        <div id="textBox" onclick="newText()">                    </div>    </div>',
        pageURL: 'http://www.dragonslair.com/',
        pageJS: '../dcastle/dcastle.js',
        pageCSS: '../dcastle/dcastle.css'
    }
];

//TOGGLE DIV CLASS
function toggleState() {
    document.querySelector("#opRuta").classList.toggle("inactive");
    document.querySelector("#firstRuta").classList.toggle("inactive");
    
}

//VAR THAT CAN CREATE LINKS TO CSS FILES
var fileref=document.createElement("link");
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");


var scriptsrc2=document.createElement("script");


//REMOVING OLD STYLESHEETS AND JS
function disableSheets() {
    if(document.styleSheets.length >= 1) {
        for (var i = 1; i < document.styleSheets.length; i++) {
            document.styleSheets[i].disabled = true;
        }
    }
    if(document.scripts.length > 0) {
        document.scripts[1].disabled = true;
    }
}

function switchPage(pageNr) {
    disableSheets();
    klicks++;
    document.getElementById("containerRuta").innerHTML = pageArray[pageNr].pageHTML;
    document.getElementById("webnameRuta").innerHTML = pageArray[pageNr].pageURL;
    document.getElementById("scoreRuta").innerHTML = "KLICKS: " + klicks;

    var scriptsrc = document.createElement("script");
    scriptsrc.setAttribute("async", "false");
    scriptsrc.setAttribute("src", pageArray[pageNr].pageJS);
    
    fileref.setAttribute("href", pageArray[pageNr].pageCSS);
    document.getElementsByTagName("head")[0].appendChild(fileref);
    if(pageArray[pageNr].pageJS != null) document.getElementsByTagName("head")[0].appendChild(scriptsrc);
}
