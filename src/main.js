import combinado from './functions/arrayCombination.js'
import fUtils from './functions/fileFunctions.js'
import transform from './functions/arrayTransform.js'

//leo el archivo, guardo y logeo String
const setA = fUtils.leerArchivoComoString('./datosInput/textoDePrueba.input')
console.log('++ Su texto convertido a String es:');
console.log(setA);
//escribo archivo //TRUE crea //FALSE lanza exception
fUtils.escribirTextoEnArchivo('./datosOutput/textoDePrueba.output', setA, true)

// preparo 4 arrays para aparear
const textoIN = '123 | 456 | 789 | 1bc | 10'
const array = transform.transformarStringEnArrayDeNumeros(textoIN, '|')
console.log('++ Su Array es:');
console.log(array);

const textoOUT = transform.transformarArrayDeNumerosAUnSoloString(array, ';')
console.log('++ Su texto es:');
console.log(textoOUT);

const array1 = [1, 5, 8, 10]
const array2 = [2, 3, 8, 11]
const arrayOfArrays = combinado.combinarDosArrays(array1, array2)
console.log('++ Su Array de Arrays es:');
console.log(arrayOfArrays);

const arrays = [[1, 3, 10], [2, 3, 15, 16], [4], [6, 7, 13]]

const arrayOfNArrays = combinado.combinarNArrays(arrays)
console.log('++ Su Array de ' + arrays.length + ' Arrays es:');
console.log(arrayOfNArrays);


// const combinadoComoTexto2 = transform.transformarArrayDeNumerosAUnSoloString(combinado2, ',')


// // combinado simple
// const combinado = apareo.combinarDosArrays(numsA, numsB)
// const combinadoComoTexto = transform.transformarArrayDeNumerosAUnSoloString(combinado, ',')
// fUtils.escribirTextoEnArchivo('./out/combinado.out', combinadoComoTexto, true)

// // armo un array con los 4 arrays que quiero aparear
// const arrs = [numsA, numsB, numsC, numsD]

// // apareo múltiple
// const combinado2 = apareo.combinarNArrays(arrs)
// const combinadoComoTexto2 = transform.transformarArrayDeNumerosAUnSoloString(combinado2, ',')
