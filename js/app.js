'use strict'

const mapa = document.querySelector('svg');

const getEstados = function(event){
    const estado = event.target.id.replace("BR-", '');
    
;}

mapa.addEventListener('click', getEstados)