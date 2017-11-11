import * as db from '../DataBase/DataBase'
var RiversArray = []
for (var key in db) {
    console.log(db[key])
    
    RiversArray.push(db[key])

  // if(db[key].area === "AL"){
  //     RiversArray.push(db[key].title)
  // }
 }