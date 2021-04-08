const express = require('express');
const router = express.Router();

const Question = require('../../models/question')

router.post('/', (req, res) => {
  const newQuestion = new Question({
    name: req.body.name,
    text: req.body.text,
    repo: req.body.repo,
    live: req.body.live,
  })

  newQuestion.save()
    .then(question => res.json(question))
    .catch(err => res.status(404).json(err))
})

module.exports = router 