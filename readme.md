<p align="center">
<img src="https://i.imgur.com/769C2dR.png" alt="one-spec-4-all" />
</p>

> One Runner to Rule Them All.

## 🎯 Cansado de Descrever Quando Quer Provar?

A **one-spec-4-all** nasce de uma frustração real: a linguagem padronizada de testes (`describe`, `it`, `should`) foi criada para _descrever comportamentos_. Mas e quando você está **provando um teorema matemático**? Ou **verificando conformidade com um contrato de API**?

A linguagem importa. Ela molda o pensamento.

Este framework segue a **Filosofia Aditiva**: não substituímos o Jest, **adicionamos** o vocabulário que faltava. Seu código legado continua funcionando. Seu conhecimento de `describe`, `it`, `expect` continua válido. Você só ganha novas ferramentas.

## 🚀 Seu Primeiro Teste em 5 Minutos (Quick Start)

Antes de escolher dialetos, veja o framework em ação. Copie, cole e rode:

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

**Pronto!** Você acabou de rodar seu primeiro teste com o dialeto Imperativo. Agora, descubra qual dialeto é o ideal para _seu_ projeto.

## 🧭 Qual Dialeto é Para Você?

Você **não precisa aprender os três**. Escolha o que se encaixa no seu mundo e ignore o resto. O framework é poliglota; você não precisa ser.

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

## 📐 Dialeto Matemático (MathDialect)

### 😤 A Dor Que Resolvemos

Você está testando uma **função de criptografia pura**, matemática pura. O framework te força a escrever:

```javascript
describe("SHA-256", () => {
  it("should produce a valid hash", () => { ... });
});
```

Soa **errado**. Informal. Você não está _descrevendo um comportamento_. Você está **provando uma verdade universal**. A linguagem da ferramenta não espelha o rigor do seu código.

### 💡 A Solução

Com o dialeto Matemático, você escreve **provas axiomáticas**:

```javascript
axiom("Teoria de Hash SHA-256", () => {
  proof("Hash de string vazia converge para constante conhecida", () => {
    implies(sha256("")).is("e3b0c44...");
  });
});
```

A linguagem agora reflete o que você realmente faz: **provar**.

### 🔬 Filosofia

Baseado em **Lógica Formal** e **Programação Funcional**. O código é um conjunto de teoremas. Você não "testa" se funciona, você **prova** que é verdade.

**Vibe:** Científica, Imutável, Axiomática.

**Ideal para:** Cientistas de dados, engenheiros de algoritmos, bibliotecas de utilitários, cálculos financeiros.

### API Completa

| Categoria     | Função                            | Descrição                                 | Equivalente Jest        |
| :------------ | :-------------------------------- | :---------------------------------------- | :---------------------- |
| **Estrutura** | `axiom(name, fn)`                 | Define um grupo de verdades fundamentais. | `describe`              |
|               | `proof(name, fn)`                 | Uma prova individual de um caso.          | `test` / `it`           |
| **Asserção**  | `implies(val).is(expected)`       | "O valor implica ser..."                  | `expect(val).toBe`      |
|               | `implies(val).wasEvaluated()`     | Verifica se a função foi computada.       | `toHaveBeenCalled`      |
|               | `implies(val).appliedTo(args)`    | Verifica os argumentos da aplicação.      | `toHaveBeenCalledWith`  |
|               | `implies(val).evaluated(n).times` | Frequência de avaliação.                  | `toHaveBeenCalledTimes` |
| **Mocks**     | `arbitrary()` / `lambda()`        | Cria uma função genérica para teste.      | `jest.fn()`             |
|               | `monitor(obj, method)`            | Monitora uma função existente.            | `jest.spyOn()`          |
|               | `f.yields(val)`                   | Define o resultado produzido pela função. | `mockReturnValue`       |
|               | `f.convergesTo(val)`              | Define o resultado assíncrono (limite).   | `mockResolvedValue`     |
|               | `f.derive(fn)`                    | Define a implementação lógica.            | `mockImplementation`    |
| **Lifecycle** | `postulate(fn)`                   | Define premissas iniciais globais.        | `beforeAll`             |
|               | `given(fn)`                       | "Dado que..." (antes de cada prova).      | `beforeEach`            |
|               | `conclude(fn)`                    | Conclusões finais / limpeza.              | `afterAll`              |

### Exemplo Completo

```javascript
import {
  axiom,
  proof,
  implies,
  arbitrary,
  given,
} from "@purecore/one-spec-4-all";

axiom("Teoria de Juros Compostos", () => {
  let calcInterest;
  const logger = arbitrary();

  given(() => {
    calcInterest = (p, r, t) => Math.floor(p * Math.pow(1 + r, t));
  });

  proof("Capital de 1000 a 5% por 2 anos implica montante de 1102", () => {
    implies(calcInterest(1000, 0.05, 2)).is(1102);
  });

  proof("Taxa zero implica preservação do capital", () => {
    implies(calcInterest(500, 0, 10)).is(500);
  });

  proof("Logger arbitrário registra cálculo", () => {
    logger.yields(true);
    logger("calc_start");
    implies(logger).wasEvaluated();
    implies(logger).appliedTo("calc_start");
  });
});
```

## 📖 Dialeto Narrativo (NarrativeDialect)

### 😤 A Dor Que Resolvemos

Seu **PM precisa validar as regras de negócio**, mas não consegue ler seus testes.

```javascript
it("should return 403", () => { ... });
```

É **grego** para ele. E você? Fica torcendo para que ele confie que você cobriu tudo.

A barreira clássica entre **time de produto** e **time de engenharia** continua intacta. Não há linguagem comum.

### 💡 A Solução

Com o dialeto Narrativo, o teste **é a documentação**:

```javascript
scenario("Usuário sem permissão tenta acessar o painel de Admin", () => {
  to(response.status).be(403);
});
```

Agora seu PM lê o código e **entende**. O teste serve como contrato vivo entre produto e engenharia.

### 🎭 Filosofia

Baseado em **BDD (Behavior Driven Development)** e **Storytelling**. Testes são documentação viva. Você descreve cenários, intenções e expectativas de comportamento.

**Vibe:** Fluida, Humana, Descritiva.

**Ideal para:** Designers, Product Managers, times ágeis, testes de fluxos de usuário (User Journeys).

### API Completa

| Categoria     | Função                       | Descrição                            | Equivalente Jest       |
| :------------ | :--------------------------- | :----------------------------------- | :--------------------- |
| **Estrutura** | `intend(name, fn)`           | Define a intenção do bloco.          | `describe`             |
|               | `story(name, fn)`            | Alias para agrupamento de histórias. | `describe`             |
|               | `detail(name, fn)`           | Detalha um comportamento específico. | `test` / `it`          |
|               | `scenario(name, fn)`         | Um cenário de uso.                   | `test` / `it`          |
| **Asserção**  | `to(val).be(expected)`       | "Para o valor ser..."                | `expect(val).toBe`     |
|               | `to(val).have(prop)`         | Verifica posse de propriedade.       | `toHaveProperty`       |
|               | `to(val).wasCalled()`        | Verifica se o ator foi chamado.      | `toHaveBeenCalled`     |
|               | `to(val).received(args)`     | Verifica o que foi recebido.         | `toHaveBeenCalledWith` |
| **Mocks**     | `dummy()` / `standIn()`      | Um dublê (ator) no lugar do real.    | `jest.fn()`            |
|               | `watch(obj, method)`         | Observa um ator existente.           | `jest.spyOn()`         |
|               | `shadow(obj, method)`        | Segue (shadows) um método.           | `jest.spyOn()`         |
|               | `actor.respondsWith(val)`    | Define a resposta do ator.           | `mockReturnValue`      |
|               | `actor.eventuallyGives(val)` | Resposta futura (promessa).          | `mockResolvedValue`    |
|               | `actor.actsLike(fn)`         | Define como o ator deve agir.        | `mockImplementation`   |
| **Lifecycle** | `background(fn)`             | Contexto de fundo da história.       | `beforeAll`            |
|               | `before(fn)`                 | Antes de cada cena.                  | `beforeEach`           |
|               | `cleanup(fn)`                | Limpeza após a história.             | `afterAll`             |

### Exemplo Completo

```javascript
import {
  intend,
  scenario,
  to,
  standIn,
  background,
} from "@purecore/one-spec-4-all";

intend("Fluxo de Autenticação do Usuário", () => {
  const authService = standIn();
  const database = standIn();

  background(() => {
    authService.respondsWith({ token: "abc-123" });
    database.respondsWith(true);
  });

  scenario("Login com credenciais válidas deve retornar token", () => {
    const response = authService.login("usuario", "senha_secreta");
    to(response).have("token");
    to(response.token).be("abc-123");
  });

  scenario("Tentativa de login deve logar tentativa no banco", () => {
    database.logAttempt("usuario");
    to(database).wasCalled();
  });
});
```

## 🛡️ Dialeto Imperativo (ImperativeDialect)

### 😤 A Dor Que Resolvemos

Você está testando uma **integração com um sistema bancário**. Ou validando a **conformidade com um contrato de API** super rígido, com implicações legais.

```javascript
describe("Payment Gateway", () => {
  it("should return 200", () => { ... });
});
```

Soa **frágil**. Quase passivo. A linguagem do teste não impõe o **respeito** que o contrato exige. Você não quer apenas _descrever_ o que a API faz. Você precisa **garantir** sua conformidade e **verificar** cada cláusula.

### 💡 A Solução

Com o dialeto Imperativo, a linguagem muda completamente o peso do teste:

```javascript
ensure("Conformidade com Contrato PCI-DSS v4", () => {
  verify("Dados sensíveis nunca trafegam em texto plano", () => {
    that(payload).matches(/^encrypted:/);
  });
});
```

**Ensure. Verify. That.** São palavras de autoridade. De engenharia de sistemas.

### ⚙️ Filosofia

Baseado em **Design by Contract** e **Engenharia de Sistemas**. Foco na verificação explícita de contratos, estados e integridade.

**Vibe:** Técnica, Rigorosa, "Crachá de Engenheiro".

**Ideal para:** Engenheiros de backend, DevOps, validação de APIs, drivers de banco de dados, conformidade (compliance).

### API Completa

| Categoria     | Função                        | Descrição                          | Equivalente Jest        |
| :------------ | :---------------------------- | :--------------------------------- | :---------------------- |
| **Estrutura** | `ensure(name, fn)`            | Garante um requisito de sistema.   | `describe`              |
|               | `suite(name, fn)`             | Uma suite de verificações.         | `describe`              |
|               | `check(name, fn)`             | Uma checagem pontual.              | `test` / `it`           |
|               | `verify(name, fn)`            | Verificação de conformidade.       | `test` / `it`           |
| **Asserção**  | `that(val).is(expected)`      | "Que o valor é..."                 | `expect(val).toBe`      |
|               | `that(val).isOk()`            | Verifica "truthiness".             | `toBeTruthy`            |
|               | `that(val).matches(regex)`    | Validação de padrão rigoroso.      | `toMatch`               |
|               | `that(val).triggered()`       | Verifica disparo de evento/função. | `toHaveBeenCalled`      |
|               | `that(val).calledWith(args)`  | Verifica payload do disparo.       | `toHaveBeenCalledWith`  |
|               | `that(val).triggeredCount(n)` | Contagem exata de disparos.        | `toHaveBeenCalledTimes` |
| **Mocks**     | `stub()` / `mock()`           | Um stub de infraestrutura.         | `jest.fn()`             |
|               | `inspect(obj, method)`        | Inspeciona um método interno.      | `jest.spyOn()`          |
|               | `spy(obj, method)`            | Alias clássico.                    | `jest.spyOn()`          |
|               | `s.forceReturn(val)`          | Força um retorno imediato.         | `mockReturnValue`       |
|               | `s.resolveWith(val)`          | Resolve promessa (network).        | `mockResolvedValue`     |
|               | `s.executes(fn)`              | Executa implementação substituta.  | `mockImplementation`    |
| **Lifecycle** | `initAll(fn)`                 | Inicialização de sistema.          | `beforeAll`             |
|               | `reset(fn)`                   | Reset de estado (antes de cada).   | `beforeEach`            |
|               | `disposeAll(fn)`              | Descarte de recursos (teardown).   | `afterAll`              |

### Exemplo Completo

```javascript
import { ensure, check, that, stub, initAll } from "@purecore/one-spec-4-all";

ensure("Conformidade do Gateway de Pagamento", () => {
  const apiGateway = stub();

  initAll(() => {
    apiGateway.forceReturn({ status: 200, transactionId: "tx_999" });
  });

  check("Transação bem-sucedida retorna 200 OK", () => {
    const response = apiGateway.process({ amount: 50.0 });
    that(response.status).is(200);
    that(response.transactionId).matches(/^tx_\d+$/);
  });

  check("Gateway deve ser acionado apenas uma vez por request", () => {
    that(apiGateway).triggeredCount(1);
    that(apiGateway).calledWith({ amount: 50.0 });
  });
});
```

## 🔄 Como Adotar Gradualmente (Migração)

Você tem 5.000 testes em Jest? **Não reescreva nada.** O one-spec-4-all entende nativamente a sintaxe do Jest.

O código abaixo é **100% válido** e executa no mesmo runner:

```javascript
// ✅ Legado: Ninguém precisa mexer nisso
describe("Módulo de Login (Legacy)", () => {
  it("deve validar senha", () => {
    expect(validar("123")).toBe(true);
  });
});

// ✅ Novo: Feature nova com dialeto novo
import { axiom, implies } from "@purecore/one-spec-4-all";

axiom("Nova Criptografia SHA-256", () => {
  implies(hash("123")).matches(/^[a-f0-9]{64}$/);
});
```

Um único comando `npm test` executa **ambos**. Mesmo relatório. Mesma cobertura de código.

## 📚 Tópicos Avançados

### Comparativo Geral (Tabela Rosetta)

| Conceito / Jest               | 📐 Matemático (Lógico/Funcional) | 📖 Narrativo (BDD/Humano) | 🛡️ Imperativo (Técnico/Contrato) |
| :---------------------------- | :------------------------------- | :------------------------ | :------------------------------- |
| **Estrutura & Execução**      |                                  |                           |                                  |
| `describe()`                  | `axiom()`                        | `intend()` / `story()`    | `ensure()` / `suite()`           |
| `it()` / `test()`             | `proof()` / `lemma()`            | `detail()` / `scenario()` | `check()` / `verify()`           |
| `expect(x)`                   | `implies(x)`                     | `to(x)` / `expect(x)`     | `that(x)`                        |
| **Criação de Mocks**          |                                  |                           |                                  |
| `jest.fn()`                   | `arbitrary()` / `lambda()`       | `dummy()` / `standIn()`   | `stub()` / `mock()`              |
| `jest.spyOn()`                | `monitor()`                      | `watch()` / `shadow()`    | `inspect()` / `spy()`            |
| **Configuração de Mocks**     |                                  |                           |                                  |
| `mockReturnValue(v)`          | `yields(v)` / `mapsTo(v)`        | `respondsWith(v)`         | `forceReturn(v)`                 |
| `mockResolvedValue(v)`        | `convergesTo(v)`                 | `eventuallyGives(v)`      | `resolveWith(v)`                 |
| `mockImplementation(fn)`      | `derive(fn)`                     | `actsLike(fn)`            | `executes(fn)`                   |
| **Validação de Chamadas**     |                                  |                           |                                  |
| `toHaveBeenCalled()`          | `.wasEvaluated()`                | `.wasCalled()`            | `.triggered()`                   |
| `toHaveBeenCalledWith(x)`     | `.appliedTo(x)`                  | `.received(x)`            | `.calledWith(x)`                 |
| `toHaveBeenCalledTimes(n)`    | `.evaluated(n).times`            | `.called(n).times`        | `.triggeredCount(n)`             |
| **Ciclo de Vida (Lifecycle)** |                                  |                           |                                  |
| `beforeAll()`                 | `postulate()` / `setup()`        | `background()`            | `initAll()`                      |
| `afterAll()`                  | `conclude()`                     | `cleanup()`               | `disposeAll()`                   |
| `beforeEach()`                | `given()`                        | `before()`                | `reset()`                        |

### Uso Misto (Modo Poliglota)

Como todos os dialetos compartilham a mesma `AtomicCore` engine, você pode misturá-los no mesmo arquivo:

```javascript
import { axiom, implies } from "@purecore/one-spec-4-all"; // Matemático para lógica
import { intend, to } from "@purecore/one-spec-4-all"; // Narrativo para UI

axiom("Core Logic", () => {
  // ... provas matemáticas
});

intend("User Interface", () => {
  // ... cenários de usuário
});
```

## 🏃 Executando os Testes

O `one-spec-4-all` vem com uma CLI embutida para rodar todos os seus arquivos `.spec.ts` automaticamente.

### Via npx

```bash
npx one-spec-4-all
```

Ou usando os atalhos (aliases):

```bash
npx os4all
# ou
npx 1spec
```

Isso irá escanear recursivamente o diretório atual em busca de arquivos `.spec.ts` e executá-los.
