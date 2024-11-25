const valor = 123456.78;
const formatadorEUA = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(formatadorEUA.format(valor)); // Exemplo de saída: "$123,456.78"

const formatadorBrasil = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(formatadorBrasil.format(valor)); // Exemplo de saída: "R$ 123.456,78"