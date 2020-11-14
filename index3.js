define(["scale","parabola","jquery","jquery-cookie"],function(scale,parabola,$){
    function downloada(){
        $.ajax({
            type:"get",
            url:"../data/data3.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){

                    str +=`
                     <div class="ccontent">
                    <div class="ccleft">
                        <div class="ccltop">
                            <a href=""><img src="./images/ia_100006116.jpg" alt="" class="active"></a>
                            <a href=""><img src="./images/ia_100006130.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006135.png" alt="" ></a>
                            <a href=""><img src="./images/ia_100006148.png" alt=""></a>
                            <a href=""><img src="./images/ia_100000089.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006248.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006254.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006221.png" alt=""></a>
        
                            <div id="mark"></div>
                            
                        </div>
                        <div class="big">
                            <a href=""><img src="./images/ia_100006118.jpg" alt="" class="active"></a>
                            <a href=""><img src="./images/ia_100006130.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006135.png" alt="" ></a>
                            <a href=""><img src="./images/ia_100006148.png" alt=""></a>
                            <a href=""><img src="./images/ia_100000089.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006248.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006254.png" alt=""></a>
                            <a href=""><img src="./images/ia_100006221.png" alt=""></a>
                            
                        </div>
                        <div class="cclbottom">
                            <a href="javascript:" class="cclbljian"></a>
                            <div class="imgcenter">
                                <ul id="m">
                                    <li class="active"><a href="javascript:"><img src="./images/ia_100000090.jpg" alt=""></a></li>
                                    <li><a href="javascript:"><img src="./images/ia_100000091.png" alt=""></a></li>
                                    <li><a href="javascript:"><img src="./images/ia_100000092.png" alt=""></a></li>
                                    <li><a href="javascript:"><img src="./images/ia_100000093.png" alt=""></a></li>
                                    <li><a href="javascript:"><img src="./images/ia_100000094.png" alt=""></a></li>
                                    <li id="n"><a href="javascript:"><img src="./images/ia_100000095.png" alt=""></a></li>
                                     <li><a href="javascript:"><img src="./images/ia_100000096.png" alt=""></a></li>
                                    <li><a href="javascript:"><img src="./images/ia_100000097.png" alt=""></a></li>
                                </ul>
                            </div>
                            <a href="javascript:" class="cclbRjian">
                                
                            </a>
                        </div>
                    </div>
        
                     <aside class="mian-right-info">
                        <h2>荣耀30 Pro 50倍超稳远摄 超感光高清夜拍 双模5G 麒麟990 5G SoC 8GB+128GB 太空银 </h2>
                        <p class="right-title">
                          <span>
                            【超级11.11特惠】①赠荣耀经典耳机②享12期免息③限量赠移动电源④下单使用5000以内积分可双倍抵现⑤支付晒单抽好礼！订金预订用户点击到>>>“我的订单”界面支付尾款，截止时间11号23:59                  
                        </span>
                        </p>
                        <div class="right-info">
                          <div class="info1">
                            <p>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</p>
                            <em>¥</em><span>3999.00</span>
                          </div>
                          <div class="info2">
                            <p>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销</p>
                            <div>
                              <div class="info2-right">
                                <i>赠品</i>
                                <div><i>赠送积分</i>购买即赠商城积分，积分可抵现~</div>
                                <div><i>赠送积分</i>购买即赠商城积分，积分可抵现~</div>
                                <div><i>赠送积分</i>购买即赠商城积分，积分可抵现~</div>
                                <div><i>赠送积分</i>购买即赠商城积分，积分可抵现~</div>
                              </div>
                            </div>
                          </div>
                          <div class="info3">
                            <p>服务说明</p>
                            <ul>
                              <li>已满48元已免运费</li>
                              <li>由华为商城负责发货，并提供售后服务</li>
                            </ul>
                          </div>
                          <div class="info4">
                            <p>商品编码</p>
                            <ul>
                              <li>2601010181301</li>
                            </ul>
                          </div>
                          <hr />
                          <div class="info5">
                            <p>选择颜色</p>
                            <ul>
                              <li>星际蓝</li>
                            </ul>
                          </div>
                          <div class="info6">
                            <p>选择版本</p>
                            <ul>
                              <li>5G全网通 8GB+512GB</li>
                            </ul>
                          </div>
                          <div class="info7">
                            <p>选择套餐</p>
                            <ul>
                              <li>官方标配</li>
                            </ul>
                          </div>
                          <div class="purchase">
                            <input type="text" value="1" placeholder="1" />
                            <p>
                              <button href="javascript:;" class="add">+</button>
                              <button href="javascript:;" class="reduce">-</button>
                            </p>
                            <button
                            id="${arr[i].id}"
                              class="car"
                              type="button"
                              data-toggle="modal"
                              data-target="#myModal"
                            >
                              立即加入购物车
                            </button>
                            <button class="order">立即下单</button>
                          </div>
                        </div>
                      </aside>
            
                </div> `
                
                }
                $(".content").html(str);
            scale.scale();
            scale.move();
            scale.blocka();
            // scale.onload();
            scale.sum();
            },
            error:function(){
                console.log(msg);
            }
        })
    }

    return{
        downloada
    }

})