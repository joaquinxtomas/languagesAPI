import {Language} from "../models/Language";


const getLanguage = async (req, res) => {
    try {
        const languages= await Language.findAll()
        res.json(languages)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const createLanguage = async (req, res) => {
    try {
        const { name, programmers, createdAt, updatedAt} = req.body

        if (name == undefined || name == "" || programmers == undefined) {
            res.status(400).json({ message: "Bad request. Insert all the fields." })
        }

        const createLanguage = await Language.create({name, programmers, createdAt, updatedAt});
        res.json(createLanguage)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const getById = async (req, res) => {
    try {
        const { id } = req.params

        const languages= await Language.findByPk(id)
        res.json(languages)
    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const updateLanguage = async (req, res) => {
    try {   

        const {id} = req.params;
        const {name, programmers, createdAt, updatedAt} = req.body;

        if (name == undefined || name == "" || programmers == undefined) {
            res.status(400).json({ message: "Bad request. Insert all the fields." })
        }

        const updateLang = await Language.update({name,programmers,createdAt, updatedAt}, {where: {id: id}})

        res.json("The language is updated")

    } catch (error) {
        res.status(500);
        res.send(error.message)
    }
}

const deleteLanguage = async (req, res) => {
    try {
        const { id } = req.params

        const deletedLanguage = await Language.destroy({where: {id:id}})

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