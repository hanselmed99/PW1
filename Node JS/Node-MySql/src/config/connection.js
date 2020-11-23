const mysql = requiere('mysql');

const objectConnection = {
    "host": "localhost",
    "port": 3306,
    "user": "root",
    "password": 'F@r3v3r99',
    "database": 'crud_node01'
}

const myConn = mysql.createConnection(objectConnection);

myConn.connect((error) => {
    if(error) {
        console.log("Ha ocurrido un error: ", error);
    } else {
        console.log("Base de datos conectada");
    }
})

module.export = myConn;