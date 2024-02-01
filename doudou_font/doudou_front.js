/*----------------------------------------nav-------------------------------------------------*/

const hamburger = document.querySelector(".hamburger")
const navmenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navmenu.classList.remove("active");
}))


/*----------------------------------------slider_img-------------------------------------------------*/

var slider_img = document.querySelector('.slider-img');
var album_1 = ['獸醫師法 vs 醫師法.醫療法_01.jpg', '獸醫師法 vs 醫師法.醫療法_02.jpg', '獸醫師法 vs 醫師法.醫療法_03.jpg', '獸醫師法 vs 醫師法.醫療法_04.jpg', '獸醫師法 vs 醫師法.醫療法_05.jpg', '獸醫師法 vs 醫師法.醫療法_06.jpg', '獸醫師法 vs 醫師法.醫療法_07.jpg', '獸醫師法 vs 醫師法.醫療法_08.jpg'];
var i = 0;

function prev() {
    if( i <= 0 ) i = album_1.length;
    i--;
    return setImg();
}

function next() {
    if (i >= album_1.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute("src", "album_1/"+ album_1[i]);
}


/*----------------------------------------slider_img_2-------------------------------------------------*/



var slider_img_2 = document.querySelector('.slider-img_2');
var album_2 = ['獸醫臨床行為法規監管－final_01-new.png', '獸醫臨床行為法規監管－final_02-new.png', '獸醫臨床行為法規監管－final_03-new.png', '獸醫臨床行為法規監管－final_04-new.png', '獸醫臨床行為法規監管－final_05-new.png'];
var j = 0;

function prev2() {
    if( j <= 0 ) j = album_2.length;
    j--;
    return setImg2();
}

function next2() {
    if (j >= album_2.length - 1) j = -1;
    j++;
    return setImg2();
}

function setImg2() {
    return slider_img_2.setAttribute("src", "album_2/"+ album_2[j]);
}


/*----------------------------------------slider_img_2-------------------------------------------------*/




