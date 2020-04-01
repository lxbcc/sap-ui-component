$(function(){
    var $url =$('input[type="text"]'),
        $btnSave =$('inpt[type="button"]'),
        $img  =$('img'),
        $tmpImg = $('<img>');//临时
        // var strImg=window.localStorage.getItem('img');
        // if(strImg!==''){
        //     $img.attr('src',strImg)
        // }
        
    $btnSave.click(function(){
        var url =$url.val();
        if(url==='')return;
        $tmpImg.attr('crossOrigin','anonymous');
        $tmpImg.attr('src',url);
        var can=$('<canvas>').get(0);
        var ctx=can.getContext('2d');
        can.width=$tmpImg.get(0).width;
        can.heigt=$tmpImg.get(0).heigt;
        ctx.drawImg($tmpImg.get(0),0,0,can.width,can.heigt)
        var str=can.toDataURL();
        console.log(str);
        window.localStorage.setItem('img',str);
        
    })
})