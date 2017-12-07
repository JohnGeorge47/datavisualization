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

    var g= obj.district_name.reduce(function(total,district){
       total[district] = (total[district] || 0) + 1 ;
        return total;

    },{});
     var i= obj.block_name.reduce(function(total,block){
       total[block] = (total[block] || 0) + 1 ;
        return total;

    },{});
      var n= obj.moi.reduce(function(total,mo){
       total[mo] = (total[mo] || 0) + 1 ;
        return total;

    },{});

    console.log(i);
})


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


