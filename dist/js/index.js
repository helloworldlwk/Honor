define(["parabola","jquery","jquery-cookie"],function(parabola,$){
    function download(){
        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<8;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.list1 ul').html(str);
            },
            error:function(msg){
                console.log(msg);
            }
        })


        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=8;i<12;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.list2 ul').html(str);
            },
            error:function(msg){
                console.log(msg);
            }
        })




        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=5;i<9;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.list3 .tabBox-bottoma .tabBox-bottom:nth-child(1)').html(str);

            },
            error:function(msg){
                console.log(msg);
            }
        })



        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=4;i<8;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.list3 .tabBox-bottoma .tabBox-bottom:nth-child(2)').html(str);

            },
            error:function(msg){
                console.log(msg);
            }
        })




        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=8;i<12;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.list3 .tabBox-bottoma .tabBox-bottom:nth-child(3)').html(str);

            },
            error:function(msg){
                console.log(msg);
            }
        })





        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=2;i<6;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.list3 .tabBox-bottoma .tabBox-bottom:nth-child(4)').html(str);

            },
            error:function(msg){
                console.log(msg);
            }
        })




        $.ajax({
            type:"get",
            url:"../data/data.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<12;i++){
                    str += ` <li class="good_item">
                    <a href="">
                    <div class="good_pic">
                        <img src="${arr[i].img}" alt="">
                        <span>${arr[i].sale}</span>
                    </div>
                    <div class="good_title">
                        <p>${arr[i].title}</p>
                        <p>${arr[i].dese}</p>
                    </div>
                    <div class="price_wrp">
                        <p class="price">
                        <span>￥</span>
                        <span>${arr[i].price}</span>
                        <span>起</span>
                    </p>
                    </div>
                </a>
                </li> `
                }
                $('.hotlist ul').html(str);

            },
            error:function(msg){
                console.log(msg);
            }
        })

    }



    
    return {
        download
    }
})