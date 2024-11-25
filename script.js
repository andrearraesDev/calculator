// Seleciona o display e todos os botões
const display = document.querySelector("input[name='display']");
const numbers = document.querySelectorAll(".number");
const operatorAC = document.querySelectorAll(".operatorAC");
const operatorDEL = document.querySelectorAll(".operatorDEL");
const operatorDivisao = document.querySelectorAll(".operatorDivisao");
const operatorMultiplicacao = document.querySelectorAll(
  ".operatorMultiplicacao"
);
const operatorSubtracao = document.querySelectorAll(".operatorSubtracao");
const operatorAdicao = document.querySelectorAll(".operatorAdicao");
const numberZeroZero = document.querySelectorAll(".numberZeroZero");
const numberZero = document.querySelectorAll(".numberZero");
const operatorEqual = document.querySelectorAll(".operatorEqual");
const caracterePonto = document.querySelectorAll(".caracterePonto");

// Adiciona um evento de clique a cada botão de número
numbers.forEach((button) => {
  button.onclick = () => {
    display.value += button.value; // Adiciona o valor do botão ao display
  };
});

// Adiciona evento de clique para o botão AC (limpar o display)
operatorAC.forEach((button) => {
  button.onclick = () => {
    display.value = ""; // Limpa o display
  };
});

// Adiciona evento de clique para o botão DEL (apagar o último caractere)
operatorDEL.forEach((button) => {
  button.onclick = () => {
    display.value = display.value.toString().slice(0, -1); // Remove o último caractere
  };
});

// Adiciona evento de clique para o botão de divisão
operatorDivisao.forEach((button) => {
  button.onclick = () => {
    display.value += "/"; // Adiciona o símbolo de divisão ao display
  };
});

// Adiciona evento de clique para o botão de multiplicação
operatorMultiplicacao.forEach((button) => {
  button.onclick = () => {
    display.value += "*"; // Adiciona o símbolo de multiplicação ao display
  };
});

// Adiciona evento de clique para o botão de subtração
operatorSubtracao.forEach((button) => {
  button.onclick = () => {
    display.value += "-"; // Adiciona o símbolo de subtração ao display
  };
});

// Adiciona evento de clique para o botão de adição
operatorAdicao.forEach((button) => {
  button.onclick = () => {
    display.value += "+"; // Adiciona o símbolo de adição ao display
  };
});

// Adiciona evento de clique para o botão "00"
numberZeroZero.forEach((button) => {
  button.onclick = () => {
    display.value += "00"; // Adiciona "00" ao display
  };
});

// Adiciona evento de clique para o botão "0"
numberZero.forEach((button) => {
  button.onclick = () => {
    display.value += "0"; // Adiciona "0" ao display
  };
});

// Adiciona evento de clique para o botão ponto
caracterePonto.forEach((button) => {
  button.onclick = () => {
    display.value += "."; // Adiciona o ponto ao display
  };
});

// Adiciona evento de clique para o botão de igual (calcular a expressão)
operatorEqual.forEach((button) => {
  button.onclick = () => {
    try {
      display.value = eval(display.value); // Calcula a expressão no display
    } catch (error) {
      display.value = "Erro"; // Exibe erro caso a expressão seja inválida
    }
  };
});

let getedResult = false;
const equalButton = document.getElementById("equal");
const buttons = document.querySelectorAll("input[type=button]");

buttons.forEach((myButton) => {
  myButton.addEventListener("click", () => {
    if (myButton.value == "=") {
      getedResult = true;
    } else if (
      myButton.value != "=" &&
      getedResult == true &&
      display.value != ""
    ) {
      display.value = myButton.value;
      getedResult = false;
    }
  });
});
