'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:
function $Promise(executor) {
    if (typeof executor !== 'function') throw new TypeError('executor function')
    this._state = 'pending'
    this._handlerGroups = [];
    executor(this._internalResolve.bind(this), this._internalReject.bind(this) )

}
$Promise.prototype._internalResolve = function (value) {
    if (this._state === 'pending') {
        this._state = 'fulfilled'
        this._value = value
        this._callHandlers()      //invoca al callHandleres
    }    
}


$Promise.prototype._internalReject = function (value) { 
    if (this._state === 'pending') {
        this._state = 'rejected'
        this._value = value
        this._callHandlers() //invoca al callHandleres
    }
}

$Promise.prototype.then = function (successCb, errorCb) {
    if (typeof successCb !== 'function') successCb = false;
    if (typeof errorCb !== 'function') errorCb=false;
    const downstreamPromise = new $Promise(function () {})
    this._handlerGroups.push({successCb, errorCb, downstreamPromise})
    if (this._state !== 'pending') this._callHandlers()
    return downstreamPromise;
}

$Promise.prototype._callHandlers = function () {              //cuando es invocada
 while (this._handlerGroups.length > 0) {                     //se fija si hay handlers en el handlerGroups
    let current = this._handlerGroups.shift()                 //si hay, tomo el primero del arreglo y lo guarda en current
    if (this._state === 'fulfilled') {                        //comprueva si es fulfilled o rejected
        current.successCb && current.successCb(this._value)   //si es fulfilled le pasa el value correspondiente
    }
    else if (this._state === 'rejected') {                    //si es rejected, le pasa el value para la razon de rechazo 
        current.errorCb && current.errorCb(this._value)
    }
 }   
}

$Promise.prototype.catch = function (errorCb) {
    return this.then(null, errorCb)
}

module.exports = $Promise;
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/
