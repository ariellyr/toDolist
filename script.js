//Definir variaveis consteantes para uso no codigo 
const btnadd = document.getElementById('btn-add'); 
const tarefa = document.getElementById('tarefa'); 
const taskList= document.getElementById('taskList'); 
const titulo = document.getElementById('titulo');

let nome = prompt("qual seu nome? ")
titulo.innerHTML = `Lista de tarefas: ${nome}`;

//acompanha o evento de click do botão adicionar uma tarefa
btnadd.addEventListener("click", criatarefa);

function criatarefa(){
    const listItem = document.createElement('li');
    listItem.textContent = tarefa.value; 
    taskList.appendChild(listItem);
    
    //botão deletar tarefa
    const removebutton = document.createElement('button');
    removebutton.id ="remove";
    removebutton.textContent = "X";



    removebutton.addEventListener("click", function(){
        taskList.removeChild(listItem);
    })

    //botão concluir tarefa
    const concluirbutton = document.createElement('button');
    concluirbutton.id = "conclui";
    concluirbutton.textContent = "✓";

    let buttonsitem = document.createElement('div');
    buttonsitem.classList.toggle('buttonitem');
    listItem.appendChild(buttonsitem);
    buttonsitem.appendChild(concluirbutton);
    buttonsitem.appendChild(removebutton);

    concluirbutton.addEventListener('click',function(){
        listItem.classList.toggle('completed');

    })







    
}

 


