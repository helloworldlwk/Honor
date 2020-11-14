define(["shop","parabola","jquery","jquery-cookie"],function(shop,parabola,$){
    function downloadb(){
        $.ajax({
            type:'get',
            url:"../data/data3.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                    str+=`
                     <li  id="">
                    <p class="check">
                      <input type="checkbox" class="readonly" />
                    </p>
                    <p class="pic">
                      <img src="${arr[i].img10}" alt="" />
                    </p>
                    <article class="title">
                      <p class="introduce">
                        华为P30 Pro  挂架版 4K量子点 4+64GB 升降式AI摄像头 视频通话 智慧音响 鸿鹄芯片 智能家居控制
                      </p>
                      <p class="desc">
                        65 英寸 V65 4K量子点挂架版4+64GB 星际黑
                      </p>
                      <p class="sale">分期免息</p>
                    </article>
                    <p class="unit priceMoney">
                      <em>￥</em>
                     <span> 3988 </span>
                    </p>
                    <p class="stock-btn">
                      <a href="javascript:" class="decrease">-</a>
                      <input type="text" value="1" class="btn-num"/>
                      <a href="javascript:" class="add">+</a>
                    </p>
                    <p class="subtotal"><em>￥</em>3988</p>
                    <p class="del">删除</p>
                  </li> 
                    `
                }
                $('#main .wrapper .commodity-data').html(str)
            },
            error:function(){
                console.log(msg);
            }
        })
    }

    return{
        downloadb
    }
})