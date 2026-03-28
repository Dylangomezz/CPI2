try {
  const idade = 25; 

  if (typeof idade !== "number") {
    throw new Error("Idade deve ser um número");
  }

  if (idade < 0) {
    throw new Error("Idade não pode ser negativa");
  }

  let categoria;

  if (idade <= 12) {
    categoria = "Criança";
  } else if (idade <= 17) {
    categoria = "Adolescente";
  } else if (idade <= 59) {
    categoria = "Adulto";
  } else {
    categoria = "Idoso";
  }

  console.log(`Idade: ${idade} → Categoria: ${categoria}`);

} catch (erro) {
  console.error("Erro:", erro.message);
}