const hoje = new Date();
console.log(hoje.toLocaleDateString('pt-BR', {
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric'
}));
// Exemplo de saída: "quinta-feira, 28 de setembro de 2023"

console.log(hoje.toLocaleDateString('en-US', {
  weekday: 'short', 
  year: '2-digit', 
  month: '2-digit', 
  day: '2-digit'
}));
// Exemplo de saída: "Thu, 09/28/23"