//遵守AMD规范
define(['jquery'],function($){

//轮播图
    function banner(){
        var aBtns=$('.banner').find('ol li');
        var oUl=$('.banner').find('ul');
        var timer=null;
        var iNow=0;//下标
        var n=0;

        aBtns.mouseover(function(){
            iNow=$(this).index();
            
            tab();
        })

        timer=setInterval(function(){
            iNow++;
            tab();
        },2000)

        $('.banner').mouseenter(function(){
            clearInterval(timer);
        }).mouseleave(function(){
            timer=setInterval(function(){
                iNow++;
                tab();
            },2000)
    
        })

        function tab(){
            aBtns.removeClass('active').eq(iNow).addClass('active');
            if(iNow==aBtns.size()){
                aBtns.eq(0).addClass('active');
            }
            
            oUl.stop().animate(
                {
                    left:iNow*-1519.2,
                 } ,
                500,
                function(){
                    if(iNow==aBtns.size()){
                        iNow=0;
                        oUl.css('left',0)
                    }
                }
            )
            
    

    }
}

// 导航顶部栏
    function topnav(){
        var topDiv=$('#topNav');
        var dsq;
        var top1;
        window.onscroll=function(){
            top1=document.body.scrollTop||document.documentElement.scrollTop;
            // console.log(top1)
            if(top1>630){

                $('#topNav').css({
                    position:'fixed',
                    top:0,
                    zIndex:1
                })
            }else{
                $('#topNav').css({
                    position:'static'
                })
            }
        }
    }


    //商品选项卡
    function tabList(){
       var  tabBox=$('.list3').find('li');
        tabBoxBottom=$('.tabBox-bottoma').find('ul')
        tabBox.click(function(){
            tabBox.attr('class','');
            $(this).attr('class','active')

            tabBoxBottom.css('display','none')
            .eq($(this).index())
            .css('display','block')

        })

    }



//    翻牌
    // var mn=false;
    // function cardd(){
    //     $('.face:nth-child(5)').click(function(){
    //         if(!mn){
    //         $('.face').css('background','url(../images/images/ia_100000068.png) center center / 100% 100% no-repeat')
    //         $('.face:nth-child(5)').css({
    //             'background':'url(../images/images/ia_100000069.png) center center / 100% 100% no-repeat',
    //             'backgroundSize':'144px,144px'
    //         })
    //         mn=true;
    //     }else{
    //             $('.face').css('background','url(../images/images/xiexie.png) center center / 100% 100% no-repeat')
    //             $('.face:nth-child(5)').css({
    //                 'background':'url(../images/images/ia_100000112.png) center center / 100% 100% no-repeat',
    //                 'backgroundSize':'144px,144px'
    //             })
    //             mn=false;
            
    //     }
    //     })
    // }
            
   
    
   
    var mn=false;
    function cardd(){
       
        $('.face:nth-child(5)').click(function(){

            if(!mn){
            $('.face').css({

                'background':'url(../images/images/ia_100000068.png) center center / 100% 100% no-repeat',
                'transform': 'rotateY(360deg)'

            })
            $('.face:nth-child(5)').css({
                'background':'url(../images/images/ia_100000069.png) center center / 100% 100% no-repeat',
                'backgroundSize':'144px,144px',
                'transform': 'rotateY(0)'

            })
            mn=true;
        }else{
                $('.face').css({

                    'background':'url(../images/images/xiexie.png) center center / 100% 100% no-repeat',
                    'transform': 'rotateY(720deg)'

            })
                $('.face:nth-child(5)').css({
                    'background':'url(../images/images/ia_100000112.png) center center / 100% 100% no-repeat',
                    'backgroundSize':'144px,144px',
                    'transform': 'rotateY(0)'


                })
                mn=false;
            
        }
        })
    }

    return{
        banner,
        topnav,
        tabList,
        cardd
    } 
})

