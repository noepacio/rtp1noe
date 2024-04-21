// /*
// ### 5. Fecha límite (1 punto)

// La forma de ordenar tareas por prioridad no está alcanzando 
// para saber qué hacer a continuación. Ahora queremos que las 
// tareas se muestren de nuevo como en el punto 1, donde las de 
// Alta prioridad aparecen siempre primero. Pero las demás van a, 
// además, tener una fecha límite (deadline) que marca que debe 
// completarse antes de cierto día. Ordenarlas por la fecha límite 
// que tenga cargada esa tarea.

// */

// type Tarea = {
//         nombre: string,
//         estado: "en progreso" | "terminadas" | "pendientes",
//         prioridad: 1 | 2 | 3,
//         fechaLimite: Date
// };

// // Simulación de tareas
// const tareas: Tarea[] = [
//     { 
//         nombre: "Tarea1",
//         estado: "pendientes",
//         prioridad: 1,
//         fechaLimite: new Date("2024-04-13")
//     },
//     { 
//         nombre: "Tarea2",
//         estado: "en progreso",
//         prioridad: 2,
//         fechaLimite: new Date("2024-04-15")
//     },
//     { 
//         nombre: "Tarea3",
//         estado: "pendientes",
//         prioridad: 3,
//         fechaLimite: new Date("2024-04-16")
//     },
//     { 
//         nombre: "Tarea4",
//         estado: "terminadas",
//         prioridad: 1,
//         fechaLimite: new Date("2024-04-11")
//     },
//     { 
//         nombre: "Tarea5",
//         estado: "pendientes",
//         prioridad: 2,
//         fechaLimite: new Date("2024-04-14")
//     },
//     { 
//         nombre: "Tarea6",
//         estado: "en progreso",
//         prioridad: 3,
//         fechaLimite: new Date("2024-04-13")
//     },
//     { 
//         nombre: "Tarea7",
//         estado: "pendientes",
//         prioridad: 2,
//         fechaLimite: new Date("2024-04-15")
//     },
//     { 
//         nombre: "Tarea8",
//         estado: "pendientes",
//         prioridad: 3,
//         fechaLimite: new Date("2024-04-16")
//     },{ 
//         nombre: "Tarea9",
//         estado: "pendientes",
//         prioridad: 2,
//         fechaLimite: new Date("2024-04-13")
//     },
// ];

// // Como en el punto 1, primero filtro las tareas que están pendientes y las guardo en la constante
// const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");

// // Después ordeno las tareas según la prioridad que tengan (1, 2 o 3)
// const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

// // Por último, creo una constante que va a tomar la constante anterior y ordenarla
// // Para ordenarla, toma los parámetros a y b
// // Luego hace la comparación según el día y los ordena
// const tareasSegunFecha = tareasPendientesOrdenadas.sort((a, b) => a.fechaLimite.getTime() - b.fechaLimite.getTime());

// console.log(tareasSegunFecha);