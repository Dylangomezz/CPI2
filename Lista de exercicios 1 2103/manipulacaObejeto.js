const produto = {
    nome: "TV",
    preco: 3500,
    estoque: 5,
};
const status = produto.estoque > 0 ?  "Disponível" : "Esgotado";
console.log(`O produto ${produto.nome} custa R$ ${produto.preco} e está atualmente ${status}.`);