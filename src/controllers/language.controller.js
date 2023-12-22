import { getConn } from "./../database/database"

const getLanguage = async (req, res) => {
    try {
        const connection = await getConn();
        const result = await connection.query("SELECT id, name, programmers FROM languages");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const createLanguage = async (req, res) => {
    try {
        const { id, name, programmers } = req.body

        if (name == undefined || name == "" || programmers == undefined) {
            res.status(400).json({ message: "Bad request. Insert all the fields." })
        }

        const connection = await getConn();

        const result = await connection.query(
            "INSERT INTO languages (id, name, programmers) VALUES (?, ?, ?)",
            [id, name, programmers]
        );

        res.json("The language is created OK")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params

        const connection = await getConn();

        const result = await connection.query(
            "SELECT * FROM languages WHERE id = ?", [id]
        );

        res.json(result[0])
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const updateLanguage = async (req, res) => {
    try {   

        const {id} = req.params;
        const {name, programmers} = req.body;

        if (name == undefined || name == "" || programmers == undefined) {
            res.status(400).json({ message: "Bad request. Insert all the fields." })
        }

        const conecction = await getConn();

        const updateLang = await conecction.query(
            "UPDATE languages SET name = ?, programmers = ? WHERE id = ?", [name, programmers,id]
        )

        res.json("The language is updated")

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params
        const conecction = await getConn();

        const deleteLang = await conecction.query(
            "DELETE FROM languages WHERE id = ?", [id]
        )

        res.json("The language is deleted OK")
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

export const methods = {
    getLanguage,
    createLanguage,
    getById,
    deleteLanguage,
    updateLanguage
};