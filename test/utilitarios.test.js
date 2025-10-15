const Utilitarios = require("../src/utilitarios");

describe("Classe Utilitarios", () => {
  let utilitarios;

  beforeEach(() => {
    utilitarios = new Utilitarios();
  });

  test("inverterString", () => {
    expect(utilitarios.inverterString("satc")).toBe("ctas");
    expect(utilitarios.inverterString("")).toBe("");
  });

  test("contarCaracteres", () => {
    expect(utilitarios.contarCaracteres("satc")).toBe(4);
    expect(utilitarios.contarCaracteres("")).toBe(0);
  });

  test("paraMaiusculas", () => {
    expect(utilitarios.paraMaiusculas("satc")).toBe("SATC");
  });

  test("paraMinusculas", () => {
    expect(utilitarios.paraMinusculas("SATC")).toBe("satc");
  });

  test("primeiraLetraMaiuscula", () => {
    expect(utilitarios.primeiraLetraMaiuscula("satc")).toBe("Satc");
    expect(utilitarios.primeiraLetraMaiuscula("s")).toBe("S");
    expect(utilitarios.primeiraLetraMaiuscula("")).toBe("");
  });

  test("somar", () => {
    expect(utilitarios.somar(2, 2)).toBe(4);
    expect(utilitarios.somar(-1, 1)).toBe(0);
  });

  test("subtrair", () => {
    expect(utilitarios.subtrair(2, 2)).toBe(0);
    expect(utilitarios.subtrair(2, -2)).toBe(4);
  });

  test("multiplicar", () => {
    expect(utilitarios.multiplicar(2, 2)).toBe(4);
    expect(utilitarios.multiplicar(2, 0)).toBe(0);
  });

  test("dividir", () => {
    expect(utilitarios.dividir(2, 2)).toBe(1);
  });

  test("dividir lança erro com mensagem ao dividir por zero", () => {
    expect(() => utilitarios.dividir(10, 0)).toThrow("Divisão por zero");

  });

  test("ehPar", () => {
    expect(utilitarios.ehPar(2)).toBe(true);
    expect(utilitarios.ehPar(3)).toBe(false);
    expect(utilitarios.ehPar(0)).toBe(true);
    expect(utilitarios.ehPar(-2)).toBe(true);
  });

  test("primeiroElemento", () => {
    expect(utilitarios.primeiroElemento([1, 2, 3, 4, 5])).toEqual(1);
    expect(utilitarios.primeiroElemento([])).toBeUndefined();
  });

  test("ultimoElemento", () => {
    expect(utilitarios.ultimoElemento([1, 2, 3, 4, 5])).toEqual(5);
    expect(utilitarios.ultimoElemento([])).toBeUndefined();
  });

  test("tamanhoArray", () => {
    expect(utilitarios.tamanhoArray([1, 2, 3, 4, 5])).toEqual(5);
    expect(utilitarios.tamanhoArray([])).toEqual(0);
  });

  test("ordenarArray", () => {
    expect(utilitarios.ordenarArray([2, 1, 4, 5, 3, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("inverterArray", () => {
    expect(utilitarios.inverterArray([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
    expect(utilitarios.inverterArray([])).toEqual([]);
  });

  describe("gerarNumeroAleatorio", () => {
    const originalRandom = Math.random;
    afterEach(() => (Math.random = originalRandom));

    test("usa max default (100) e calcula floor(Math.random() * max)", () => {
      Math.random = () => 0.12345;
      const r = utilitarios.gerarNumeroAleatorio();
      expect(Number.isInteger(r)).toBe(true);
      expect(r).toBeGreaterThanOrEqual(0);
      expect(r).toBeLessThan(100);
      expect(r).toBe(12);
    });

    test("respeita max customizado", () => {
      Math.random = () => 0.99999;
      const r = utilitarios.gerarNumeroAleatorio(10);
      expect(r).toBeLessThan(10);
      expect(r).toBe(9); 
    });
  });

  test("ehNumero diferencia number de string numérica", () => {
    expect(utilitarios.ehNumero(2)).toBe(true);
    expect(utilitarios.ehNumero("2")).toBe(false); 
    expect(utilitarios.ehNumero("teste")).toBe(false);
    expect(utilitarios.ehNumero(NaN)).toBe(false);
  });

  test("removerEspacos", () => {
    expect(utilitarios.removerEspacos("     Satc Satc        ")).toBe("Satc Satc");
    expect(utilitarios.removerEspacos("")).toBe("");
  });

  test("repetirTexto", () => {
    expect(utilitarios.repetirTexto("Satc", 2)).toBe("SatcSatc");
    expect(utilitarios.repetirTexto("", 3)).toBe("");
  });

  test("juntarArray", () => {
    expect(utilitarios.juntarArray([1, 2, 3, 4, 5, 6])).toEqual("1,2,3,4,5,6");
    expect(utilitarios.juntarArray(["a", "b"], "-")).toEqual("a-b");
  });

  describe("contarPalavras - normalização de espaços", () => {
    test("ignora espaços nas pontas (trim) e colapsa múltiplos espaços (\\s+)", () => {
      expect(utilitarios.contarPalavras("  a   b    c  ")).toBe(3);
      expect(utilitarios.contarPalavras("\n\ta\tb\tc\n")).toBe(3);
    });
  });


  test("mediaArray retorna 0 para array vazio", () => {
    expect(utilitarios.mediaArray([])).toBe(0);
  });

  test("mediaArray calcula média corretamente", () => {
    expect(utilitarios.mediaArray([1, 2, 3, 4, 5])).toBe(3);
  });

 
  test("removerDuplicados", () => {
    expect(utilitarios.removerDuplicados([1, 1, 2, 2, 3, 4, 4, 5, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(utilitarios.removerDuplicados([])).toEqual([]);
  });

  test("ehPalindromo ignora pontuação/maiúsculas e não injeta texto", () => {
    expect(utilitarios.ehPalindromo("A man, a plan, a canal: Panama!")).toBe(true);
    expect(utilitarios.ehPalindromo("satc")).toBe(false);
  });

  test("mesclarObjetos preserva e sobrescreve corretamente", () => {
    const obj1 = { nome1: "Satc" };
    const obj2 = { nome2: "Educação" };
    expect(utilitarios.mesclarObjetos(obj1, obj2)).toEqual({ nome1: "Satc", nome2: "Educação" });

    const override = utilitarios.mesclarObjetos({ a: 1, x: 1 }, { b: 2, x: 2 });
    expect(override).toEqual({ a: 1, x: 2, b: 2 }); 
  });
});
