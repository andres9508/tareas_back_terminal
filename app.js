require('colors')
const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {
  inquirerMenu,
  pausa,
  leerInput
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
        break;1
      case '3':
        // listar completadas
        tareas.listarPendientesCompletadas(true)
        break;
      case '4':
        // listar pendientes
        tareas.listarPendientesCompletadas(false)
        break;
        
    }
    guardarDB(tareas.listadoArr)
    await pausa()
  } while (opt !== '0');
}

main()

