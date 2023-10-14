require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
  inquirerMenu,
  pausa,
  leerInput,
  listadoTareasBorrar,
  confirmar, 
  mostrarListadoChecklist
} = require('./helpers/inquirer')
const Tareas = require('./models/tareas')

console.clear();

const main = async () => {

  let opt = ''
  const tareas = new Tareas();

  const tareasDB = leerDB()
  if (tareasDB) {
    tareas.cargasTareasFromArray(tareasDB)
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        // crear opcion
        const desc = await leerInput('Descripcion:')
        tareas.crearTarea(desc)

        break;
      case '2':
        // listar opciones
        tareas.listadoCompleto()
        break; 1
      case '3':
        // listar completadas
        tareas.listarPendientesCompletadas(true)
        break;
      case '4':
        // listar pendientes
        tareas.listarPendientesCompletadas(false)
        break;

      case '5':
        // completado | pendiente
        const ids = await mostrarListadoChecklist(tareas.listadoArr)
        tareas.toggleCompletadas(ids)
        break;
      case '6':
        // borrar
        const id = await listadoTareasBorrar(tareas.listadoArr)
        if (id !== '0') {
          const ok = await confirmar('¿Estas seguro?')
          if (ok) {
            tareas.borrartarea(id)
            console.log('Tarea borrada')
          }
        }
        break;
    }
    guardarDB(tareas.listadoArr)
    await pausa()
  } while (opt !== '0');
}

main()

