// /*
// ### 1. Mostrar tareas (3 puntos)

// Lo primero que queremos es que se muestren en consola todas las tareas que tiene 
// pendientes el usuario. O sea, que aún no están terminadas. 
// Ordenarlas por prioridad (Alta, Media, Baja).
// */

// // Definir el tipo de las tareas
// type Tarea = {
//     nombre: string,
//     estado: "en progreso" | "terminadas" | "pendientes",
//     prioridad: 1 | 2 | 3
// };

// // Crear un array de tareas
// // Simulación de tareas
// const tareas: Tarea[] = [
//     { 
//         nombre: "Tarea1",
//         estado: "pendientes",
//         prioridad: 1
//     },
//     { 
//         nombre: "Tarea2",
//         estado: "en progreso",
//         prioridad: 2
//     },
//     { 
//         nombre: "Tarea3",
//         estado: "pendientes",
//         prioridad: 3
//     },
//     { 
//         nombre: "Tarea4",
//         estado: "terminadas",
//         prioridad: 1
//     },
//     { 
//         nombre: "Tarea5",
//         estado: "pendientes",
//         prioridad: 2
//     },
//     { 
//         nombre: "Tarea6",
//         estado: "en progreso",
//         prioridad: 3
//     },
//     { 
//         nombre: "Tarea7",
//         estado: "pendientes",
//         prioridad: 2
//     },
//     { 
//         nombre: "Tarea8",
//         estado: "pendientes",
//         prioridad: 3
//     },{ 
//         nombre: "Tarea9",
//         estado: "pendientes",
//         prioridad: 2
//     },
// ];

// /*

// //EJERCICIO 1

// // Filtré con un for pero lo hice más feliz abajo :)
// /* function tareasPendientes(tareas: Tarea[]) {
//     for(let i = 0; i < tareas.length; i++){
//         if( tareas[i].estado === "pendientes") {
//             console.log(tareas[i].estado);
//         }
//     }

// }

// tareasPendientes(tareas); */

// // Creo un array donde van a estar solo las tareas pendientes (tareasPendientes)
// // Agarro el array de tareas y selecciono las que tienen el estado pendiente
// const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");

// // Ordeno las tareas pendientes según su número de prioridad
// // Ordeno las prioridades de mayor a menor

// // A = 1 B = 2 A - B = -1 NEGATIVO -> a es prioritario (pone a B después que A)
// // A = 2 B = 1 A - B = 1 POSITIVO -> b es prioritario (pone a B antes que a A)
// // A = 3 B = 3 A - B = 0 -> son igual de prioritarios
// const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

// // Muestro las tareas pendientes ordenadas
// console.log(tareasPendientesOrdenadas);



