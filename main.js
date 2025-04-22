const text_tarefa = document.getElementById("input-campo");
const add = document.getElementById("input-tarefa");
const tasklist = document.getElementById("task-list");

add.addEventListener("click", function () {
    if (text_tarefa.value.trim() != "") {
        // Cria o contêiner da tarefa
        const newTask = document.createElement("div");
        newTask.classList.add("tarefa");

        // Cria o texto da tarefa
        const taskText = document.createElement("span");
        taskText.textContent = text_tarefa.value;
        newTask.appendChild(taskText);
        newTask.style.color = "white";
        // Botão "Concluir"
        const botaoConcluir = document.createElement("button");
        botaoConcluir.textContent = "Concluir";
        botaoConcluir.id = "botao-concluir";

        // Botão "Excluir"
        const botaoExcluir = document.createElement("button");
        botaoExcluir.id = "botao-excluir";
        botaoExcluir.textContent = "Apagar";

        // Botão "Editar"
        const botaoEditar = document.createElement("button");
        botaoEditar.id = "botao-editar";
        botaoEditar.textContent = "Editar";

        // Adiciona os botões à tarefa
        newTask.appendChild(botaoExcluir);
        newTask.appendChild(botaoConcluir);
        newTask.appendChild(botaoEditar);

        // Adiciona a nova tarefa à lista
        tasklist.appendChild(newTask);

        // Limpa o campo de input após adicionar a tarefa
        text_tarefa.value = "";

        // Funcionalidade do botão "Concluir"
        botaoConcluir.addEventListener("click", function () {
            newTask.style.backgroundColor = "#d3ffd3";  // Muda o fundo para verde claro
            botaoConcluir.disabled = true;  // Desabilita o botão após ser clicado
            botaoEditar.disabled = true
            newTask.style.color = "black"
        });

        // Funcionalidade do botão "Excluir"
        botaoExcluir.addEventListener("click", function () {
            tasklist.removeChild(newTask);  // Remove a tarefa da lista
        });

        // Funcionalidade do botão "Editar"
        botaoEditar.addEventListener("click", function () {
            // Cria um campo de input para edição
            const inputEdit = document.createElement("input");
            inputEdit.type = "text";
            inputEdit.value = taskText.textContent;  // Preenche o campo com o texto atual da tarefa

            // Substitui o texto da tarefa pelo campo de input
            newTask.replaceChild(inputEdit, taskText);

            // Foca no campo de input para facilitar a edição
            inputEdit.focus();

            // Ação quando pressionar "Enter"
            inputEdit.addEventListener("keydown", function (event) {
                if (event.key === "Enter") {
                    taskText.textContent = inputEdit.value;  // Atualiza o texto da tarefa com o valor do input
                    newTask.replaceChild(taskText, inputEdit);  // Substitui o input pelo novo texto
                }
            });
        });
    } else {
        alert("Por favor, insira uma tarefa!");  // Caso o campo esteja vazio
    }
});
