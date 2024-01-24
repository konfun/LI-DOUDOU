
/*----------------------------------------slider_img-------------------------------------------------*/

var slider_img = document.querySelector('.slider_img');
var images1 = ['Mou-9855.jpg', 'Mou-9837.jpg', 'Mou-9884.jpg', 'Mou-9885.jpg'];
var i = 0;

function prev() {
    if( i <= 0 ) i = images1.length;
    i--;
    return setImg();
}

function next() {
    if (i >= images1.length - 1) i = -1;
    i++;
    return setImg();
}

function setImg() {
    return slider_img.setAttribute("src", "images1/"+images1[i]);
}


/*----------------------------------------slider_img_2-------------------------------------------------*/



var slider_img_2 = document.querySelector('.slider_img_2');
var images2_js = ['Mou-1277.jpg', 'Mou-2891.jpg', 'Mou-6540.jpg'];
var j = 0;

function prev2() {
    if( j <= 0 ) j = images2_js.length;
    j--;
    return setImg2();
}

function next2() {
    if (j >= images2_js.length - 1) j = -1;
    j++;
    return setImg2();
}

function setImg2() {
    return slider_img_2.setAttribute("src", "images2_js/"+images2_js[j]);
}


/*----------------------------------------slider_img_2-------------------------------------------------*/