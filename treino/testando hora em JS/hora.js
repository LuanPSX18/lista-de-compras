const agora = new Date();
console.log(agora.toLocaleTimeString('pt-BR')); // Exemplo de saída: "15:45:30"
console.log(agora.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })); // Exemplo de saída: "03:45 PM"