<p align="center">
<img src="https://i.imgur.com/769C2dR.png" alt="one-spec-4-all" />
</p>

> One Runner to Rule Them All.
>
> [Veja o Histórico de Mudanças (CHANGELOG)](./CHANGELOG.md)

A **one-spec-4-all** é uma biblioteca de testes inovadora que desacopla a lógica de execução da semântica de escrita. Acreditamos que a linguagem usada nos testes deve refletir a natureza do problema que está sendo resolvido.

Testar um algoritmo matemático complexo exige um vocabulário diferente de testar um fluxo de usuário em uma interface gráfica. O **one-spec-4-all** permite que você escolha o dialeto certo para o trabalho, ou misture todos eles.

## Comparativo

| Conceito / Jest                       | 📐 Matemático (Lógico/Funcional) | 📖 Narrativo (BDD/Humano) | 🛡️ Imperativo (Técnico/Contrato) |
| :------------------------------------ | :------------------------------- | :------------------------ | :------------------------------- |
| **--- Estrutura & Execução ---**      |                                  |                           |                                  |
| `describe()`                          | `axiom()`                        | `intend()` / `story()`    | `ensure()` / `suite()`           |
| `it()` / `test()`                     | `proof()` / `lemma()`            | `detail()` / `scenario()` | `check()` / `verify()`           |
| `expect(x)`                           | `implies(x)`                     | `to(x)` / `expect(x)`     | `that(x)`                        |
| **--- Criação de Mocks ---**          |                                  |                           |                                  |
| `jest.fn()`                           | `arbitrary()` / `lambda()`       | `dummy()` / `standIn()`   | `stub()` / `mock()`              |
| `jest.spyOn()`                        | `monitor()`                      | `watch()` / `shadow()`    | `inspect()` / `spy()`            |
| **--- Configuração de Mocks ---**     |                                  |                           |                                  |
| `mockReturnValue(v)`                  | `yields(v)` / `mapsTo(v)`        | `respondsWith(v)`         | `forceReturn(v)`                 |
| `mockResolvedValue(v)`                | `convergesTo(v)`                 | `eventuallyGives(v)`      | `resolveWith(v)`                 |
| `mockImplementation(fn)`              | `derive(fn)`                     | `actsLike(fn)`            | `executes(fn)`                   |
| **--- Validação de Chamadas ---**     |                                  |                           |                                  |
| `toHaveBeenCalled()`                  | `.wasEvaluated()`                | `.wasCalled()`            | `.triggered()`                   |
| `toHaveBeenCalledWith(x)`             | `.appliedTo(x)`                  | `.received(x)`            | `.calledWith(x)`                 |
| `toHaveBeenCalledTimes(n)`            | `.evaluated(n).times`            | `.called(n).times`        | `.triggeredCount(n)`             |
| **--- Ciclo de Vida (Lifecycle) ---** |                                  |                           |                                  |
| `beforeAll()`                         | `postulate()` / `setup()`        | `background()`            | `initAll()`                      |
| `afterAll()`                          | `conclude()`                     | `cleanup()`               | `disposeAll()`                   |
| `beforeEach()`                        | `given()`                        | `before()`                | `reset()`                        |

## 🎭 Os Dialetos

Abaixo explicamos o "Porquê" de cada idioma e listamos sua API completa.

### 1. 📐 O Matemático (MathDialect)

**Filosofia:** Baseado em Lógica Formal e Programação Funcional.

Este dialeto trata o código como um conjunto de teoremas matemáticos que precisam ser provados. Ele elimina a ambiguidade da linguagem natural, focando em asserções precisas e relações de causa e efeito. É ideal para testar algoritmos puros, bibliotecas de utilitários, cálculos financeiros ou qualquer lógica onde a correção é absoluta e independente de estado externo. Aqui, você não "testa" se funciona, você **prova** que é verdade.

- **Vibe:** Científica, Imutável, Axiomática.

#### API Completa

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

#### Exemplo Completo

```javascript
import {
  axiom,
  proof,
  implies,
  arbitrary,
  given,
} from "@purecore/one-spec-4-all";

/* Vamos provar a correção de um cálculo de juros compostos */
axiom("Teoria de Juros Compostos", () => {
  let calcInterest;
  const logger = arbitrary(); // Um mock arbitrário

  given(() => {
    // Definimos a função pura a ser testada a cada ciclo
    calcInterest = (p, r, t) => Math.floor(p * Math.pow(1 + r, t));
  });

  proof("Capital de 1000 a 5% por 2 anos implica montante de 1102", () => {
    const result = calcInterest(1000, 0.05, 2);
    implies(result).is(1102);
  });

  proof("Taxa zero implica preservação do capital", () => {
    const result = calcInterest(500, 0, 10);
    implies(result).is(500);
  });

  proof("Logger arbitrário registra cálculo", () => {
    logger.yields(true);
    logger("calc_start");

    implies(logger).wasEvaluated();
    implies(logger).appliedTo("calc_start");
  });
});
```

---

### 2. 📖 O Narrativo (NarrativeDialect)

**Filosofia:** Baseado em BDD (Behavior Driven Development) e Storytelling.

O dialeto Narrativo foi criado para transformar testes em documentação viva. Ele prioriza a legibilidade humana, permitindo que Product Managers e Designers leiam o código e entendam as regras de negócio. Ao invés de checar bits e bytes, você descreve cenários, intenções e expectativas de comportamento. É a escolha perfeita para testes de fluxos de usuário (User Journeys) e requisitos de negócio de alto nível.

- **Vibe:** Fluida, Humana, Descritiva.

#### API Completa

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

#### Exemplo Completo

```javascript
import {
  intend,
  scenario,
  to,
  standIn,
  background,
} from "@purecore/one-spec-4-all";

intend("Fluxo de Autenticação do Usuário", () => {
  const authService = standIn(); // Um dublê para o serviço real
  const database = standIn();

  background(() => {
    // Configura o cenário de fundo
    authService.respondsWith({ token: "abc-123" });
    database.respondsWith(true);
  });

  scenario("Login com credenciais válidas deve retornar token", () => {
    const response = authService.login("usuario", "senha_secreta");

    to(response).have("token");
    to(response.token).be("abc-123");

    // O serviço deve ter recebido os argumentos corretos
    to(authService).received("login", "usuario", "senha_secreta"); // (exemplo simplificado)
  });

  scenario("Tentativa de login deve logar tentativa no banco", () => {
    database.logAttempt("usuario");
    to(database).wasCalled();
  });
});
```

---

### 3. 🛡️ O Imperativo (ImperativeDialect)

**Filosofia:** Baseado em Design by Contract e Engenharia de Sistemas.

Este dialeto é para quem precisa de rigor. Ele foca na verificação explícita de contratos, estados e integridade do sistema. A linguagem é autoritária e técnica, ideal para validar integrações de API, drivers de banco de dados, e conformidade com especificações (RFCs). Se você está construindo a infraestrutura que outros vão usar, este é o seu dialeto.

- **Vibe:** Técnica, Rigorosa, "Crachá de Engenheiro".

#### API Completa

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

#### Exemplo Completo

```javascript
import { ensure, check, that, stub, initAll } from "@purecore/one-spec-4-all";

ensure("Conformidade do Gateway de Pagamento", () => {
  const apiGateway = stub();

  initAll(() => {
    // Inicializa stubs de infraestrutura
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

---

## 🏛️ Tabela Rosetta (Comparativo Geral)

Use esta tabela para traduzir mentalmente conceitos do Jest para o seu dialeto escolhido.

| Conceito / Jest                | 📐 Matemático          | 📖 Narrativo          | 🛡️ Imperativo      |
| :----------------------------- | :--------------------- | :-------------------- | :----------------- |
| **Grupo** (`describe`)         | `axiom`                | `intend` / `story`    | `ensure` / `suite` |
| **Caso** (`test`)              | `proof` / `lemma`      | `detail` / `scenario` | `check` / `verify` |
| **Asserção** (`expect`)        | `implies`              | `to`                  | `that`             |
| **Criar Mock** (`jest.fn`)     | `arbitrary` / `lambda` | `dummy` / `standIn`   | `stub` / `mock`    |
| **Espionar** (`jest.spyOn`)    | `monitor`              | `watch` / `shadow`    | `inspect` / `spy`  |
| **Retorno** (`returnValue`)    | `yields`               | `respondsWith`        | `forceReturn`      |
| **Promessa** (`resolvedValue`) | `convergesTo`          | `eventuallyGives`     | `resolveWith`      |
| **Impl.** (`implementation`)   | `derive`               | `actsLike`            | `executes`         |
| **Chamado?** (`toBeCalled`)    | `wasEvaluated`         | `wasCalled`           | `triggered`        |
| **Args?** (`calledWith`)       | `appliedTo`            | `received`            | `calledWith`       |
| **Setup** (`beforeAll`)        | `postulate`            | `background`          | `initAll`          |
| **Reset** (`beforeEach`)       | `given`                | `before`              | `reset`            |
| **Teardown** (`afterAll`)      | `conclude`             | `cleanup`             | `disposeAll`       |

## 🚀 Uso Misto (Modo Poliglota)

Como todos os dialetos compartilham a mesma `AtomicCore` engine, você pode importar e misturar dialetos no mesmo arquivo se desejar expressar diferentes partes do sistema de formas diferentes.

```javascript
import { axiom, implies } from "@purecore/one-spec-4-all"; // Matemático para lógica
import { intend, to } from "@purecore/one-spec-4-all"; // Narrativo para UI

axiom("Core Logic", () => {
  // ... testes lógicos
});

intend("User Interface", () => {
  // ... testes visuais
});
```

## 🏃 Executando os Testes

O `one-spec-4-all` vem com uma CLI embutida para rodar todos os seus arquivos `.spec.ts` automaticamente.

### Via npx

Você pode executar diretamente sem instalar globalmente:

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
