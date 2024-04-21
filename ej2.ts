//  /*  2. Consulta a la API (1 punto)
    
//     Los inversores se quejan que las tareas tardan mucho en cargarse. 
//     Necesitamos adaptar el código anterior para que la carga se muestre de forma asíncrona.
    
//     Asumí que existe una función que devuelve el listado de tareas después de 3 segundos. 
//     Podés usar el ejemplo que hicimos en clase.
    
//     */
   
//     type Tarea = {
//             nombre: string,
//             estado: "en progreso" | "terminadas" | "pendientes",
//             prioridad: 1 | 2 | 3
//         };

//     // Hago una función asíncrona que se llama obtenerTareas que me devuelve una promesa 
//     // Esa promesa se resuelve con un array de tareas
//     // Esta función no va a ejecutarse hasta que se cumpla la promesa
//     async function obtenerTareas(): Promise<Tarea[]> {
//         // Simulamos la carga de tareas durante 3 segundos
//         // Await -> se va a detener la función hasta que la promesa esté resuelta
//         await new Promise(resolve => setTimeout(resolve, 3000));
    
//         // Creamos un array de tareas simulado
//         const tareas: Tarea[] = [
//             { 
//                 nombre: "Tarea1",
//                 estado: "pendientes",
//                 prioridad: 1
//             },
//             { 
//                 nombre: "Tarea2",
//                 estado: "en progreso",
//                 prioridad: 2
//             },
//             { 
//                 nombre: "Tarea3",
//                 estado: "pendientes",
//                 prioridad: 3
//             },
//             { 
//                 nombre: "Tarea4",
//                 estado: "terminadas",
//                 prioridad: 1
//             },
//             { 
//                 nombre: "Tarea5",
//                 estado: "pendientes",
//                 prioridad: 2
//             },
//             { 
//                 nombre: "Tarea6",
//                 estado: "en progreso",
//                 prioridad: 3
//             },
//             { 
//                 nombre: "Tarea7",
//                 estado: "pendientes",
//                 prioridad: 2
//             },
//             { 
//                 nombre: "Tarea8",
//                 estado: "pendientes",
//                 prioridad: 3
//             },
//             { 
//                 nombre: "Tarea9",
//                 estado: "pendientes",
//                 prioridad: 2
//             },
//         ];
    
//         return tareas;
//     }
    
//     async function mostrarTareasPendientesOrdenadas() {
//         console.log("Obteniendo tareas...");
    
//         // Hace obtenerTareas y cuando se cumpla, almacenalo en esta constante
//         const tareas = await obtenerTareas();
        
//         // Hago lo mismo que en el punto 1
//         const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
        
//         const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => a.prioridad - b.prioridad);

//         return tareasPendientesOrdenadas;
//     }

//     // Cuando la promesa del mostrarTareasPendientesOrdenadas se resuelva, mostralo en consola
//     mostrarTareasPendientesOrdenadas()
//         .then(tareas => console.log(tareas));


//     /*
//     async function ordenarTareasAsync() {
//         const tareasPendientes = tareas.filter(tarea => tarea.estado === "pendientes");
//         const tareasPendientesOrdenadas = await ordenarTareasPendientes(tareasPendientes);
//         console.log(tareasPendientesOrdenadas);
//     }
    
//     async function ordenarTareasPendientes(tareasPendientes: Tarea[]): Promise<Tarea[]> {
//         return new Promise((resolve, reject) => {
//             const tareasPendientesOrdenadas = tareasPendientes.sort((a, b) => {
//                 // Si las prioridades son diferentes, ordena por prioridad
//                 if (a.prioridad !== b.prioridad) {
//                     return a.prioridad - b.prioridad;
//                 }
//                 // Si las prioridades son iguales, ordena por nombre
//                 return a.nombre.localeCompare(b.nombre);
//             });
//             resolve(tareasPendientesOrdenadas);
//         });
//     }
    
//     ordenarTareasAsync();
//     */
    