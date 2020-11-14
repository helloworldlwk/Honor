//遵守AMD规范
define(['jquery'],function($){
    
function move(){
    console.log(1);
    var aBtn1=$('.content').find('.cclbljian');
    var aBtn2=$('.content').find('.cclbRjian')
    var oUl=$('.content').find('#m');
    var oLi=$('.content').find('#m li');
    var oN=$('.content').find('#m #n');
    var btn1=$('#footer').find('.mo-dal')

    var iNow=0;
    aBtn2.on("click",function(){
        iNow++
        iNow=Math.min(iNow,6)

        $('.content #m #n').attr('display','block');
        oUl.stop().animate(
            {
                left:iNow*-74,
            }
        )
        
    })
    aBtn1.on("click",function(){
        iNow--
        iNow=Math.max(0,iNow);
        if(-74*iNow==0){
            oUl.stop().animate(
                {
                    left:0
                }
            )
        }else{
            oUl.stop().animate(
                {
                    left:-74*iNow
                }
            )
        }
         
       
    })

}

// 对应显示
var iNow=0
function blocka(){
    var oLi2=$('.content').find('#m li');
    var oImg=$('.content').find('.ccltop img');
    var bImg=$('.content').find('.big img');
    oLi2.on('mouseenter',function(){
        iNow = $(this).index();
        oLi2.removeClass("active").eq(iNow).addClass("active");
        // oImg.eq(iNow).css('display','block');
        oImg.removeClass("active").eq(iNow).addClass("active");
        bImg.removeClass("active").eq(iNow).addClass("active");

        // console.log(iNow);
    })
    
}

//放大
function scale(){
    var mark=$('.content').find('#mark');
    var big=$('.content').find('.big');
    var bigImg=$('.content').find('.big img');
    // console.log(bigImg);
    var box=$('.content').find('.ccltop');

    box.on('mouseenter',function(){
        $('.content .ccontent .ccleft .big').css('display','block')
        // console.log(333);
        // console.log($('.content .ccontent .ccleft .big'));
        $('#mark').css('display','block')

    })
    box.on('mouseleave',function(){
        $('.content .ccontent .ccleft .big').css('display','none')
        $('#mark').css('display','none')
    })

    box.on('mousemove',function(ev){
        var e=ev||window.event;
        var x=e.pageX-$(this).offset().left-mark.width()/2;
        x=Math.max(0,x);
        x=Math.min(x,225);
        var y=e.pageY-$(this).offset().top-mark.height()/2;
        y=Math.max(0,y);
        y=Math.min(y,225);

        mark.css('left',x+'px');
        mark.css('top',y+'px');
        bigImg.css('left',-2*x+'px');
        bigImg.css('top',-2*y+'px');



    })

}

//右侧导航栏购物车加减
function sum(){
    var btn1=$('.content .mian-right-info').find('.car');
    var btnAdd=$('.content .mian-right-info').find('.add');
    var btnReduce=$('.content .mian-right-info').find('.reduce');
    var inp=$('.content .mian-right-info').find('.purchase input')
    var hides=$('.leftnav .leftnavbox').find('#hides');
    var nu;
    $('.content').on('click','.add',function(){
        nu=inp.val();
        nu++;
        inp.val(nu);
    })
       
    // console.log($.cookie('goods'));
    $('.content').on('click','.reduce',function(){
        nu=inp.val();
        nu--;
        nu=Math.max(1,nu)
        inp.val(nu);
    })
//通过委托添加cookie

    $('.content').on('click','.car',function(){
        // console.log(inp.val());
        $('.leftnav .leftnavbox').find('#hides').css('display','block');


        //获取商品id
        var id=this.id;
        var first=$.cookie('goods') === null?true:false;
        console.log(first);
        if(first){
            //判断是第一次
            var c=$('.content .mian-right-info').find('.purchase input').val();
            var cookieArr=[{
                id:id,
                num:c,
            }];
           
            // cookieArr[0].num=c;

            hides.html(cookieArr[0].num);
            $.cookie('goods',JSON.stringify(cookieArr),{
                expires:7
            })
            console.log(1);
        }else{  
            //查找之前是否添过
            var cookieArr=JSON.parse($.cookie('goods'));
            console.log(2)
            var same=false//假设之前没添加过
            for(var i=0;i<cookieArr.length;i++){
                if(cookieArr[i].id==id){
                    same=true;
                    break;
                }
            }
            if(same){
                //数量+1
                // cookieArr[i].num++;
                // console.log(inp.val());
                var a=parseInt($('.content .mian-right-info').find('.purchase input').val());
                var cookieArr = JSON.parse($.cookie("goods"))
                cookieArr[i].num =parseInt(cookieArr[i].num)+a;
                hides.html(cookieArr[0].num);

                // console.log(cookieArr[i].num);
                $.cookie('goods',JSON.stringify(cookieArr),{
                    expires:7
                })
            }else{
                //如果没有添加过的话，执行这里
                
                let obj={id:id,num:1}
                cookieArr.push(obj);
            }
            //存回cookie中
            $.cookie('goods',JSON.stringify(cookieArr),{
                expires:7
            })
            
     }
    })
}

    // window.onload=function(){
    //     move();
    //     scale();
    //     blocka();
    //     sum();
    // }
    return{
        move,
        scale,
        blocka,
        sum
    }
})

 //小图标轮动
    