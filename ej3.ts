
//     /*
//     ### 3. Asignaciones (2 puntos)

// Ahora los inversores nos piden ver las tareas que tiene asignada cada persona. 
// Así que necesitamos que, dado una persona, se muestren solo sus tareas de igual 
// manera que en el punto 1. ¡OJO: apuntamos a tener millones de tareas en nuestra base de datos!

//     */
// // Definir el tipo de las tareas
// // Se agrega una propiedad al type Tarea, que se llama asignadoA que va a ser un string
// type Tarea = {
//     nombre: string,
//     estado: "en progreso" | "terminadas" | "pendientes",
//     prioridad: 1 | 2 | 3,
//     asignadoA: string
// };

// // Simulo un array de tareas
// const tareas: Tarea[] = [
//     { 
//         nombre: "Tarea1",
//         estado: "pendientes",
//         prioridad: 1,
//         asignadoA: "Juan"
//     },
//     { 
//         nombre: "Tarea2",
//         estado: "en progreso",
//         prioridad: 2,
//         asignadoA: "María"
//     },
//     { 
//         nombre: "Tarea3",
//         estado: "pendientes",
//         prioridad: 3,
//         asignadoA: "Juan"
//     }
// ];

// // Función para obtener las tareas de una persona
// // La función recibe el parámetro persona (que es un tipo string)
// // Devuelve un array de tareas
// // function obtenerTareasDePersona(persona: string): Tarea[] {
// //     // Devuelve el array filtrado, se fija en cada tarea cuál asignadoA corresponde
// //     // Al parámetro dado
// //     return tareas.filter(cadaTarea => cadaTarea.asignadoA === persona);
// // }


// // Creo una constante, filtro las tareas por las tareas que tengan 
// // El nombre de Juan en la propiedad asignadoA
// //const tareasDeJuan = tareas.filter(tarea => tarea.asignadoA === "Juan");

// /*

// Invención de Chat GPT:
// const nombreTareaJuan = new Map<string, Tarea[]>();
// const tareasDeJuan = tareas.filter(tarea => tarea.asignadoA === "Juan");
// nombreTareaJuan.set("Juan", tareasDeJuan);
// console.log(nombreTareaJuan);

// */

// // Invención de Noe:

// //
// // Nombre persona y tareas asignadas
// // Necesito un map que vaya por cada persona  
// // const mapPersonas = new Map<string, Tarea[]>();

// // for (let index = 0; index < tareas.length; index++) {
// //     function 
    
// // Crea una función armar mapa que recibe un parámetro de tareas
// // Va a devolver un mapa (que va a tener un string y un tipo tarea)
// function armarMapa(tareas: Tarea[]): Map<string, Tarea[]> {
//     // Crea el mapa (con las claves string y Tarea, nombre de la persona y tareas, respectivamente)
//     const mapa = new Map<string, Tarea[]>();

//     // Recorre el array de tareas
//     for (let i = 0; i < tareas.length; i++) {
//         const tarea = tareas[i];
//         // Si el mapa no tiene a la persona asignada, se la agrega
//         if (!mapa.has(tarea.asignadoA)) {
//             mapa.set(tarea.asignadoA, [tarea]); 
//         // Si el array ya tenía a esa persona asignada, se le agrega otra tarea más
//         } else {
//             // Si recibo una tarea que no está asignada a nadie, es undefined
//             // Por eso se le pone el ?, para evitar ese error 
//             // Si recibo una tarea que no está asignada, igual la va a pushear
//             mapa.get(tarea.asignadoA)?.push(tarea);
//         }
//     }
//     return mapa;
// }

// // Hago una función mostrarTareasDePersona con el parametro nombre(string) 
// // Y tareasAsignadas que es un mapa
// // Va a devolver una tarea o un string (me duevuelve las tareas o que no se encontraron tareas)
// function mostrarTareasDePersona(nombre: string, tareasAsignadas: Map<string, Tarea[]>): Tarea[] | string {
//     // Agarro el nombre que está dentro del mapa y lo guardo en la const
//     const tareas = tareasAsignadas.get(nombre);
//     // Si no hay nadie asignado, o sea es undefined, devuelve el string
//     if (tareas === undefined) {
//         return "No se encontraron tareas para esta persona.";
//     } else {
//         // Devuelve las tareas (asignadas a x persona)
//         return tareas;
//     }
// }

// // Ejemplo de uso
// const nombrePersona = "Juan";
// const tareasAsignadas = armarMapa(tareas);
// const tareasDeJuan = mostrarTareasDePersona(nombrePersona, tareasAsignadas);

// //Si el tipo de tareasDeJuan es un string, que lo muestre
// if (typeof tareasDeJuan === "string") {
//     console.log(tareasDeJuan);
// } else {
//     // Si es un array (tiene más de 1 tarea asignada), va a recorrer todas las tareas y mostrarlas
//     console.log(`Tareas asignadas a ${nombrePersona}:`);
//     for (let i = 0; i < tareasDeJuan.length; i++) {
//         console.log(tareasDeJuan[i].nombre);
//     }
// }

// /*DESDE ACÁ
// // }
// // Crea una función armar mapa que recibe un parámetro de tareas
// // Va a devolver un mapa (que va a tener un string y un tipo tarea)
// function armarMapa(tareas: Tarea[]): Map<string, Tarea[]> {
//     // Crea el mapa (con las claves string y Tarea)
//     const mapa = new Map<string, Tarea[]>();

//     // Recorre el array de tareas
//     for (let i = 0; i < tareas.length; i++) {
//         const tarea = tareas[i];
//         // Si el mapa no tiene a la persona asignada, se la agrega
//         if (!mapa.has(tarea.asignadoA)) {
//             mapa.set(tarea.asignadoA, [tarea]); 
//         // Si el array ya tenía a esa persona asignada, se le agrega otra tarea más
//         } else {
//             // Si recibo una tarea que no está asignada a nadie, es undefined
//             // Por eso se le pone el ?, para evitar ese error 
//             // Si recibo una tarea que no está asignada, igual la va a pushear
//             mapa.get(tarea.asignadoA)?.push(tarea);
//         }
//     }

//     return mapa;
// }

// function mostrarTareaDePersona(nombre: string, personaMap: Map<string, Tarea>): tareaDePersona {
//     const usuario = personaMap.get(nombre);
//     if (usuario === undefined)
//         return { tipo: "no_encontrado" };
//     else

//         return { tipo: "exito", usuario };
// }


// HASTA ACÁ*/
// /*
// // Creo una constante, creo un map que va a recibir un tipo tarea[] y un string
// const nombreTareaJuan = new Map<string, Tarea[]>();

// // Creo otra constante donde van a estar filtradas solo las tareas asignadas a Juan
// const tareasDeJuan = tareas.filter(tarea => tarea.asignadoA === "Juan");

// // Agrego al Map las tareas de Juan, y le agrego un string (porque lo pide el Map), diciéndole que es de Juan
// nombreTareaJuan.set ("Juan", tareasDeJuan);
// console.log("Tareas de Juan: ", nombreTareaJuan);
// */

// // Hago una constante que recibe un string
// // Hago el tareas.map y busco el asignadoA de cada tarea
// //const obtenerTareasDePersona: string[] = tareas.map(cadaTarea => cadaTarea.asignadoA);

// // Creo una constante donde se va a almacenar los datos de las tareas de Juan
// //const nombreTareaDeJuan = tareasDeJuan.map(tarea => tarea.nombre);

// //console.log(nombreTareaDeJuan);

// // Ejemplo de cómo usar la función para obtener las tareas de una persona
// //const tareasDeJuan = obtenerTareasDePersona("Juan");
// //console.log("Tareas de Juan:", tareasDeJuan);

