try {
  const numeros = [1, 2, 3, 4, 5];

  for (let num of numeros) {
    if (typeof num !== "number") {
      throw new Error("Valor inválido: elemento não é do tipo number");
    }

    if (num % 2 === 0) {
      console.log(`${num} é Par`);
    } else {
      console.log(`${num} é Ímpar`);
    }
  }

} catch (erro) {
  console.error("Erro encontrado:", erro.message);
}