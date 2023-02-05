const express = require('express')
const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')
const { getComments, getCommentById, addComment, updateComment, removeComment } = require('./comment.controller')
const router = express.Router()


router.get('/', log, getComments)
router.get('/:id', getCommentById)
router.post('/', addComment)
router.put('/:id', updateComment)
router.delete('/:id', removeComment)



module.exports = router