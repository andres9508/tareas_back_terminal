const Tarea = require('./tarea');
/**
 * _listado:
 *     { 'uuid-123123-123123-123123: { id:12, desc:asd, completadoEn: 123123 } },
 * 
 */
class Tareas {
   _listado = {};


   constructor() {
      this._listado = {};

   }

   crearTarea(desc = '') {
      const tarea = new Tarea(desc);
      this._listado[tarea.id] = tarea;
   }
}

module.exports = Tareas;