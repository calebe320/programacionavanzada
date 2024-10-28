import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_ELIMINA_FACULTAD = "DELETE FROM facultad WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function eliminaFacultad(id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_ELIMINA_FACULTAD, [id], function(err) {
        if (err) {
            console.log('Error deleting facultad:');
            console.log(err);
        } else {
            console.log(`Facultad con ID ${id} eliminada`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el ID de la facultad a eliminar
rl.question('Introduce el ID de la facultad a eliminar: ', (id) => {
    eliminaFacultad(id);
});
