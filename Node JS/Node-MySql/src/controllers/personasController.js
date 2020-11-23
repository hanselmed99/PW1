const connection = require('../config/connection');

function listar(req, res) {
    if(connection){
        let sql = 'select * from personas';
        connection.query(sql, (err, personas) => {
            if(err){
                res.send(err)
            } else {
                console.log(personas);
                res.json(personas);
            }
        })
    }
}

function getPersona(req, res) {
    if(connection){
        const { id } = req.param;
        let sql = `select * from personas where id= ${connection.escape(id)}`;
        connection.query(sql, (err, persona) => {
            if(err){
                res.json(error);
            } else {
                let mensaje = "";
                if(persona === undefined || persona.length === 0){
                    mensaje = "Persona no encontrada";
                }
                res.json({error: false, data: persona, mensaje: mensaje});
            }
        })
    }
}

function agregar(req, res) {
    if(connection){
        const persona = req.body;

        if(!persona.nombre) {
            return res.status(400).send({error: true, mensaje: "El nombre es obligatorio"});
        }

        let sql = 'insert into personas set ?';
        connection.query(sql, [persona], (err, rows) => {
            if(err){
                res.json(error);
            } else {
                res.json({error: false, data: rows, mensaje: "Persona creada con éxito"})
            }
        })
    }
}

function editar(req, res) {
    if(connection){
        const { id } = req.params;
        const persona = req.body;
        let sql = 'update personas set ? where id = ?';
        connection.query(sql, [persona, id], (err, rows) => {
            if(err){
                res.json(error);
            } else{
                let mensaje = "";
                if(rows.changedRows === 0) {
                    mensaje = "La información es la misma";
                } else {
                    mensaje = "Persona modificada con exito";
                }
                res.json({error: false, data: rows, mensaje});
            }
        })
    }
}

function eliminar(req, res) {
    if(connection) {
        const { id } = req.params;
        let sql = 'delete from personas where id = ?';
        connection.query(sql, [id], (err, rows) => {
            if(err){
                res.json(err);
            } else {
                let mensaje = "";
                if(rows.affetedRows === 0) {
                    mensaje = "Persona no encontrada";
                } else {
                    mensaje = "Persona eliminada con exito";
                }
                res.json({error: false, data: rows, mensaje});
            }
        })
    }
}

module.exports = {
    listar,
    getPersona,
    agregar,
    editar,
    eliminar
}