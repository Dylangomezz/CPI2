const estudante = {
    nome: "Dylan",
    idade: 25,
    matriculado: true,
    notas: [8.0, 8.2, 8.5],
    curso: "TSI",
};

let soma =0;
for (let i = 0; i < estudante.notas.length; i++) {
    soma += estudante.notas[i];
}
let mediaFinal = soma / estudante.notas.length;

let situacao = mediaFinal >= 6 ? "Aprovado" : "Reprovado";



console.log(`Aluno: ${estudante.nome} | Média: ${mediaFinal.toFixed(2)} | Situação: ${situacao}`)