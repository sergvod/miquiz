// Controlador para preguntas y respuestas

// GET /quizzes/question
exports.question = function(req, res) {
	res.render('quizzes/question', {pregunta: 'Capital de Italia'});
}

// GET /quizzes/answer
exports.answer = function(req, res) {
	if (req.query.respuesta === 'Roma'){
		res.render('quizzes/answer', {respuesta: 'Bien'});
	} else {
		res.render('quizzes/answer', {respuesta: 'Te equivocaste'});
	}
}
