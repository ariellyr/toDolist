//Definir variaveis consteantes para uso no codigo 
const btnadd = document.getElementById('btn-add'); 
const tarefa = document.getElementById('tarefa'); 
const tasklist= document.getElementById('tasklist'); 
const titulo = document.getElementById('titulo')

let nome = prompt("qual seu nome? ")
titulo.innerHTML = `Lista de tarefas: ${nome}`;

//acompanha o evento de click do botão adicionar uma tarefa
btnadd.addEventListener("click", criatarefa);

function criatarefa(){
    
}

 


