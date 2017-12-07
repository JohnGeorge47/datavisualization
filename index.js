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
    console.log(obj);
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


