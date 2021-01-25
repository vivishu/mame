var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"diegui",
    password:"simplon2020",
});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE simplon_bd", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
