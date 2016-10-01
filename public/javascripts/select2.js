///**
// * Created by Administrator on 2016/7/22.
// */
//window.onload = function () {
//
//    //定义全局变量存数据
//    var optionValue = "";
//    var
//    //1、先请求到数据
//        $.ajax({
//        type: "GET",
//        url: "select.json",
//        data: "",
//        success: function (data) {
//            //optionValue存数据
//            optionValue = data;
//            console.log(optionValue);
//            //2.将省份的数据默认布置到页面
//            for (var i = 0; i < optionValue.length; i++) {
//                var option = document.createElement("option");
//                option.innerHTML = optionValue[i].provinceOption;
//                document.getElementById("selectProvince").appendChild(option);
//            }
//        }
//    })
//    document.getElementById("selectProvince").onchange = function () {
//        //3.设置二级联动
//        var selectCity = document.getElementById("selectCity");
//        selectCity.innerHTML = "<option>请选择市</option>"
//        for (var i = 0; i < optionValue.length; i++) {
//            if (optionValue[i].provinceOption == this.value) {
//                //获取市数据
//                for (var j = 0; j < optionValue[i].city.length; j++) {
//                    var cityValue = optionValue[i].city[j].cityOption;
//                    var option = document.createElement("option");
//                    option.innerHTML = cityValue;
//                    selectCity.appendChild(option);
//                }
//            }
//        }
//    };
//
//    //4.设置三级联动
//    document.getElementById("selectCity").onchange = function () {
//        var countyValue = this.value;
//        var selectCounty = document.getElementById("selectCounty");
//        console.log(selectCounty);
//        selectCounty.innerHTML = "<option>请选择县</option>";
//        for (var i = 0; i < optionValue.length; i++) {
//            //获取数据
//            for (var j = 0; j < optionValue[i].city.length; j++) {
//                if (this.value == optionValue[i].city[j].cityOption) {
//                    for (var k = 0; k < optionValue[i].city[j].county.length; k++) {
//                        console.log(optionValue[i].city[j].county[k]);
//                        var option = document.createElement("option");
//                        option.innerHTML = optionValue[i].city[j].county[k].countyOption;
//                        selectCounty.appendChild(option);
//                    }
//                }
//            }
//        }
//    };
//};
