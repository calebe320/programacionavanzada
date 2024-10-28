import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_CURSO = "INSERT INTO cursos (nombre) VALUES (?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaCurso(nombre) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_CURSO, [nombre], function(err) {
        if (err) {
            console.log('Error inserting curso:');
            console.log(err);
        } else {
            console.log(`Curso insertado con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nombre del curso
rl.question('Introduce el nombre del curso: ', (nombre) => {
    insertaCurso(nombre);
});
