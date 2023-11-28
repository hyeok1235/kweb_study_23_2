const mysql = require('mysql2/promise');

// pool = Connection pool
const pool = mysql.createPool({ 
    host: 'localhost',
    port: 3307,
    user: "kwebuser", 
    password: "kwebpw", 
    database: "kwebdb1",
});
// Before preventing SQL injection
// const runQuery = async sql => {
//     const conn = await pool.getConnection(); 
//     try {
//         const [result] = await conn.query(sql); 
//         return result; // row들의 array OR undefined
//     } finally {
//         conn.release(); 
//     }
// };

const runQuery = async (pstmt, data) => {
    const conn = await pool.getConnection(); 
    try {
        const sql = conn.format(pstmt, data); 
        const [result] = await conn.query(sql); 
        return result;
    } finally {
        conn.release();
    }
};

module.exports = { runQuery };