//遵守AMD规范
define(['jquery','jquery-cookie'],function($){
    function shop(){
        function sc_msg(){
            //先清空一下上一次的数据
            $("#main .commodity-data").empty();
            $.ajax({
              type: "get",
              url: "../data/data3.json",
              success: function(arr){
                //在arr中将已经加入购物车的数据拿出来
                var cookieStr = $.cookie("goods");
                var newArr = [];
                // console.log(cookieStr);
                if(cookieStr){
                  var cookieArr = JSON.parse(cookieStr);
                  console.log(cookieArr)
                  for(var i = 0; i < arr.length; i++){
                    for(var j = 0; j < cookieArr.length; j++){
                      if(arr[i].id == cookieArr[j].id){
                        //将数据添加上述
                        arr[i].num = cookieArr[j].num;
                        newArr.push(arr[i]);
                        break;
                      }
                    }
                  }
                  console.log(newArr);
    
                  //将找出来的数据，在右侧购物车的部分加载出来
                  for(var i = 0; i < newArr.length; i++){
                    console.log(newArr)
                    var node = $(` <li  id="${newArr[i].id}">
                    <p class="check">
                      <input type="checkbox" class="readonly" />
                    </p>
                    <p class="pic">
                      <img src="${newArr[i].img10}" alt="" />
                    </p>
                    <article class="title">
                      <p class="introduce">
                        ${newArr[i].title}
                      </p>
                      <p class="desc">
                        65 英寸 V65 4K量子点挂架版4+64GB 星际黑
                      </p>
                      <p class="sale">分期免息</p>
                    </article>
                    <p class="unit priceMoney">
                      <em>￥</em>
                     <span>${newArr[i].price}
                     </span>
                    </p>
                    <p class="stock-btn">
                      <a href="javascript:" class="decrease">-</a>
                      <span class="btn-num">${newArr[i].num}</span>
                      <a href="javascript:" class="add">+</a>
                    </p>
                    <p class="subtotal"><em>￥${newArr[i].price*newArr[i].num}</em></p>
                    <p class="del">删除</p>
                  </li> 
       `);
                    node.appendTo($("#main .commodity-data"));
                  }
                }
              },
              error: function(msg){
                console.log(msg);
              }
           })
          }
    
           sc_msg();
   

    
     //通过事件委托，给加和减这两个按钮添加点击
     $("#main .commodity-data").on("click", ".stock-btn a", function(){
    //    $(this).siblings('.btn-num').html(cookieArr[index].num);
        var id = $(this).closest("li").attr("id");
      
        //1、先找到这个id的cookie数据
        var cookieArr = JSON.parse($.cookie("goods"));
        var unit=$(this).parent().prev().find('span').html();
        var em1= $(this).parent().next(); 
        // var num1=$(this).siblings('.btn-num').html();
        // var num2=parseInt(num1)+1;
        
        console.log(unit);
        // console.log(num2);
        // console.log(su);
        console.log(em1);

        var index = cookieArr.findIndex(item => item.id == id);
      

        if($(this).html() == "+"){
           
          cookieArr[index].num++;
          em1.html(cookieArr[index].num*unit);


        }
        else{

          cookieArr[index].num == 1 ? alert("数量为1，不减少") : cookieArr[index].num--;
          em1.html(cookieArr[index].num*unit);

        }
        // 页面显示的数量
        $(this).siblings("span").html(`${cookieArr[index].num}`);


        $.cookie("goods", JSON.stringify(cookieArr), {
          expires: 7
        })
        sc_num();
      })

      function sc_num(){
        var sum = 0;
        var cookieStr = $.cookie("goods");
        if(cookieStr){
          var cookieArr = JSON.parse(cookieStr);
          for(var i = 0; i < cookieArr.length; i++){
            sum += cookieArr[i].num;
          }
        }
        $(".leftnav #hides").html(sum);
      }


      //删除
      $("#main .commodity-data").on("click", ".del", function(){
              
                //删除节点  页面上要删除这个节点，cookie中也要删除
                var id = $(this).closest("li").remove().attr("id");
                var cookieArr = JSON.parse($.cookie("goods"));  
                var index = cookieArr.findIndex(item => item.id == id);
                cookieArr.splice(index, 1);
                //判断cookieArr是否为空
                cookieArr.length === 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                  expires: 7
                })
                sc_num();
        
      })


    }

    return{
        shop
    }
})