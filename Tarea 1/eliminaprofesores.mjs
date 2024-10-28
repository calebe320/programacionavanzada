import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_ELIMINA_PROFESOR = "DELETE FROM profesores WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function eliminaProfesor(id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_ELIMINA_PROFESOR, [id], function(err) {
        if (err) {
            console.log('Error deleting profesor:');
            console.log(err);
        } else {
            console.log(`Profesor con ID ${id} eliminado`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el ID del profesor a eliminar
rl.question('Introduce el ID del profesor a eliminar: ', (id) => {
    eliminaProfesor(id);
});
