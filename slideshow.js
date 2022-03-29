var imgArray = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png'],
    curIndex = 0;
    slideShowRunning = true;

function slideShowFadeOut() {
    if (slideShowRunning) {
        setTimeout(function () {
            document.getElementById('slideshow').className += "fadeOut";
            curIndex++;
            setTimeout(function () {
                document.getElementById('slideshow').src = imgArray[curIndex];
            }, 400);
            slideShowFadeIn()
        }, 800);
    }
}

function slideShowFadeIn() {
    if (curIndex == imgArray.length - 1) { slideShowRunning = false; }
    setTimeout(function () {

        document.getElementById('slideshow').className = "";
        slideShowFadeOut()
    }, 800);
}
slideShowFadeOut();