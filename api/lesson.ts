import * as express from 'express';
import Lesson from '../models/lesson';

let router = express.Router();

// router.get('/:id', (req, res) => {
//   Lesson.find(req.params.id)
//   .then((matches) => res.json(matches));
// });

router.get('/', (req, res) => {
  Lesson.find().then((lessons) => res.json(lessons));
});

router.get('/courses/:id/lessons', (req, res) => {
  Lesson.find({courseId: req.params.id})
  .then((matches) => res.json(matches));
});

router.post('/', (req, res) => {
  let newLesson = new Lesson();
  newLesson.courseId = req.body.courseId;
  newLesson.title = req.body.title;
  newLesson.save().then((createdLesson) => res.json(createdLesson));
});

router.get('/:id', (req, res) => {
  Lesson.findById(req.params.id)
  .then((foundLesson) => res.json(foundLesson));
});

router.post('/:id', (req, res) => {
  Lesson.findById(req.body.id).then((foundLesson) => {
    foundLesson.courseId = req.body.courseId;
    foundLesson.title = req.body.title;
    foundLesson.save().then((savedLesson) => res.json(savedLesson));
  });
});

export default router;
