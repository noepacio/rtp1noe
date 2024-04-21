// namespace ej4 {
//     /* Los inversores rompieron la base de datos metiendo cualquier texto 
//     en el campo de nombre de persona. Necesitamos una función que valide 
//     si un texto es un nombre de persona válido o no. Por ahora solo aceptemos 
//     que se escriba el nombre o el nombre y apellido.
//      */

//     // Hago una función con un parámetro de texto que va a ser un string
//     // Y me va a devolver un valor booleano
//     function esNombrePersonaValido(texto: string): boolean {
//         // Expresión regular para validar solo letras y espacios
//         const regex = /[A-Za-z\s]+$/;
    
//         // Verificar si el texto coincide con la expresión regular
//         return regex.test(texto);
//     }
    
//     // Ejemplo de uso
//     const nombre1 = "John"; // válido
//     const nombre2 = "John Smith "; // válido
//     const nombre3 = "John123"; // inválido
//     const nombre4 = "John Smith123"; // inválido
    
//     console.log(esNombrePersonaValido(nombre1)); // true
//     console.log(esNombrePersonaValido(nombre2)); // true
//     console.log(esNombrePersonaValido(nombre3)); // false
//     console.log(esNombrePersonaValido(nombre4)); // false
    

// }