var csv = require('csv-parser');
var fs= require('fs');
var obj={
    "district_name":[],
    "moi":[],
    "block_name":[]
};
let res=[]
fs.createReadStream('primaryschool.csv')
  .pipe(csv())
  .on('data', function (data) {
    obj.district_name.push(data.district_name);
    obj.moi.push(data.moi);
    obj.block_name.push(data.block_name);
  })
  .on('end', function () {
    // We are done


    var districts= obj.district_name.reduce(function(total,district){
       total[district] = (total[district] || 0) + 1 ;
        return total;

    },{});
     var block= obj.block_name.reduce(function(total,block){
       total[block] = (total[block] || 0) + 1 ;
        return total;

    },{});
      var moi= obj.moi.reduce(function(total,mo){
       total[mo] = (total[mo] || 0) + 1 ;
        return total;

    },{});
      console.log(moi);
      // var chart={
     var chart=   {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Number of schools per district in Karnataka'
    },
    subtitle: {
        text: 'Source: Some org'
    },
    xAxis: {
        categories: [],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Rainfall (mm)'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Karnataka',
        data: []
    }]
};

      // var n=Object.keys(districts);
      // console.log(n);
      // for(var i in districts)
      // {
      //   chart.xAxis.categories.push(i);
      //   chart.series[0].data.push(districts[i]);

      // }
      // var json=JSON.stringify(chart);
      // var fs = require('fs');
      // fs.writeFile('myjsonfile.json', json, 'utf8');

});


// var dat;
// var districts = [];
// var blocks = [];
// var moi = [];
// var districtnames = [];

// fs.readFile('primaryschool.csv', 'utf8', function(err, data) {

// if (err) {
//   return console.log(err);
// }
// var parse = require('csv-parse');
// require('should');

// var output = [];

// });


