var path = require('path');

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite
var sequelize = new Sequelize(null, null, null,
						{dialect: "sqlite", storage: "quiz.sqlite"}
					);

// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz; // exportar definición de tabla Quiz

// sequelize.sync() crea e inicializa la tabla de preguntas en DB
sequelize.sync().success(function() {
	//success(...) ejecuta el manejador una vez creada la tabla
	Quiz.count().success(function(count) {
		if (count === 0) { // La tabla se inicializa solo si esta vacia
			Quiz.create({ pregunta: 'Capital de Italia',
						  respuesta: 'Roma'
						})
			.success(function() {console.log('Base de datos inicializada')});
		};
	});
});