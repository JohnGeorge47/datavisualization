var csv = require('csv-parser');
var fs = require('fs');
var obj = {
  "district_name": [],
  "moi": [],
  "block_name": []
};
var inter = {};
let res = []
fs.createReadStream('primaryschool.csv')
  .pipe(csv())
  .on('data', function(data) {
    obj.district_name.push(data.district_name);
    obj.moi.push(data.moi);
    obj.block_name.push(data.block_name);
  })

  .on('end', function() {
    // We are done
    const average = obj.district_name.reduce((total, amount, index, array) => {
      var n = {};
      n[amount] = obj.moi[index];
      total.push(n);
      return total
    }, []);

    var districts = [];
    obj.district_name.map(function(a) {
      if (districts.indexOf(a) == -1) {
        districts.push(a);
      }
    });

    var moi = [];
    obj.moi.map(function(b) {
      if (moi.indexOf(b) == -1) {
        moi.push(b);
      }
    });
    var rs=[]
    moi.sort(function(a,b){
      return a-b;
    });

    var no=moi.length;
    districts.map(function(currentd){
      var obj1={
        var a=new Array(len).fill;
      name:'',
      languages:[]
        };
      obj1["name"]=currentd;
      for(var eachel of average){
        if(current d in eachel)
        {
          for(i=0;i<no;i++)
          {
            if()
          }
        }
      }


    });

console.log(rs);

});
