// Define a data de término da contagem regressiva (10 dias a partir de agora)
// 24 (horas) * 60 (minutos) * 60 (segundos), essa operação forma um dia então basta multiplicar pela quantidade de dias
// desejadas, no caso 10, resultando no valor 864000
// a multiplicação por 1000 é para transoformar o valor em milissegundos que é o pedido no getTime()
var countDownDate = new Date().getTime() + 864000 * 1000;

// Atualiza a contagem regressiva a cada segundo
var x = setInterval(function () {
  // Obtém a data e hora atual
  var now = new Date().getTime();

  // Calcula a diferença entre a data atual e a data de término da contagem regressiva
  var distance = countDownDate - now;

  // Calcula os dias, horas, minutos e segundos restantes
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Atualiza o conteúdo HTML dos elementos correspondentes
  document.getElementById("countdown-day").innerHTML = days;
  document.getElementById("countdown-hours").innerHTML = hours;
  document.getElementById("countdown-minutes").innerHTML = minutes;
  document.getElementById("countdown-seconds").innerHTML = seconds;

  // Verifica se a contagem regressiva chegou a zero
  if (distance < 0) {
    clearInterval(x);
    console.log("Contagem regressiva encerrada!");
  }
}, 1000); // atualiza a cada segundo (1000 ms)
