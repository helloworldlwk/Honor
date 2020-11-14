console.log('加载成功嘿');
/*
    配置要引入的模块路径
*/
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "shop":"shop"
    },

    //jquery-cookie,是依赖于jquery开发的
    shim:{
        //设置依赖关系
        "jquery-cookie":['jquery'],
    }

})


require(['shop'],function(shop){    
    shop.shop()
})