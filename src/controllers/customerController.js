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
        //console.log(req.body);
        const data = req.body;
        console.log('data => ', data)

        req.getConnection((err, conn) => {
            conn.query('INSERT INTO customer set ?', [data] , (err, filas ) => {

                console.log(filas);

                res.send('works');
            })
        })
    }


module.exports = controller;