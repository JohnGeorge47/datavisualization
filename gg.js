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
   function compute(current,no){
    console.log(current);
      var a=new Array(no).fill(0);

      average.map(function(name){
          if(name.hasOwnProperty(current)){

                 var g=moi.indexOf(name[current]);
                 if(g!=0)
                 {
                  a[g]++;

                 }
          }
          });
       return a;

   }







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
    var s=[];
    districts.map(function(currentd){
      var obj1={
      name:'',
      languages:0
        };
      obj1["name"]=currentd;
      rs.push(obj1);
      var f=compute(currentd,no);
      console.log(f);



    });



});
