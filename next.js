var csv = require('csv-parser');
var fs = require('fs');
var obj = {
  "district_name": [],
  "cat": [],
  "block_name": []
};
var inter = {};
let res = []
fs.createReadStream('primaryschool.csv')
  .pipe(csv())
  .on('data', function(data) {
    obj.district_name.push(data.district_name);
    obj.cat.push(data.cat);
    obj.block_name.push(data.block_name);
  })

  .on('end', function() {
    // We are done





























    const average = obj.district_name.reduce((total, amount, index, array) => {
      var n = {};
      n[amount] = obj.cat[index];
      total.push(n);
      return total
    }, []);
    var districts = [];
    obj.district_name.map(function(a) {
      if (districts.indexOf(a) == -1) {
        districts.push(a);
      }
    });
     var category=[];
     obj.cat.map(function(ff) {
      if (category.indexOf(ff) == -1) {
        category.push(ff);
      }
    });
     var obj1={};
     districts.map(function(district){
        obj1[district]={};
        category.map(function(cate){
            obj1[district][cate]=0;

        });
      });


      average.map(function(district){
        for(var dist in obj1)
        {
          if(district.hasOwnProperty(dist))
          {


              if(obj1[dist].hasOwnProperty(district[dist]))
              {
                obj1[dist][district[dist]]=obj1[dist][district[dist]]+1;

              }

          }
        }
      });
        console.log(obj1);



   });
