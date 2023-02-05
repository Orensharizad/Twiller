const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

async function query(filterBy = { txt: '' }) {
    try {
        const criteria = {
            txt: { $regex: filterBy.txt, $options: 'i' }
        }
        const collection = await dbService.getCollection('comment')
        var comments = await collection.find(criteria).toArray()
        return comments
    } catch (err) {
        logger.error('cannot find comments', err)
        throw err
    }
}

async function getById(commentId) {
    try {
        const collection = await dbService.getCollection('comment')
        const comment = collection.findOne({ _id: ObjectId(commentId) })
        return comment
    } catch (err) {
        logger.error(`while finding comment ${commentId}`, err)
        throw err
    }
}

async function remove(commentId) {
    try {
        const collection = await dbService.getCollection('comment')
        await collection.deleteOne({ _id: ObjectId(commentId) })
        return commentId
    } catch (err) {
        logger.error(`cannot remove comment ${commentId}`, err)
        throw err
    }
}

async function add(comment) {
    try {
        const collection = await dbService.getCollection('comment')
        await collection.insertOne(comment)
        return comment
    } catch (err) {
        logger.error('cannot insert comment', err)
        throw err
    }
}

async function update(comment) {
    try {
        const commentToSave = {
            email: comment.email,
            txt: comment.txt
        }
        const collection = await dbService.getCollection('comment')
        await collection.updateOne({ _id: ObjectId(comment._id) }, { $set: commentToSave })
        return comment
    } catch (err) {
        throw err
    }
}


module.exports = {
    remove,
    query,
    getById,
    add,
    update,

}
