$(function() {
    //获取当前的年月日
    var dayTime = document.querySelector('#dayTime')
    var timerId

    function show() {
        var date = new Date(); //日期对象
        var now = "";
        now = date.getFullYear() + "-";
        var month = date.getMonth() + 1
        month = (month < 10 ? '0' + month : month)
        now = now + month + "-";
        var day = date.getDate()
        day = (day < 10 ? '0' + day : day)
        now = now + day;
        dayTime.innerHTML = now;
        timerId = setTimeout("show()", 1000); //设置过1000毫秒就是1秒，调用show方法
    }
    show()

    //日期选择
    mui.init();
    $('#dayTime').on('tap', function() {
        var picker = new mui.DtPicker({
            "type": "date",
            "beginYear": 2010,
            "endYear": 2020
        });
        picker.show(function(rs) {
            clearTimeout(timerId)
            dayTime.innerHTML = rs.text;
            picker.dispose();

        }, false);
        return false
    })
})