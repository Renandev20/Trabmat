// Calculadora do Teorema de Pitágoras
function calcularHipotenusa() {
    let catetoA = parseFloat(document.getElementById('catetoA').value);
    let catetoB = parseFloat(document.getElementById('catetoB').value);
  
    if (!isNaN(catetoA) && !isNaN(catetoB)) {
      let hipotenusa = Math.sqrt(catetoA * catetoA + catetoB * catetoB);
      document.getElementById('resultadoPitagoras').innerHTML = `A hipotenusa é: ${hipotenusa.toFixed(2)}`;
      document.getElementById('resultadoPitagoras').classList.remove('hidden');
    } else {
      alert('Por favor, insira valores válidos para os catetos.');
    }
  }
  
  // Calculadora de Combinação
  function calcularCombinação() {
    let n = parseInt(document.getElementById('elementos').value);
    let k = parseInt(document.getElementById('escolhas').value);
  
    if (!isNaN(n) && !isNaN(k)) {
      if (k > n) {
        alert('O número de escolhas não pode ser maior que o número total de elementos.');
        return;
      }
  
      let combinacao = calcularFatorial(n) / (calcularFatorial(k) * calcularFatorial(n - k));
      document.getElementById('resultadoCombinacao').innerHTML = `Combinação (${n}, ${k}) = ${combinacao}`;
      document.getElementById('resultadoCombinacao').classList.remove('hidden');
    } else {
      alert('Por favor, insira valores válidos para elementos e escolhas.');
    }
  }
  
  // Função auxiliar para calcular fatorial
  function calcularFatorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  
  // Resolvedor de Cálculos Gerais
  function resolverCalculo() {
    let expressao = document.getElementById('expressao').value;
    
    try {
      let resultado = eval(expressao);
      document.getElementById('resultadoGeral').innerHTML = `Resultado: ${resultado}`;
      document.getElementById('resultadoGeral').classList.remove('hidden');
    } catch (error) {
      alert('Erro ao calcular a expressão. Verifique se a entrada é válida.');
    }
  }
  