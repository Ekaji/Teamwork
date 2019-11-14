const Pool = require('pg').Pool;
const pool = new Pool({
    user : 'eka',
    host : 'localhost',
    database : 'api',
    password: 'liberty45',
    port : 5432
});

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if(error){
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query('SELECT * FROM users WHERE id = $1',[id], (error, results) => {
        if (error) {
          throw error;
        }
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getUsers,
    getUserById
}
