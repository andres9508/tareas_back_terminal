const { resolve } = require('path');

require('colors')

const mostrarMenu=()=>{

  return new Promise(resolve=>{

    console.clear();
    console.log('============================='.green)
    console.log(`    Selecione una opción`.green)
    console.log('=============================\n'.green)
  
    console.log(`${'1.'.green} Crear Tarea`);
    console.log(`${'2.'.green} Listar Tareas`);
    console.log(`${'3.'.green} Listar Tarea completadas`);
    console.log(`${'4.'.green} Listar Tarea pendientes`);
    console.log(`${'5.'.green} Completar tarea(s)`);
    console.log(`${'6.'.green} Borrar tarea(s)`);
    console.log(`${'0.'.green} Salir\n`);
  
    const readLine = require('readline').createInterface({
      input:process.stdin,
      output: process.stdout
  
    })
    readLine.question(`Selecione Una opcion : `,(opcion)=>{
      readLine.close()
      resolve(opcion)
    })
  }) 

  
  
}

const pause =()=>{
  return new Promise(resolve=>{

    const readLine = require('readline').createInterface({
      input:process.stdin,
      output: process.stdout
  
    })
    readLine.question(`Preciona ${'ENTER'.green} para continuar : `,(opcion)=>{
      readLine.close()
      resolve()
    })
  })
}

module.exports={
  mostrarMenu,
  pause
}