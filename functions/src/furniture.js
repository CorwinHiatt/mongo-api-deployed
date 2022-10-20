import dbConnect from "./dbConnect.js";

export async function getAllFurniture(req, res) {
    const db = dbConnect()
    const collection = await db.collection("furniture").find().toArray()
        .catch(err => {
            res.status(500).send(err)
            return
        })
    res.send(collection)
}