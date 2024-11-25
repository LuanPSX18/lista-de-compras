const input = document.getElementById('input_item');
const btnSalvar = document.getElementById('salvar_item');

    btnSalvar.addEventListener('click', function() {
    const itemValue = input.value;
    const novoItem = document.createElement('li');
    novoItem.textContent = itemValue;
    document.getElementById('lista-de-tarefas').appendChild(novoItem);
    input.value = ''; 
   });