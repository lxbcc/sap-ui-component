var $talkGoto=(function(){     
    var html=''
        
        cfg={
            container:'body',
            num:6,
            title:'同意',
            onClick:null
        },
        num,
        timer;
        function show(conf){
        $(cfg.container).append($btn);
        $.extend(cfg,conf);
        num=cfg.num;
        $btn.val(cfg.title+'('+cfg.num+'s)');
        timer=setInterval(function(){
            num--;
            if(num===0){
                clearInterval(timer);
                $btn.val(cfg.title);
                $btn.removeAttr('disabled');
            }else{
                $btn.val(cfg.title+'('+num+'s)');
            }
        },1000);
        // $btn.click(function(){
        //     alert('就知道你会同意')
        // });
        $btn.click(cfg.onClick);
    }
    
    
    
    return{
        show: show
    };
}());