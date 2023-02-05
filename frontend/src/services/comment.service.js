
import { httpService } from './http.service.js'
import { utilService } from './util.service.js'

const BASE_URL = 'comment/'

export const commentService = {
    query,
    getById,
    save,
    remove,
    getEmptyComment,
}
window.cs = commentService


async function query(filterBy = { txt: '' }) {
    return httpService.get(BASE_URL, filterBy)
}

async function remove(commentId) {
    return httpService.delete(`comment/${commentId}`)
}

async function save(comment) {
    var savedComment
    if (comment._id) {
        savedComment = await httpService.put(`comment/${comment._id}`, comment)

    } else {
        savedComment = await httpService.post('comment', comment)
    }
    return savedComment
}

function getById(commentId) {
    return httpService.get(`comment/${commentId}`)
}

function getEmptyComment() {
    return {
        email: '',
        imgUrl: 'https://robohash.org/oren',
        txt: '',
    }
}





