import sqlite3 from 'sqlite3';
import readline from 'readline';

const FILENAME = 'BasePA.s3db';
const SQL_INSERT_ALUMNO = "INSERT INTO alumno (nombre, apellido, anio) VALUES (?, ?, ?);";

// Configurar readline para leer desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function insertaAlumno(nombre, apellidos, anio) {
    const db = new sqlite3.Database(FILENAME);

    db.run(SQL_INSERT_ALUMNO, [nombre, apellidos, anio], function(err) {
        if (err) {
            console.log('Error inserting alumno:');
            console.log(err);
        } else {
            console.log(`Alumno insertado con ID ${this.lastID}`);
        }
        db.close(); // Cierra la conexión
        rl.close(); // Cierra la interfaz de readline
    });
}

// Pregunta al usuario por los datos del alumno
rl.question('Introduce el nombre del alumno: ', (nombre) => {
    rl.question('Introduce los apellidos del alumno: ', (apellidos) => {
        rl.question('Introduce el año del alumno: ', (anio) => {
            insertaAlumno(nombre, apellidos, anio);
        });
    });
});
