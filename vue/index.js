//实例化对象
var app1 = new Vue({
    el: "#vue-app",
    data:{
        //数据
        message : "Good morning",
        website: "http://www.baidu.com"
    },
    methods :{
        //方法
        sayHello :function (word) {
            return "Good "+word;
        }
    }
});

/*
* el : element 需要获取的根容器，一定是html中的根容器元素
*data:用于数据存储
* methods :用于存储各种方法
* */