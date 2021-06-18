const controller = {};

// listado
controller.list = (req, res) => {
    // pide una conexion a mysql
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, clientes) => {
            // si hay un error en la consulta lo muestro por el navegador
            if(err) res.json(err);

            // si la consulta es exitosa
            //console.log(clientes);
            res.render('customers', { 
                data: clientes
             });
        } )
    } 
    )}

    // agregar cliente
    controller.save = (req, res) => {
        const data = req.body;
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO customer set ?', [data] , (err, filas ) => {
                res.redirect('/');
            })
        })
    }



     // edit  
     controller.edit = (req, res) => { 
        const { id } = req.params;
        
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM customer WHERE id = ?', [id] , (err, cliente ) => {
                if(err) res.json(err);
                res.render('customers-edit', { 
                    data: cliente[0]
                 });
            })
        })
    }


    // actualizar  
    controller.actualizar = (req, res) => { 
        const { id } = req.params;
        const newDataClient = req.body;

        req.getConnection((err, conn) => {
            conn.query('UPDATE customer set ? WHERE id = ?', [ newDataClient , id ] , (err, cliente ) => {
                if(err) res.json(err);
                res.redirect('/');
            })
        })
    }



    // delete  
    controller.delete = (req, res) => {
        const { id } = req.params;
        
        req.getConnection((err, conn) => {
            conn.query('DELETE FROM customer WHERE id = ?', [id] , (err, filas ) => {
                if(err) res.json(err);
                res.redirect('/');
            })
        })
    }


module.exports = controller;