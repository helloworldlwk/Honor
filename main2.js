console.log('加载成功2')
/*
配置要引入的模块路径

*/ 
require.config({
    paths:{
        'jquery':'jquery-1.11.3',
        'jquery-cookie':'jquery.cookie',
        parabola:'parabola',
        index:'index2',
    },
    //jquery-cookie,是依赖于jquery开发的
    shim:{
        //设置依赖关系
        'jquery-cookie':['jquery'],
        //parabola不遵从AMD规范
        parabola:{
            exports:"_"
        }
    }
})

require(['index'],function(index){
    index.downloada()
})