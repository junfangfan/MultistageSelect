$(function () {
    //1.先解析json数据，将数据存在变量里
    var dataPro = "";
    var dataCity = "";
    var dataCounty = "";
    //获取省份
    var $pro = $("#selectProvince"),$city = $("#selectCity"),$county = $("#selectCounty"),$town = $("#selectTown"),$village=$("#selectVillage"),$family=$("#selectFamily")
    var cityObj,countyObj,townObj,villageObj;
    $.ajax({
        "type": "GET",
        "url": "http://127.0.0.1:3000/get",
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
                $county.html("<option>--请选择县--</option>");
                $town.html("<option>--请选择乡/镇--</option>");
                $village.html("<option>--请选择社区/村庄--</option>");
                $family.html("<option>--请输入门牌号/户号--</option>");
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
            //给市区框注册事件
            $city.change(function () {
                $county.html("<option>--请选择县--</option>");
                $town.html("<option>--请选择乡/镇--</option>");
                $village.html("<option>--请选择社区/村庄--</option>");
                $family.html("<option>--请输入门牌号/户号--</option>");
                for (var i = 0; i < cityObj.length; i++) {
                    if (cityObj[i].cityOption == $(this).val()) {
                        for (var j = 0; j < cityObj[i].county.length; j++) {
                            $county.append($("<option></option>").html(cityObj[i].county[j].countyOption));
                        }
                        countyObj = cityObj[i].county;
                    }
                }
            });
            //给县城框注册事件
            $county.change(function () {
                $town.html("<option>--请选择乡/镇--</option>");
                $village.html("<option>--请选择社区/村庄--</option>");
                $family.html("<option>--请输入门牌号/户号--</option>");
                for (var i = 0; i < countyObj.length; i++) {
                    if (countyObj[i].countyOption==$(this).val()){
                        for (var j = 0; j < countyObj[i].town.length; j++) {
                            $town.append($("<option></option>").html(countyObj[i].town[j].townOption));
                        }
                        townObj=countyObj[i].town;
                    }
                }
            });
            //给社区村庄框注册事件
            $town.change(function () {
                $village.html("<option>--请选择社区/村庄--</option>");
                $family.html("<option>--请输入门牌号/户号--</option>");
                for (var i = 0; i < townObj.length; i++) {
                    if (townObj[i].townOption==$(this).val()){
                        for (var j = 0; j < townObj[i].village.length; j++) {
                            $village.append($("<option></option>").html(townObj[i].village[j].villageOption));
                        }
                        villageObj=townObj[i].village;
                    }
                }
            });
            //给户框注册事件
            $village.change(function () {
                $family.html("<option>--请输入门牌号/户号--</option>");
                for (var i = 0; i < villageObj.length; i++) {
                    if (villageObj[i].villageOption==$(this).val()){
                        for (var j = 0; j < villageObj[i].family.length; j++) {
                            $family.append($("<option></option>").html(villageObj[i].family[j].familyOption));
                        }
                    }
                }
            });


        }

    });
    //2.设置省份，遍历数组
    //3.注册省份change事件，记录change值，


});