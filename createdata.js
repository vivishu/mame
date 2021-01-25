var mysql=require('mysql');//exportation de mysql
var con=mysql.createConnection({//creation de connexion
    host:"localhost",
    user:"diegui",
    password:"simplon2020",
});
con.connect(function(err){
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE simplon_bd", function (err, result) {//creation base de donnee
      if (err) throw err;
      console.log("Database created");
    });
  });
