import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_ELIMINA_ALUMNO = "DELETE FROM alumno WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function eliminaAlumno(id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_ELIMINA_ALUMNO, [id], function(err) {
        if (err) {
            console.log('Error deleting alumno:');
            console.log(err);
        } else {
            console.log(`Alumno con ID ${id} eliminado`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el ID del alumno a eliminar
rl.question('Introduce el ID del alumno a eliminar: ', (id) => {
    eliminaAlumno(id);
});
