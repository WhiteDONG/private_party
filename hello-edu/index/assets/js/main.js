var clientWidth  = document.documentElement.clientWidth;
var clientHeight  = document.documentElement.clientHeight;
var star = document.getElementById('star');
var sectionNodes = document.getElementsByClassName('section');
var limit = {};
var position = 0;
var isScrolling = false;
var timer = null;




function resetStar(){
    star.style.width = clientWidth +'px';
    star.style.height = clientWidth +'px';
}

document.getElementById('topBtn').onclick= function(e){
    var e = {deltaY: -120};
    position = 0
    winScroll(e);
}



window.onresize = function() {
    console.log('监听变化');
    clientWidth  = document.documentElement.clientWidth;
    clientHeight  = document.documentElement.clientHeight;
    resetStar();
}

resetStar();
