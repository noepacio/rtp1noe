// /*
// ### 6. Descripción (2 puntos)

// Los usuarios de nuestra beta necesitan más información para terminar cada tarea. 
// Están pidiendo poder agregar o un campo de información o que puedan adjuntar un archivo. 
// Como no nos decidimos, vamos a permitirles que puedan cargar alguno de los dos.

// Mostrar de vuelta las tareas como en el punto 1. Si una tarea tiene la descripción en forma 
// de campo de texto, mostrar esa descripción. Si tiene un archivo, mostrar un mensaje informando la ruta del mismo.

// */

// type Tarea = {
//     nombre: string,
//     estado: "en progreso" | "terminadas" | "pendientes",
//     prioridad: 1 | 2 | 3,
//     descripcion?: string,
//     archivo?: string
// };

// // Simulo las tareas
// const tareas: Tarea[] = [
//     { 
//         nombre: "Tarea1",
//         estado: "pendientes",
//         prioridad: 1,
//         descripcion: "La tarea 1"
//     },
//     { 
//         nombre: "Tarea2",
//         estado: "en progreso",
//         prioridad: 2,
//         descripcion: "La tarea 2"
//     },
//     { 
//         nombre: "Tarea3",
//         estado: "pendientes",
//         prioridad: 3,
//         archivo: "../tarea3.jpg"
//     },
//     { 
//         nombre: "Tarea4",
//         estado: "terminadas",
//         prioridad: 1,
//         archivo: "../tarea4.jpg"
//     },
//     { 
//         nombre: "Tarea5",
//         estado: "pendientes",
//         prioridad: 2,
//         archivo: "../tarea5.png"
//     },
//     { 
//         nombre: "Tarea6",
//         estado: "en progreso",
//         prioridad: 3,
//         descripcion: "La tarea 6"
//     },
//     { 
//         nombre: "Tarea7",
//         estado: "pendientes",
//         prioridad: 2,
//         archivo: "../tarea7.jpg"
//     },
//     { 
//         nombre: "Tarea8",
//         estado: "pendientes",
//         prioridad: 3,
//         descripcion: "La tarea 8"
//     },{ 
//         nombre: "Tarea9",
//         estado: "pendientes",
//         prioridad: 2,
//         archivo: "../tarea9.png"
//     },
// ];

// // Como en el punto 1, filtro solo las pendientes
// const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");

// // Como en el punto 1, ordeno según la prioridad
// const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

// // Hago una función con el parámetro de tareasPendientesOrdenadas, y va a devolver un type Tarea
// function tareasYDescripcion (tareasPendientesOrdenadas: Tarea[]){
// // Hago un for para pasar por cada tarea pendiente ordenada
// for (let i = 0; i < tareasPendientesOrdenadas.length; i++) {
//     // Guardo cada tarea en una const
//     const tarea = tareasPendientesOrdenadas[i];
//     // Si existe una descripción de tarea, mostrarla
//     if(tarea.descripcion){
//         console.log(`${tarea.nombre}: ${tarea.descripcion}`);
//     }
//     // Si existe un archivo, mostrar la ruta
//     else if (tarea.archivo){
//         console.log(`${tarea.nombre}: La ruta del archivo es ${tarea.archivo}`); 
//     }  
// }
// } 

// // Llamo a la función
// tareasYDescripcion(tareasPendientesOrdenadas);