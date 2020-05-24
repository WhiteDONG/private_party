var clientHeight  = document.documentElement.clientHeight;
if (navigator.userAgent.toLowerCase().indexOf('firefox') === -1) {
    document.addEventListener('mousewheel', debounce);
} else {
    document.addEventListener('DOMMouseScroll', debounce);
}

function debounce(e){
    if(!isScrolling) {
        winScroll(e)
    }
    isScrolling = true;
    clearTimeout(timer);
    timer = setTimeout(function(){
        isScrolling = false;
    },200)
    
}

function initSectionHeight() {
    for(var i=0;i<sectionNodes.length;i++) {
        sectionNodes[i].style.transform = '';
    }
}

function winScroll(e){
    // clientHeight  = document.documentElement.clientHeight;
    /**
     * deltaY: 谷歌浏览器
     * wheelDelta: IE浏览器
     * detail: 火狐浏览器
     */
    var direction = e.deltaY||-e.wheelDelta||e.detail; // direction>0 向下移动 direction<0 向上移动

    direction > 0?position+=1:position-=1;
    
    if(position < 0) position = 0;
    if(position > 4) position = 4;

    if(position > -1 && position < 5) {
        initSectionHeight();
        for(var i=0;i< position+1;i++) {
            sectionNodes[i].style.transform = 'translateY(-'+clientHeight*(position)+'px)';
        }
        sectionAnimate('section-'+(position+1));
        if(position==3) {
            isUserInteracting = true;
        } else {
            initVRdata();
        }
        document.getElementById('pendant').style.transform = (position==0?'translateX(81px)':'translateX(0px)');
    }
}
function sectionAnimate(tag){
    for(var i = 0;i<sectionNodes.length;i++) {
        sectionNodes[i].className = 'section section-'+(i+1);
        if(sectionNodes[i].className.indexOf(tag)>-1) {
            sectionNodes[i].className = [sectionNodes[i].className, 'act'].join(' ')
        }
    }
}

function initVRdata() {
    isUserInteracting = false;
    camera.position.x = 100;
    camera.position.y = 200;
    camera.position.z = -400;
    lon = 0;
    lat = -85;
}