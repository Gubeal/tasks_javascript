const BotaoConclui = () => {
  const botaoConclui = document.createElement('button');
  botaoConclui.classList.add('check-button');
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener('click', concluirTarefa);
  return botaoConclui;

}

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target;

  const tarefaCompleta = botaoConclui.parentElement; //Pegou o pai do botão o "li"

  tarefaCompleta.classList.toggle('done');
}

export default BotaoConclui;