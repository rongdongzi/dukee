$(document).ready(function(){
      //选择省市区 
   var picker = new mui.PopPicker({
    layer: 3
});

console.log(document.getElementById('city').value)
picker.setData(cityData3)
$("#city").on("tap", function() {
            setTimeout(function() {
                picker.show(function(items) {
                    if((items[0] || {}).text == undefined) {
                        (items[0] || {}).text = "";
                    } else if((items[1] || {}).text == undefined) {
                        (items[1] || {}).text = "";
                    } else if((items[2] || {}).text == undefined) {
                        (items[2] || {}).text = "";
                    }
let city1= (items[0] || {}).text+'-'+ (items[1] || {}).text+'-'+ (items[2] || {}).text+"&nbsp"+"&nbsp"+"&gt";
if((items[0] || {}).text == (items[1] || {}).text){
    city1=(items[1] || {}).text+'-'+(items[2] || {}).text+"&nbsp"+"&nbsp"+"&gt";
}
if((items[2] || {}).text == ""){
    city1=(items[1] || {}).text+'-'+(items[0] || {}).text+"&nbsp"+"&nbsp"+"&gt";
}
console.log(city1)
 //该ID为接收城市ID字段 
    $("#city").html(city1)
            });
        }, 200);
    });
})