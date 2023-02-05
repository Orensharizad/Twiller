import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'comment'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
}
window.cs = commentService


async function query(filterBy = { }) {
    let comments = await storageService.query(STORAGE_KEY)
    // if (filterBy.txt) {
    //     const regex = new RegExp(filterBy.txt, 'i')
    //     comments = comments.filter(comment => regex.test(comment.vendor) || regex.test(comment.description))
    // }
    // if (filterBy.price) {
    //     comments = comments.filter(comment => comment.price <= filterBy.price)
    // }
    return comments
}

function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function remove(commentId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, commentId)
}

async function save(comment) {
    let savedComment
    if (comment._id) {
        savedComment = await storageService.put(STORAGE_KEY, comment)
    } else {
        savedComment = await storageService.post(STORAGE_KEY, comment)
    }
    return savedComment
}



function getEmptyComment() {
    return {
        email: '',
        // imgUrl: '',
        txt: '',
        // createdAt: Date.now()
    }
}

_createComments()


function _createComments() {
    console.log('hey')
    let comments = storageService.loadFromStorage(STORAGE_KEY)

    if (!comments) {

        comments = [
            {
                _id: utilService.makeId(),
                email: 'oren@gmail.com',
                txt: 'hello world',
                imgUrl: 'url(https://robohash.org/oren)'
            },
            {
                _id: utilService.makeId(),
                email: 'liad@gmail.com',
                txt: 'hello world im liad ',
                imgUrl: 'url(https://robohash.org/liad)'
            },
            {
                _id: utilService.makeId(),
                email: 'or@gmail.com',
                txt: 'hello world',
                imgUrl: 'url(https://robohash.org/or)'
            },
        ]
        storageService.saveToStorage(STORAGE_KEY, comments)
    }
    // return comments
}

