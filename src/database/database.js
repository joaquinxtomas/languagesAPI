import mysql from "promise-mysql";
import config from "./../config";

const conn = mysql.createConnection({
    host:config.host,
    database:config.database,
    user:config.user
});

function getConn () {
    return conn
}

module.exports = {
    getConn
};