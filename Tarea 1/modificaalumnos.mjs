import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_MODIFICA_ALUMNO = "UPDATE alumno SET apellido = ? WHERE id = ?;";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function modificaAlumno(apellido, id) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_MODIFICA_ALUMNO, [apellido, id], function(err) {
        if (err) {
            console.log('Error modifying alumno:');
            console.log(err);
        } else {
            console.log(`Alumno con ID ${id} modificado`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por el nuevo apellido y el ID del alumno
rl.question('Introduce el nuevo apellido del alumno: ', (apellido) => {
    rl.question('Introduce el ID del alumno a modificar: ', (id) => {
        modificaAlumno(apellido, id);
    });
});
