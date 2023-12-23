import app from "./app"
import db from "./database/database";

(async () => {
    try {
        await db.authenticate();
        await db.sync();
        console.log("EXITO")
    } catch (error) {
        throw new Error(error)
    }
})()


function main() {
    app.listen(app.get("port"))
    console.log(`server on port ${app.get("port")}`)
};

main();