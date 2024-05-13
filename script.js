function atualizarValorDolar() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')
      .then(response => response.json())
      .then(data => {
        const valorDolar = parseFloat(data.USDBRL.bid).toFixed(2);
        document.getElementById('usdValue').textContent = `Cotação atual Dólar: R$ ${valorDolar}`;
  
        document.getElementById('dolar').value = (1 / valorDolar).toFixed(2);
        document.getElementById('real').value = 1;
  
        document.getElementById('real').addEventListener('input', function() {
          let valorReal = parseFloat(this.value);
          if (!isNaN(valorReal)) {
            document.getElementById('dolar').value = (valorReal / valorDolar).toFixed(2);
          } else {
            document.getElementById('dolar').value = "";
          }
        });
  
        document.getElementById('dolar').addEventListener('input', function() {
          let valorDolarInput = parseFloat(this.value);
          if (!isNaN(valorDolarInput)) {
            document.getElementById('real').value = (valorDolarInput * valorDolar).toFixed(2);
          } else {
            document.getElementById('real').value = "";
          }
        });
      })
      .catch(error => console.error('Erro ao obter os dados de câmbio:', error));
  }
  
  atualizarValorDolar();
  