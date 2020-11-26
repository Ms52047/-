window.addEventListener('load', function () {
    var lunbo=document.querySelector('.lunbo');
    var coin=document.querySelectorAll('.coin');
    //鼠标放上去显示隐藏箭头
    lunbo.addEventListener('mouseenter',function () {
        for(var i=0;i<2;i++){
            coin[i].style.display='block';
        }
        clearInterval(trans);
        trans=null;
    })
    lunbo.addEventListener('mouseleave',function () {
        for(var i=0;i<2;i++){
            coin[i].style.display='none';
        }
        trans= setInterval(function () {
            coinr.click();
        },2000);
    })
    var pcul=document.querySelector('#pcul');//获得轮播图的ul
    var pclis=pcul.querySelectorAll('li');//获得轮播图中的li
    var btol=lunbo.querySelector('ol');//获得底部小圆圈的ol

    //动态添加ol的小圆圈

    for(var i=0;i<pclis.length;i++){
        var olli =document.createElement('li');
        btol.appendChild(olli);
        olli.setAttribute('index',i);
        if(i==0){
            olli.style.backgroundColor='#d5878b';
        }
    }

    //点击圆圈变色

    var btli=btol.querySelectorAll('li');
    for(var i=0;i<btli.length;i++){
        btli[i].addEventListener('click',function () {
            for(var i=0;i<btli.length;i++){
                btli[i].style.backgroundColor='#fff';
            }
            this.style.backgroundColor='#d5878b';
            //点击小圆圈滚动图片
            var index=this.getAttribute('index');
            num=index;
            cicle=index;
            move(pcul,-index*640);
            })
    }
    //克隆第一张图片
    var cloneli=pcul.children[0].cloneNode(true);
    pcul.appendChild(cloneli);
    //点击右按钮滚动图片
    var num=0;
    var cicle=0;
    var flag=true
    var coinr=document.querySelector('.coin-r');//得到右按钮
    coinr.addEventListener('click',function () {
        if(flag){
            flag=false;
            if(num==pclis.length){
                num=0;
                pcul.style.left='0';
            }
            num++;
            move(pcul,-num*640,function () {
              flag=true;
            });
            //小圆圈随点击变化
            cicle++;
            if(cicle==pclis.length){
                cicle=0;
            }
            for(var i=0;i<btol.children.length;i++){

                btol.children[i].style.backgroundColor='#fff';
            }
            btol.children[cicle].style.backgroundColor='#d5878b';
        }

    });
    //左侧点击按钮变化
    var coinl=document.querySelector('.coin-l');//得到左按钮
    coinl.addEventListener('click',function () {
        if(flag){
            flag=false;
            if(num==0){
                num=pclis.length;
                pcul.style.left=-num*640+'px';
            }
            num--;
            move(pcul,-num*640,function () {
            flag=true;
            });
            //小圆圈随点击变化
            cicle--;
            if(cicle<0){
                cicle=pclis.length-1;
            }
            for(var i=0;i<btol.children.length;i++){
                btol.children[i].style.backgroundColor='#fff';
            }
            btol.children[cicle].style.backgroundColor='#d5878b'
        }
        ;
    });
    //鼠标离开自动播放，鼠标放上去停止播放
       var trans= setInterval(function () {
            coinr.click();
        },2000);


























})