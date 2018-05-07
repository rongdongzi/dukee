$(function() {
    //选择省市区 
    var city_picker = new mui.PopPicker({
        layer: 3
    });
    city_picker.setData(cityData3);
    $("#site").on("tap", function() {
        setTimeout(function() {
            city_picker.show(function(items) {
                if ((items[0] || {}).text == undefined) {
                    (items[0] || {}).text = "";
                } else if ((items[1] || {}).text == undefined) {
                    (items[1] || {}).text = "";
                } else if ((items[2] || {}).text == undefined) {
                    (items[2] || {}).text = "";
                }
                //该ID为接收城市ID字段 
                $("#site").html((items[0] || {}).text + " " + (items[1] || {}).text + " " + (items[2] || {}).text);
            });
        }, 200);
    });
})