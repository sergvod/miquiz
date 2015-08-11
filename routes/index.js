var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

/* GET Créditos. */
router.get('/author', function(req, res) {
  res.render('author');
});

// Definición de rutas de /quizzes
router.get('/quizzes/', quizController.index);
router.get('/quizzes/:quizId(\\d+)', quizController.show);
router.get('/quizzes/:quizId(\\d+)/answer', quizController.answer);

module.exports = router;
