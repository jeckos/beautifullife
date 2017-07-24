/*
var img = document.querySelector(".post_item_cont");
var img2 = img.getElementsByTagName("img")[0];
var div = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');

img2.onclick = function(){
    div.className= "view_photo";
    document.body.appendChild(div);
    div.appendChild(div2);
    div2.className="pht_wrapper";
    div2.appendChild(div3);
    div3.className="pht_orgl";
    div3.innerHTML = "<img src=\"../img/user/7.jpg\" alt=\"\">";
}*/

var view = document.querySelector("#view_photo");
var up = document.querySelector("#upload");
var reload = document.querySelectorAll(".a_reload");
var close = document.querySelectorAll(".close");
var viewImg = view.getElementsByTagName("IMG");
var viewSrc = viewImg[0];
var img;
var closedAll;


function closed() {
    var close = document.querySelectorAll(".close");
    console.log(close);
    for (var i = 0; i < close.length; i++) {
        closedAll = close[i];

        closedAll.addEventListener("click", closeDiv, false);
    }
}

function closeDiv(e) {
    var e = e;
    var closeImg = e.target;
    if (view.className == "show") {
        view.className = "hide";
        document.body.style.overflow = '';


    } else if (up.className == "show") {
        up.className = "hide";
        document.body.style.overflow = '';
    }
}


function reloaded(el) {
    for (var i = 0; i < reload.length; i++) {
        el[i].onclick = function () {
            up.classList.remove('hide');
            up.classList.add('show');
            document.body.style.overflow = 'hidden';

        }
    }
}

function selectPhoto() {
    var selPhotoAll = document.querySelectorAll(".post_pht_content");
    for (var i = 0; i < selPhotoAll.length; i++) {
        img = selPhotoAll[i];
        console.log(img);
        img.addEventListener("click", showPht, false);
    }

}

function showPht(e) {
    var e = e;
    var allImg = e.target;
    if (view.className == "hide") {
        view.className = "show";
        document.body.style.overflow = 'hidden';
        viewSrc.src = allImg.src;
    }

}

window.onload = function () {
    reloaded(reload);
    selectPhoto();
    closed();


}






