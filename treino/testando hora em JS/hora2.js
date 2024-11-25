const agora = new Date();

console.log(agora.toLocaleTimeString('pt-BR', {
  hour: '2-digit', 
  minute: '2-digit', 
  second: '2-digit', 
  hour12: false
}));
// Exemplo de saída: "15:45:30"

console.log(agora.toLocaleTimeString('en-US', {
  hour: 'numeric', 
  minute: '2-digit', 
  timeZoneName: 'short'
}));
// Exemplo de saída: "3:45 PM PDT"