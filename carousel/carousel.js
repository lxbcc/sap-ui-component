$(function(){
    var $box=$('#box');
    var tiemr;
    var html=''
        +'<div class="slider" id="slider">'
            +'<div class="slide">'
            +'<img src="pic/b5.png" alt="">'
            +'</div>'
            +'<div class="slide">'
            +'<img src="pic/b1.png" alt="">'
            +'</div>'
            +'<div class="slide">'
            +'<img src="pic/b2.png" alt="">'
            +'</div>'
            +'<div class="slide">'
            +'<img src="pic/b3.png" alt="">'
            +'</div>'
            +'<div class="slide">'
            +'<img src="pic/b4.png" alt="">'
            +'</div>'
            +'<div class="slide">'
            +'<img src="pic/b5.png" alt="">'
            +'</div>'
            +'<div class="slide">'
            +'<img src="pic/b1.png" alt="">'
            +'</div>'
        +'</div>'
        +'<span id="left"><</span>'
        +'<span id="right">></span>'
        +'<ul class="nav" id="navs">'
            +'<li class="native">1</li>'
            +'<li>2</li>'
            +'<li>3</li>'
            +'<li>4</li>'
            +'<li>5</li>'
        +'</ul>',
    $con=$(html);
    $box.append($con);
    $left=$('#left');
    $right=$('#right');
    $slider=$('#slider');
    var index=1
    var isMoving=false;
    var oNavlist = document.getElementById('navs').children;
    var right =document.getElementById('right')
    var left =document.getElementById('left')
    var slider=document.getElementById('slider')
    $box.mouseover(function(){
        $('span').css({opacity:'0.5'});
        clearInterval(timer)
    })
    $box.mouseout(function(){
        $('span').css({opacity:'0'});
        timer = setInterval(next, 2000);
    })
    right.onclick=function(){
        next()
    };
    left.onclick=function(){
        prev()
    };
    function pan(){
        if(index<6){
            if(index==2){
                $slider.css({left:-1200})
            }
        $slider.animate({left:-1200*index})
        }
        else{
            
            $slider.animate({left:'-='+1200+'px'});
            $slider.css({left:-1200})
            index=1
        }
        console.log(index)
    }
    function pan2(){
        if(index>0){
            if(index==4){
                $slider.css({left:-6000})
            }
        $slider.animate({left:-1200*index})  
        }
        else{
            $slider.animate({left:'+='+1200+'px'});
            $slider.css({left:-6000});
            index=5
        }
    }
    function next(){
        console.log(100)
        if(isMoving){
            return;
        }
        isMoving=true;
        index++;
        navmove();
        pan()
        isMoving=false;
    }
    function prev(){
        if(isMoving){
            return;
        }
        isMoving=true;
        index--;
        navmove();
        pan2()
        isMoving=false;    
    }
    function navmove(){
        for(var i=0;i<oNavlist.length;i++){
            oNavlist[i].className = "";
        }
        if(index>5){
            oNavlist[0].className="active";
        }
        else if(index<=0){
            oNavlist[4].className="active";
        }
        else{
            oNavlist[index-1].className="active";
        }
    }
    timer=setInterval(next,2000);
})