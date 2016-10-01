$(function () {
    //1.先解析json数据，将数据存在变量里
    var dataPro = "";
    var dataCity = "";
    var dataCounty = "";
    //获取省份
    var $pro = $("#selectProvince");
    var $city = $("#selectCity");
    var $county = $("#selectCounty");
    var $town=$("#selectTown");
    var cityObj;
    var countyObj;
    $.ajax({
        "type": "GET",
        "url": "select.json",
        "success": function (data) {
            //省份导入
            for (var i = 0; i < data.length; i++) {
                $pro.append($("<option></option>").html(data[i].provinceOption));
            }
            //给省份框注册事件
            $pro.change(function () {
                //存当前的省份值
                $proCurrent = $(this).val();
                //市区初始化
                $city.html("<option>--请选择市--</option>");
                for (var i = 0; i < data.length; i++) {
                    //判断当前省份
                    if (data[i].provinceOption == $(this).val()) {
                        //遍历市区
                        for (var j = 0; j < data[i].city.length; j++) {
                            //市区导入
                            $city.append($("<option></option>").html(data[i].city[j].cityOption));
                        }
                        //存值，并返回当前市区对象
                        cityObj = data[i].city;
                    }
                }
            });
            //给市区下拉框注册事件
            $city.change(function () {
                //县城初始化
                $county.html("<option>--请选择县--</option>");
                for (var i = 0; i < cityObj.length; i++) {
                    if (cityObj[i].cityOption == $(this).val()) {
                        //遍历县
                        for (var j = 0; j < cityObj[i].county.length; j++) {
                            $county.append($("<option></option>").html(cityObj[i].county[j].countyOption));
                        }
                        countyObj=cityObj[i].county;
                    }
                }
            });
            //给县城下拉框注册事件
            //$county.change(function (){
            //    //乡镇初始化
            //    console.log(cityObj);
            //    console.log(countyObj);
            //    $town.html("<option>--请选择乡镇--</option>");
            //    for (var i = 0; i <countyObj.length ; i++) {
            //      //遍历乡镇
            //        if(countyObj[i])
            //        for (var j = 0; j <countyObj[i].town.length ; j++) {
            //            //console.log(countyObj[i].town[j]);
            //        }
            //    }
            //
            //});
            //setTimeout(function (){
            //    console.log(cityObj);
            //    console.log(countyObj);
            //},10000)
           

        }

    });
    //2.设置省份，遍历数组
    //3.注册省份change事件，记录change值，


});