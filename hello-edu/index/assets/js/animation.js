function card1Animation (){
    var moveAct = ['27%', '73%', '50%'];
    var scaleAct = ['0.9', '0.9', '1'];
    var zIndexAct = [1, 1, 4];
    var animationPostion = 0;
    document.getElementsByClassName('layer2-card1')[0].style.zIndex = zIndexAct[animationPostion];
    document.getElementsByClassName('layer2-card1')[0].style.left = moveAct[animationPostion];
    document.getElementsByClassName('layer2-card1')[0].style.transform = "scale("+scaleAct[animationPostion]+")";
    animationPostion+=1;
    setInterval(function() {
        document.getElementsByClassName('layer2-card1')[0].style.zIndex = zIndexAct[animationPostion];
        document.getElementsByClassName('layer2-card1')[0].style.left = moveAct[animationPostion];
        document.getElementsByClassName('layer2-card1')[0].style.transform = "scale("+scaleAct[animationPostion]+")";
        animationPostion+=1;
        if(animationPostion>2) animationPostion = 0;
    }, 2800);
}

function card2Animation (){
    var moveAct = ['50%', '27%', '73%'];
    var scaleAct = ['1', '0.9', '0.9'];
    var backgroundAct = ['0 100%','0 0','0 0'];
    var zIndexAct = [4, 1, 1];
    var animationPostion = 0;
    document.getElementsByClassName('layer2-card2')[0].style.zIndex = zIndexAct[animationPostion];
    document.getElementsByClassName('layer2-card2')[0].style.left = moveAct[animationPostion];
    document.getElementsByClassName('layer2-card2')[0].style.transform = "scale("+scaleAct[animationPostion]+")";
    document.getElementsByClassName('layer2-card2')[0].style.backgroundPosition = backgroundAct[animationPostion];
    animationPostion+=1;
    setInterval(function() {
        document.getElementsByClassName('layer2-card2')[0].style.zIndex = zIndexAct[animationPostion];
        document.getElementsByClassName('layer2-card2')[0].style.left = moveAct[animationPostion];
        document.getElementsByClassName('layer2-card2')[0].style.transform = "scale("+scaleAct[animationPostion];+")";
        document.getElementsByClassName('layer2-card2')[0].style.backgroundPosition = backgroundAct[animationPostion];

        animationPostion+=1;
        if(animationPostion>2) animationPostion = 0;
    }, 2800);
}

function card3Animation (){
    var moveAct = ['73%', '50%', '27%'];
    var scaleAct = ['0.9', '1', '0.9'];
    var backgroundAct = ['0 0','0 100%','0 0'];
    var zIndexAct = [1, 4, 1];
    var animationPostion = 0;
    document.getElementsByClassName('layer2-card3')[0].style.zIndex = zIndexAct[animationPostion];
    document.getElementsByClassName('layer2-card3')[0].style.left = moveAct[animationPostion];
    document.getElementsByClassName('layer2-card3')[0].style.transform = "scale("+scaleAct[animationPostion]+")";
    document.getElementsByClassName('layer2-card3')[0].style.backgroundPosition = backgroundAct[animationPostion];
    
    animationPostion+=1;
    setInterval(function() {
        document.getElementsByClassName('layer2-card3')[0].style.zIndex = zIndexAct[animationPostion];
        document.getElementsByClassName('layer2-card3')[0].style.left = moveAct[animationPostion];
        document.getElementsByClassName('layer2-card3')[0].style.transform = "scale("+scaleAct[animationPostion];+")";
        document.getElementsByClassName('layer2-card3')[0].style.backgroundPosition = backgroundAct[animationPostion];

        animationPostion+=1;
        if(animationPostion>2) animationPostion = 0;
    }, 2800);
}
function addHomeAniamtion(){
    var homeWrap = document.getElementById('animateOptions');

    var timer = null;
    var isAnimation = false;
    var flag = 0;

    var imgList = [{url:'assets/img/home_card1.png'},{url:'assets/img/home_card2.png'},{url:'assets/img/light.png'} ]
    for(var i=0;i<imgList.length;i++){
        var img=new Image();
        img.src = imgList[i].url;
        imgList[i].isloaded = false;
        img.onload = function(e){
            flag ++;
            if(flag == imgList.length) {
                isAnimation = true
            }
        };
    }
    timer = setInterval(function(){
        if(isAnimation) {
            homeWrap.className = [homeWrap.className, 'animateOptions'].join(' ');
            clearInterval(timer);
        }
    }, 100)
    
}
(function animation() {
    card1Animation();
    card2Animation();
    card3Animation();
    addHomeAniamtion();
})();