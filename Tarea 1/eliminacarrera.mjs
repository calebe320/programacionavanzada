import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_ELIMINA_CARRERA = "DELETE FROM carrera WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function eliminaCarrera(id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_ELIMINA_CARRERA, [id], function(err) {
        if (err) {
            console.log('Error deleting carrera:');
            console.log(err);
        } else {
            console.log(`Carrera con ID ${id} eliminada`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el ID de la carrera a eliminar
rl.question('Introduce el ID de la carrera a eliminar: ', (id) => {
    eliminaCarrera(id);
});
