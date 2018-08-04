var mysql=require('mysql');
var conex=mysql.createConnection({
'host':'localhost',
'user':'root',
'pasword':'',
'database':'prueba'
});
conex.connect(function (error){
if(error) throw error;
console.log("Conexion establecida!!!");
})