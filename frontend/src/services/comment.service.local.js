import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'commentDB'
_createComments()

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
}
window.cs = commentService


async function query(filterBy = {}) {
    let comments = await storageService.query(STORAGE_KEY)
    return comments
}

function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function remove(commentId) {
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
        txt: '',
    }
}



function _createComments() {
    let comments = storageService.loadFromStorage(STORAGE_KEY)
    if (!comments) {
        comments = [
            _createComment('oren@gmail.com', 'hello world', 'https://robohash.org/oren'),
            _createComment('liad@gmail.com', 'hello world im liad', 'https://robohash.org/liad'),
            _createComment('or@gmail.com', 'hello world', 'https://robohash.org/or'),
        ]
        storageService.saveToStorage(STORAGE_KEY, comments)
    }
}

function _createComment(email, txt, imgUrl) {
    return {
        _id: utilService.makeId(),
        email,
        txt,
        imgUrl
    }
}

