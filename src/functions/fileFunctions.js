import fs from 'fs'

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    try {
        return fs.readFileSync(ruta, 'utf-8')
    } catch (error) {
        throw new Error('ruta invalida')
    }
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta
 * @param {string} texto
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    const existe = fs.existsSync(ruta)
    if (!shouldCreateIfNotExists && !existe) {
        throw new Error('el archivo no existe')
    }
    fs.writeFileSync(ruta, texto)
}

export default {
    leerArchivoComoString,
    escribirTextoEnArchivo,
}