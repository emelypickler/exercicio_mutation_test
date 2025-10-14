const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  test("Teste se a string será invertida", async () => {
    expect(utilitarios.inverterString("satc")).toBe("ctas");
  });

  test("Teste se está contando a quantidade de caracteres da string", async () => {
    expect(utilitarios.contarCaracteres("satc")).toBe(4);
  });

  test("Teste se está passando os caracteres para maiuscula", async () => {
    expect(utilitarios.paraMaiusculas("satc")).toBe("SATC");
  });

  test("Teste se está passando os caracteres para maiuscula", async () => {
    expect(utilitarios.paraMaiusculas("satc")).toBe("SATC");
  });

  test("Teste se está passando os caracteres para minuscula", async () => {
    expect(utilitarios.paraMinusculas("SATC")).toBe("satc");
  });

  test("Teste se está passando o primeiro caracterer para maiuscula", async () => {
    expect(utilitarios.primeiraLetraMaiuscula("satc")).toBe("Satc");
  });

  test("Teste se está fazendo a soma dos numeros passados", async () => {
    expect(utilitarios.somar(2, 2)).toBe(4);
  });

  test("Teste se está fazendo a subtração dos numeros passados", async () => {
    expect(utilitarios.subtrair(2, 2)).toBe(0);
  });

  test("Teste se está fazendo a multiplicação dos numeros passados", async () => {
    expect(utilitarios.multiplicar(2, 2)).toBe(4);
  });

  test("Teste se está fazendo a divisão dos numeros passados", async () => {
    expect(utilitarios.dividir(2, 2)).toBe(1);
  });

  test("Teste se está validando se o numero é par ou não", async () => {
    expect(utilitarios.ehPar(2)).toBe(true);
    expect(utilitarios.ehPar(3)).toBe(false);
  });

  test("Teste se está retornando o primeiro numero do array", () => {
    expect(utilitarios.primeiroElemento([1, 2, 3, 4, 5])).toEqual(1);
  });

  test("Teste se está retornando o ultimo numero do array", () => {
    expect(utilitarios.ultimoElemento([1, 2, 3, 4, 5])).toEqual(5);
  });

  test("Teste se está retornando o tamanho do array", () => {
    expect(utilitarios.tamanhoArray([1, 2, 3, 4, 5])).toEqual(5);
  });

  test("Teste se está retornando o array ordenado", () => {
    expect(utilitarios.ordenarArray([2, 1, 4, 5, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("Teste se está retornando invertido o array passado", () => {
    expect(utilitarios.inverterArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
  });

  test('Teste se está gerando um número menor que o maximo e maior que o minimo', () => {
    const max = 100;
    const resultado = utilitarios.gerarNumeroAleatorio(max);
    expect(resultado).toBeGreaterThanOrEqual(0);
    expect(resultado).toBeLessThan(100);
  });

    test("Teste se está verificando corretamente se o parametro passado é número", () => {
    expect(utilitarios.ehNumero(2)).toBe(true);
    expect(utilitarios.ehNumero("teste")).toBe(false);
  });

  test("Teste se está removendo os espaços da String", () => {
    expect(utilitarios.removerEspacos("     Satc Satc        ")).toBe("Satc Satc");
  });

  test("Teste se está retornando uma string reptida com base na quantidade passada", () => {
    expect(utilitarios.repetirTexto("Satc", 2)).toBe("SatcSatc");
  });

  test("Testando se retorna os elementos do array separados por virgula", () => {
    expect(utilitarios.juntarArray([1, 2, 3, 4, 5, 6])).toEqual("1,2,3,4,5,6");
  });

  test("Teste se retorna a quantidade de palavras passadas no parametro", () => {
    expect(utilitarios.contarPalavras("Satc Satc Satc Satc")).toBe(4);
  });

  test("Teste se está retornando a média dos numeros do array", () => {
    expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toEqual(3);
  });

  test("Testando se o metódo remove os numeros duplicados do array", () => {
    expect(utilitarios.removerDuplicados([1, 1, 2, 2, 2, 2, 3, 3, 4, 4, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Teste se retorna true para palavras Palindromo", () => {
    expect(utilitarios.ehPalindromo("ovo")).toBe(true);
    expect(utilitarios.ehPalindromo("satc")).toBe(false);
  });

  test("Teste se combinará corretamente dois objetos", () => {
  const obj1 = { nome1: "Satc"};
  const obj2 = { nome2: "Educação"};
  const resultado = utilitarios.mesclarObjetos(obj1, obj2);
  expect(resultado).toEqual({ nome1: "Satc", nome2: "Educação" });
});

});
