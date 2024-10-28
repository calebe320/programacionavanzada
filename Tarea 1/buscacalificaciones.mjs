import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_BUSCA_CALIFICACION = "SELECT * FROM calificaciones WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function buscaCalificaciones(alumnoId) {
    const db = new sqlite3.Database(FILENAME);

    db.all(SQL_BUSCA_CALIFICACION, [alumnoId], (err, result) => {
        if (err) {
            console.log('Error running sql: ' + SQL_BUSCA_CALIFICACION);
            console.log(err);
        } else {
            console.log(`Calificaciones para el alumno con ID ${alumnoId}:`, result);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el ID del alumno
rl.question('Introduce el ID del alumno para buscar sus calificaciones: ', (id) => {
    buscaCalificaciones(id);
});
