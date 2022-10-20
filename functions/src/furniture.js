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

export async function addNewFurniture(req, res) {
    const {brand, type, condition} = req.body
    const newFurniture = {brand, type, condition }
    const db = dbConnect()
    await db.collection('furniture').insertOne(newFurniture)
    .catch(err=> {
        res.status(500).send(err)
        return
    })
    
    res.status(201).send({message: 'Furniture added'})
    
}