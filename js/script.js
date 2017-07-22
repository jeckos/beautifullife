
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
}
