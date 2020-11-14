define(["parabola","jquery","jquery-cookie"],function(parabola,$){
    function downloada(){
        $.ajax({
            type:"get",
            url:"../data/data2.json",
            success:function(arr){
                var str=``;
                for(var i=0;i<arr.length;i++){
                    str +=`
                     <a href="http://localhost:8888/scale.html">
                  <li>
                      <img src="${arr[i].img}" alt="">
                  </li>
                  <p class="listP1">${arr[i].title}</p>
                  <p class="listPrice">
                      <span>${arr[i].price}</span>
                      <span>多款可选</span>
                    </p>
                    <p class="listLabel">
                        <span>限时特价</span>
                        <span>一站式换新</span>
                    </p>
                    <p class="listComment">
                        <span>${arr[i].dese}</span>
                        <span>${arr[i].dest}</span>
                    </p>
                </a> `
                }
                $(".list ul").html(str);
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