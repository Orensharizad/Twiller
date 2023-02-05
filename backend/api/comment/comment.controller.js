const commentService = require('./comment.service.js')

const logger = require('../../services/logger.service')

async function getComments(req, res) {
  try {
    logger.debug('Getting Comments')
    const filterBy = {
      email: req.query.email || ''
    }
    const comments = await commentService.query(filterBy)
    res.json(comments)
  } catch (err) {
    logger.error('Failed to get comments', err)
    res.status(500).send({ err: 'Failed to get comments' })
  }
}

async function getCommentById(req, res) {
  try {
    const commentId = req.params.id
    const comment = await commentService.getById(commentId)
    res.json(comment)
  } catch (err) {
    logger.error('Failed to get comment', err)
    res.status(500).send({ err: 'Failed to get comment' })
  }
}

async function addComment(req, res) {
  const { loggedinUser } = req

  try {
    const comment = req.body
    // comment.owner = loggedinUser
    const addedComment = await commentService.add(comment)
    res.json(addedComment)
  } catch (err) {
    logger.error('Failed to add comment', err)
    res.status(500).send({ err: 'Failed to add comment' })
  }
}


async function updateComment(req, res) {
  try {
    const comment = req.body
    const updatedComment = await commentService.update(comment)
    res.json(updatedComment)
  } catch (err) {
    logger.error('Failed to update comment', err)
    res.status(500).send({ err: 'Failed to update comment' })

  }
}

async function removeComment(req, res) {
  try {
    const commentId = req.params.id
    const removedId = await commentService.remove(commentId)
    res.send(removedId)
  } catch (err) {
    logger.error('Failed to remove comment', err)
    res.status(500).send({ err: 'Failed to remove comment' })
  }
}


module.exports = {
  getComments,
  getCommentById,
  addComment,
  updateComment,
  removeComment

}
