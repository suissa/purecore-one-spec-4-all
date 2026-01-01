<p align="center">
<img src="https://i.imgur.com/769C2dR.png" alt="one-spec-4-all" />
</p>

> One Runner to Rule Them All.

## ✅ Risco Zero: Seu Legado Continua Funcionando

Antes de qualquer coisa, veja a **prova** de que não viemos destruir seu trabalho. Este código é 100% válido e roda no mesmo arquivo:

```javascript
// ✅ Seu código legado Jest - INTOCADO
describe("Módulo de Login (Legacy)", () => {
  it("deve validar senha", () => {
    expect(validar("123")).toBe(true);
  });
});

// ✅ Nova feature com dialeto novo - COMPLEMENTAR
import { axiom, implies } from "@purecore/one-spec-4-all";

axiom("Nova Criptografia SHA-256", () => {
  implies(hash("123")).matches(/^[a-f0-9]{64}$/);
});
```

**Um único comando `npm test` executa ambos.** Mesmo relatório. Mesma cobertura. Nenhuma reescrita necessária.

> 💡 **O framework é poliglota para que seu time não precise ser.** Seu cientista de dados foca no dialeto matemático. Seu front-end foca no imperativo. Cada um aprende só o que precisa.

---

## 🎯 Cansado de Descrever Quando Quer Provar?

A linguagem padronizada de testes (`describe`, `it`, `should`) foi criada para _descrever comportamentos_. Mas e quando você está **provando um teorema matemático**? Ou **verificando conformidade com um contrato de API**?

A linguagem importa. Ela molda o pensamento.

Este framework segue a **Filosofia Aditiva**: não substituímos o Jest, **adicionamos** o vocabulário que faltava.

---

## 📊 Por Que Adotar no Seu Time? (Para Líderes)

Se você é tech lead, arquiteto ou gerente de engenharia, aqui estão os argumentos que importam:

### 💰 ROI de Comunicação

| Problema                               | Solução com one-spec-4-all                             |
| -------------------------------------- | ------------------------------------------------------ |
| PMs não conseguem ler testes           | O dialeto Narrativo produz **especificações legíveis** |
| Reuniões para validar regras           | Testes viram **documentação aprovável**                |
| Ambiguidade entre produto e engenharia | **Linguagem comum** elimina retrabalho                 |

**Resultado:** Menos reuniões, ciclos de validação mais curtos, menos bugs escapando para produção.

### ⚡ Eficiência do Time

| Situação                          | Benefício                                              |
| --------------------------------- | ------------------------------------------------------ |
| Onboarding de cientistas de dados | Aprendem só o `MathDialect`, não o ecossistema inteiro |
| Devs de backend focados           | Usam só o `ImperativeDialect` para contratos           |
| Especialização por domínio        | Cada membro produz mais, mais rápido                   |

**Resultado:** Capacitação em dias, não semanas. Contribuição imediata.

### 🛡️ Saúde do Código (Risco Zero)

| Medo                                  | Realidade                                          |
| ------------------------------------- | -------------------------------------------------- |
| "Vou ter que reescrever 5.000 testes" | ❌ **Falso.** Jest roda nativamente                |
| "É mais uma dependência para manter"  | Integração incremental, não big-bang               |
| "E se der errado no meio do projeto?" | Adote em 1 arquivo novo. Avalie. Expanda se gostar |

**Resultado:** Melhoria imediata sem dívida técnica. Rollback trivial se necessário.

---

## 🚀 Seu Primeiro Teste em 5 Minutos (Quick Start)

Veja o framework em ação. Copie, cole e rode:

### 1. Instale

```bash
npm install @purecore/one-spec-4-all
```

### 2. Crie um arquivo `api.spec.ts`

```javascript
import { ensure, check, that, stub } from "@purecore/one-spec-4-all";

ensure("Minha API de Usuários", () => {
  const api = stub();
  api.forceReturn({ status: 200, id: "user_123" });

  check("Criação de usuário retorna 200 OK", () => {
    const response = api.createUser({ name: "João" });

    that(response.status).is(200);
    that(response.id).matches(/^user_\w+$/);
  });
});
```

### 3. Execute

```bash
npx one-spec-4-all
```

**Pronto!** Você acabou de rodar seu primeiro teste com o dialeto Imperativo.

---

## 🧭 Qual Dialeto é Para Você?

Você **não precisa aprender os três**. Escolha o que se encaixa no seu mundo e ignore o resto.

```
                          ┌─────────────────────────────────────────┐
                          │   O que você está testando?             │
                          └───────────────────┬─────────────────────┘
                                              │
              ┌───────────────────────────────┼───────────────────────────────┐
              │                               │                               │
              ▼                               ▼                               ▼
   ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
   │ Algoritmos puros,    │      │ Fluxos de usuário,   │      │ APIs, contratos,     │
   │ cálculos, regras     │      │ regras de negócio    │      │ integrações,         │
   │ matemáticas?         │      │ legíveis por PMs?    │      │ conformidade?        │
   └──────────┬───────────┘      └──────────┬───────────┘      └──────────┬───────────┘
              │                               │                               │
              ▼                               ▼                               ▼
   ┌──────────────────────┐      ┌──────────────────────┐      ┌──────────────────────┐
   │ 📐 MATEMÁTICO        │      │ 📖 NARRATIVO         │      │ 🛡️ IMPERATIVO        │
   │ axiom, proof, implies│      │ intend, scenario, to │      │ ensure, check, that  │
   └──────────────────────┘      └──────────────────────┘      └──────────────────────┘
```

---

## 🛡️ Dialeto Imperativo (Seu Caminho Principal)

O Quick Start usou este dialeto. Vamos aprofundar.

### 😤 A Dor

Você testa uma **integração com sistema bancário**. A linguagem `describe`/`it` soa frágil. Você precisa **garantir conformidade**, não apenas descrever.

### 💡 A Solução

```javascript
ensure("Conformidade com Gateway PCI-DSS v4", () => {
  verify("Dados sensíveis nunca trafegam em texto plano", () => {
    that(payload).matches(/^encrypted:/);
  });
});
```

**Ensure. Verify. That.** Palavras de autoridade.

### 📋 API Essencial

| Função                                 | Descrição            | Equivalente Jest      |
| -------------------------------------- | -------------------- | --------------------- |
| `ensure(name, fn)`                     | Garante um requisito | `describe`            |
| `check(name, fn)` / `verify(name, fn)` | Checagem pontual     | `test` / `it`         |
| `that(val).is(x)`                      | Asserção             | `expect(val).toBe(x)` |
| `stub()` / `mock()`                    | Cria mock            | `jest.fn()`           |
| `initAll(fn)`                          | Setup inicial        | `beforeAll`           |
| `reset(fn)`                            | Reset por teste      | `beforeEach`          |

> 📚 **[Ver API completa do Imperativo →](./docs/api-imperativo.md)**

---

## 📐 Dialeto Matemático (Para Cientistas de Dados)

### 😤 A Dor

Você prova uma **função de criptografia pura**. Escrever `describe`/`it` soa informal e impreciso.

### 💡 A Solução

```javascript
axiom("Teoria de Hash SHA-256", () => {
  proof("Hash de string vazia converge para constante conhecida", () => {
    implies(sha256("")).is("e3b0c44...");
  });
});
```

**Axiom. Proof. Implies.** Você não testa, você **prova**.

### 📋 API Essencial

| Função               | Descrição         | Equivalente Jest      |
| -------------------- | ----------------- | --------------------- |
| `axiom(name, fn)`    | Grupo de verdades | `describe`            |
| `proof(name, fn)`    | Prova individual  | `test` / `it`         |
| `implies(val).is(x)` | Implicação lógica | `expect(val).toBe(x)` |
| `arbitrary()`        | Função genérica   | `jest.fn()`           |
| `postulate(fn)`      | Premissas globais | `beforeAll`           |
| `given(fn)`          | "Dado que..."     | `beforeEach`          |

> 📚 **[Ver API completa do Matemático →](./docs/api-matematico.md)**

---

## 📖 Dialeto Narrativo (Para Times com PMs)

### 😤 A Dor

Seu **PM precisa validar regras de negócio**, mas não consegue ler `it("should return 403")`.

### 💡 A Solução

```javascript
scenario("Usuário sem permissão tenta acessar o painel de Admin", () => {
  to(response.status).be(403);
});
```

Agora seu PM **lê e entende**. O teste é a documentação.

### 📋 API Essencial

| Função                                    | Descrição          | Equivalente Jest      |
| ----------------------------------------- | ------------------ | --------------------- |
| `intend(name, fn)` / `story(name, fn)`    | Intenção/história  | `describe`            |
| `scenario(name, fn)` / `detail(name, fn)` | Cenário            | `test` / `it`         |
| `to(val).be(x)`                           | Expectativa        | `expect(val).toBe(x)` |
| `standIn()` / `dummy()`                   | Dublê              | `jest.fn()`           |
| `background(fn)`                          | Contexto           | `beforeAll`           |
| `before(fn)`                              | Antes de cada cena | `beforeEach`          |

> 📚 **[Ver API completa do Narrativo →](./docs/api-narrativo.md)**

---

## 🎭 Exemplo Poliglota: Carrinho de Compras

Quando faz sentido usar **todos os dialetos** no mesmo projeto:

```javascript
// 📐 MATEMÁTICO: Cálculos de preço (lógica pura)
axiom("Teoria de Cálculo de Preços", () => {
  proof("Desconto de 10% em R$100 implica R$90", () => {
    implies(calcDiscount(100, 10)).is(90);
  });
});

// 📖 NARRATIVO: Jornada do usuário (legível por PMs)
intend("Jornada de Compra do Usuário", () => {
  scenario("Usuário adiciona produto ao carrinho", () => {
    to(cart).wasCalled();
  });
});

// 🛡️ IMPERATIVO: Integração com gateway (contrato rígido)
ensure("Conformidade com Gateway v2.1", () => {
  check("Transação retorna status 200", () => {
    that(response.status).is(200);
  });
});
```

> 📁 Veja o exemplo completo em [`examples/polyglot-shopping-cart.spec.ts`](./examples/polyglot-shopping-cart.spec.ts)

---

## 📚 Referência Completa

### Tabela Rosetta (Tradução Jest → Dialetos)

| Conceito / Jest     | 📐 Matemático      | 📖 Narrativo              | 🛡️ Imperativo          |
| ------------------- | ------------------ | ------------------------- | ---------------------- |
| `describe()`        | `axiom()`          | `intend()` / `story()`    | `ensure()` / `suite()` |
| `it()` / `test()`   | `proof()`          | `scenario()` / `detail()` | `check()` / `verify()` |
| `expect(x).toBe(y)` | `implies(x).is(y)` | `to(x).be(y)`             | `that(x).is(y)`        |
| `jest.fn()`         | `arbitrary()`      | `standIn()`               | `stub()`               |
| `jest.spyOn()`      | `monitor()`        | `watch()`                 | `spy()`                |
| `beforeAll()`       | `postulate()`      | `background()`            | `initAll()`            |
| `beforeEach()`      | `given()`          | `before()`                | `reset()`              |
| `afterAll()`        | `conclude()`       | `cleanup()`               | `disposeAll()`         |

---

## 🏃 Executando os Testes

```bash
npx one-spec-4-all   # Escaneia e executa todos os .spec.ts
npx os4all           # Alias curto
npx 1spec            # Alias ainda mais curto
```

---

## 📖 Mais Recursos

- [Histórico de Mudanças (CHANGELOG)](./CHANGELOG.md)
- [Filosofia Aditiva Explicada](./critica.md)
- [Guia Rápido](./docs/guia-rapido.md)
- [Whitepaper](./docs/whitepaper.md)
