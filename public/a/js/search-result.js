//获取地址栏中用户输入的关键字
// var keyword = getParamsByUrl(location.href, 'keyword');
// console.log(keyword);
var page = 1
    /**
     *  根据用户输入的关键字获取搜索结果
     * 
     *      1.获取到地址栏中用户输入的搜索关键字
     *      2.用关键字去调取搜索接口
     *      3.将搜索结果展示在页面中
     */
    // function getParamsByUrl(url,name) { 
    //     var params = url.substr(url.indexof('?')+1);
    //     console(params);
    //     var param = params.split('&');

    //     for(var i = 0; i < param.length; i++){
            
    //         var current = param[i].split('=');

    //         if(current[0] == name){

    //             return current[1];

    //         }
    //     }

    //     return null;

    //  }
function getData () { 
    if(!This) {
        This = this;
    }
    $.ajax({
        url: '/product/queryProduct',
        type: 'get',
        data: {
            page: page++,
            pageSize: 3,
            proName: keyword,
            price:  priceSort
        },
        success: function(response){
            
        }
    })
 }