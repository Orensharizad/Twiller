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


async function query(filterBy = { txt: '', price: 0 }) {
    var cars = await storageService.query(STORAGE_KEY)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        cars = cars.filter(car => regex.test(car.vendor) || regex.test(car.description))
    }
    if (filterBy.price) {
        cars = cars.filter(car => car.price <= filterBy.price)
    }
    return cars
}

function getById(commentId) {
    return storageService.get(STORAGE_KEY, commentId)
}

async function remove(commentId) {
    // throw new Error('Nope')
    await storageService.remove(STORAGE_KEY, commentId)
}

async function save(comment) {
    var savedComment
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
        imgUrl: '',
        txt: '',
        createdAt: Date.now()
    }
}

_createComments()


function _createComments() {
    console.log('hey')
    let comments = storageService.loadFromStorage(STORAGE_KEY)

    if (!comments) {

        comments = [
            {
                email: 'oren@gmail.com',
                txt: 'hello world',
                imgUrl: 'url(https://robohash.org/oren)'
            },
            {
                email: 'liad@gmail.com',
                txt: 'hello world im liad ',
                imgUrl: 'url(https://robohash.org/liad)'
            },
            {
                email: 'or@gmail.com',
                txt: 'hello world',
                imgUrl: 'url(https://robohash.org/or)'
            },
        ]
        storageService.saveToStorage(STORAGE_KEY, comments)
    }
    console.log('comments:', comments)
    // return comments
}

