//Definir variaveis consteantes para uso no codigo 
const btnadd = document.getElementById('btn-add'); 
const tarefa = document.getElementById('tarefa'); 
const taskList= document.getElementById('taskList'); 
const titulo = document.getElementById('titulo');


let nome = prompt("qual seu nome? ")
tarefa.focus();
titulo.innerHTML = `Lista de tarefas: ${nome}`;

//acompanha o evento de click do botão adicionar uma tarefa
btnadd.addEventListener("click",criatarefa);

tarefa.addEventListener('keypress', function(e){
    if(e.key ==='Enter') criatarefa();
})

function criatarefa(){
  if(tarefa.value==""){
    alert("digite o nome da sua tarefa")
  } 
  else{
    const listItem = document.createElement('li')
    listItem.textContent = tarefa.value;
    taskList.appendChild(l)
  
  
  
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

        concluirbutton.addEventListener("click", function(){ 
        listItem.classList.toggle('completed');
    } )

    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonitem');
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirbutton);
    buttonsItem.appendChild(removebutton);

    concluirbutton.addEventListener('click',function(){
        listItem.classList.toggle('completed');

    })

    //apaga input apos envio 
    tarefa.value = '';
    tarefa.focus(); //retorna para o ponto de entrada 
  }
}

 


