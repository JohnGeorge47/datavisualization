console.log("test")
$(document).ready(function(){


    $.ajax({
       type: "GET",
       url :"myjsonfile.json",
       success:function(data)
       {
         console.log(data);
         Highcharts.chart('container', data);



       },
       dataType:"json",
    });
    $.ajax({
       type: "GET",
       url :"nextjsonfile.json",
       success:function(data)
       {
         console.log(data);
         Highcharts.chart('container2', data);



       },
       dataType:"json",
    });
     $.ajax({
       type: "GET",
       url :"category.json",
       success:function(data)
       {
         console.log(data);
         Highcharts.chart('container3', data);



       },
       dataType:"json",
    });





});
