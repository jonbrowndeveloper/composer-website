var imgArray = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png'],
    curIndex = 0;
    imgDuration = 3000;

function slideShow() {
    document.getElementById('slideshow').className += "fadeOut";
    setTimeout(function() {
        document.getElementById('slideshow').src = imgArray[curIndex];
        document.getElementById('slideshow').className = "";
    },1000);
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout(slideShow, imgDuration);
}
slideShow();