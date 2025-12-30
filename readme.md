# 🌐 one-spec-4-all

> One Runner to Rule Them All.

A **one-spec-4-all** é uma biblioteca de testes inovadora que desacopla a lógica de execução da semântica de escrita. Acreditamos que a linguagem usada nos testes deve refletir a natureza do problema que está sendo resolvido.

Testar um algoritmo matemático complexo exige um vocabulário diferente de testar um fluxo de usuário em uma interface gráfica. O **one-spec-4-all** permite que você escolha o dialeto certo para o trabalho, ou misture todos eles.

## 🎭 Os Dialetos

Abaixo explicamos o "Porquê" de cada idioma e listamos sua API completa.

### 1. 📐 O Matemático (MathDialect)

**Filosofia:** Baseado em Lógica Formal e Programação Funcional.

Use este dialeto quando estiver testando algoritmos puros, cálculos financeiros, regras de negócio complexas ou invariantes de sistema. O teste é visto como uma prova de uma verdade universal.

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

#### Exemplo

```javascript
import { axiom, proof, implies, arbitrary } from "one-spec-4-all-tester";

axiom("Teoria dos Números", () => {
  const fib = arbitrary();
  fib.derive((n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2)));

  proof("Fibonacci(2) implica 1", () => {
    implies(fib(2)).is(1);
  });
});
```

---

### 2. 📖 O Narrativo (NarrativeDialect)

**Filosofia:** Baseado em BDD (Behavior Driven Development) e Storytelling.

Use este dialeto para testes de aceitação, fluxos de usuário (E2E) ou quando o código precisa servir como documentação legível para não-programadores (PMs, Designers).

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

#### Exemplo

```javascript
import { intend, detail, to, standIn } from "one-spec-4-all-tester";

intend("Sistema de Login", () => {
  const authService = standIn();
  authService.respondsWith(true);

  detail("o usuário deve conseguir entrar", () => {
    authService("user", "pass");
    to(authService).received("user", "pass");
  });
});
```

---

### 3. 🛡️ O Imperativo (ImperativeDialect)

**Filosofia:** Baseado em Design by Contract e Engenharia de Sistemas.

Use para testes de integração, validação de APIs, verificação de tipos e sistemas onde a segurança e a conformidade (compliance) são prioritárias.

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

#### Exemplo

```javascript
import { ensure, check, that, stub } from "one-spec-4-all-tester";

ensure("Integração de Gateway de Pagamento", () => {
  const api = stub();
  api.forceReturn(200);

  check("resposta respeita contrato v1", () => {
    const status = api();
    that(status).is(200);
    that(api).triggered();
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
import { axiom, implies } from "one-spec-4-all-tester"; // Matemático para lógica
import { intend, to } from "one-spec-4-all-tester"; // Narrativo para UI

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
