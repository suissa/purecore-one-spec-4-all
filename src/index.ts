// ============================================================================
// 1. ATOMIC CORE ENGINE (O Motor)
// ============================================================================

type VoidFn = () => void | Promise<void>;
type HookType = "beforeAll" | "afterAll" | "beforeEach" | "afterEach";

interface SuiteNode {
  name: string;
  tests: { name: string; fn: VoidFn }[];
  hooks: Record<HookType, VoidFn[]>;
  parent?: SuiteNode;
}

class AtomicCore {
  private static instance: AtomicCore;
  private rootSuite: SuiteNode = {
    name: "ROOT",
    tests: [],
    hooks: { beforeAll: [], afterAll: [], beforeEach: [], afterEach: [] },
  };
  private currentSuite: SuiteNode = this.rootSuite;

  static get() {
    if (!AtomicCore.instance) AtomicCore.instance = new AtomicCore();
    return AtomicCore.instance;
  }

  // --- Atomic Actions ---

  defineGroup(name: string, fn: VoidFn) {
    const parent = this.currentSuite;
    const newSuite: SuiteNode = {
      name,
      tests: [],
      hooks: { beforeAll: [], afterAll: [], beforeEach: [], afterEach: [] },
      parent,
    };

    // Simulação de execução imediata para registro (estilo Jest)
    this.currentSuite = newSuite;
    console.log(`\n📂 [GROUP] ${name}`);
    try {
      fn();
    } finally {
      this.currentSuite = parent;
    }
  }

  defineCase(name: string, fn: VoidFn) {
    console.log(`  └─ 📝 [CASE] ${name}`);
    // Em um runner real, guardaríamos para rodar depois. Aqui executamos para demo.
    this.runTestSafe(name, fn);
  }

  addHook(type: HookType, fn: VoidFn) {
    this.currentSuite.hooks[type].push(fn);
  }

  // --- Internal Runner Logic ---

  private async runTestSafe(name: string, fn: VoidFn) {
    try {
      // Run BeforeEach hooks (simplified)
      this.currentSuite.hooks.beforeEach.forEach((h) => h());

      await fn();
      console.log(`     ✅ PASS`);

      // Run AfterEach hooks (simplified)
      this.currentSuite.hooks.afterEach.forEach((h) => h());
    } catch (e) {
      console.error(`     ❌ FAIL: ${(e as Error).message}`);
    }
  }
}

const core = AtomicCore.get();

// ============================================================================
// 2. UNIVERSAL MOCK (O Ator/Dublê)
// ============================================================================

class UniversalMockHandler {
  public calls: any[][] = [];
  private impl: ((...args: any[]) => any) | null = null;
  private defaultReturn: any = undefined;
  private isResolved: boolean = false;

  constructor(originalImpl?: (...args: any[]) => any) {
    this.impl = originalImpl || null;
  }

  // O método que é chamado quando alguém invoca o mock
  invoke(...args: any[]) {
    this.calls.push(args);
    if (this.impl) return this.impl(...args);
    if (this.isResolved) return Promise.resolve(this.defaultReturn);
    return this.defaultReturn;
  }

  // --- Setup Methods (Aliases Internos) ---
  setReturn(val: any) {
    this.defaultReturn = val;
    this.isResolved = false;
  }
  setResolved(val: any) {
    this.defaultReturn = val;
    this.isResolved = true;
  }
  setImplementation(fn: any) {
    this.impl = fn;
  }
}

// A função mágica que é ao mesmo tempo executável e configurável
function createAtomicMock(implementation?: (...args: any[]) => any) {
  const handler = new UniversalMockHandler(implementation);

  const mockFn = (...args: any[]) => handler.invoke(...args);

  // Anexamos a instância do handler na função para podermos inspecionar/configurar
  (mockFn as any)._handler = handler;

  // Mapeamento de TODOS os métodos de configuração de mocks da tabela
  const config = {
    // Jest
    mockReturnValue: (v: any) => handler.setReturn(v),
    mockResolvedValue: (v: any) => handler.setResolved(v),
    mockImplementation: (fn: any) => handler.setImplementation(fn),

    // Matemático
    yields: (v: any) => handler.setReturn(v),
    convergesTo: (v: any) => handler.setResolved(v),
    derive: (fn: any) => handler.setImplementation(fn),

    // Narrativo
    respondsWith: (v: any) => handler.setReturn(v),
    eventuallyGives: (v: any) => handler.setResolved(v),
    actsLike: (fn: any) => handler.setImplementation(fn),

    // Imperativo
    forceReturn: (v: any) => handler.setReturn(v),
    resolveWith: (v: any) => handler.setResolved(v),
    executes: (fn: any) => handler.setImplementation(fn),
  };

  return Object.assign(mockFn, config);
}

function createAtomicSpy(obj: any, method: string) {
  const original = obj[method];
  const mock = createAtomicMock(original);
  obj[method] = mock;
  return mock; // Retorna o mock para asserções
}

// ============================================================================
// 3. UNIVERSAL ASSERTION (O Juiz)
// ============================================================================

class UniversalAssertion<T> {
  constructor(private actual: T, private isNegated: boolean = false) {}

  get not() {
    return new UniversalAssertion(this.actual, !this.isNegated);
  }

  private pass(condition: boolean, msg: string) {
    const success = this.isNegated ? !condition : condition;
    if (!success) throw new Error(this.isNegated ? `[NOT] ${msg}` : msg);
  }

  // --- Equality & Truthiness ---

  // Jest / Classic
  toBe(expected: T) {
    this.pass(
      this.actual === expected,
      `Expected ${this.actual} to be ${expected}`
    );
  }
  toEqual(expected: T) {
    this.pass(
      JSON.stringify(this.actual) === JSON.stringify(expected),
      `Expected ${this.actual} to equal ${expected}`
    );
  }

  // Matemático
  is(expected: T) {
    this.toBe(expected);
  } // Alias

  // Imperativo
  isOk() {
    this.pass(!!this.actual, `Ensure ${this.actual} is truthy`);
  }
  matches(regex: RegExp) {
    if (typeof this.actual !== "string")
      throw new Error("Value must be string");
    this.pass(
      regex.test(this.actual),
      `Ensure '${this.actual}' matches ${regex}`
    );
  }

  // Narrativo
  have(prop: string) {
    this.pass(
      typeof this.actual === "object" &&
        this.actual !== null &&
        prop in (this.actual as any),
      `Intend object to have '${prop}'`
    );
  }

  // --- Mock Assertions ---

  // Helper para pegar o handler do mock
  private getMockHandler(mockFn: any) {
    if (!mockFn._handler)
      throw new Error(
        "Assertion target is not a registered Mock/Spy function."
      );
    return mockFn._handler as UniversalMockHandler;
  }

  // Jest
  toHaveBeenCalled() {
    const h = this.getMockHandler(this.actual);
    this.pass(h.calls.length > 0, "Expected mock to have been called");
  }
  toHaveBeenCalledWith(...args: any[]) {
    const h = this.getMockHandler(this.actual);
    const match = h.calls.some(
      (call) => JSON.stringify(call) === JSON.stringify(args)
    );
    this.pass(match, `Expected mock called with ${JSON.stringify(args)}`);
  }
  toHaveBeenCalledTimes(n: number) {
    const h = this.getMockHandler(this.actual);
    this.pass(
      h.calls.length === n,
      `Expected mock called ${n} times, got ${h.calls.length}`
    );
  }

  // Matemático
  wasEvaluated() {
    this.toHaveBeenCalled();
  }
  appliedTo(...args: any[]) {
    this.toHaveBeenCalledWith(...args);
  }
  get evaluated() {
    const h = this.getMockHandler(this.actual);
    return (n: number) => ({ times: this.toHaveBeenCalledTimes(n) }); // Currying simulado para sintaxe .evaluated(n).times
  }

  // Narrativo
  wasCalled() {
    this.toHaveBeenCalled();
  }
  received(...args: any[]) {
    this.toHaveBeenCalledWith(...args);
  }
  get called() {
    const h = this.getMockHandler(this.actual);
    return (n: number) => ({ times: this.toHaveBeenCalledTimes(n) });
  }

  // Imperativo
  triggered() {
    this.toHaveBeenCalled();
  }
  calledWith(...args: any[]) {
    this.toHaveBeenCalledWith(...args);
  }
  triggeredCount(n: number) {
    this.toHaveBeenCalledTimes(n);
  }
}

// Factory para assertions
const assertValue = <T>(val: T) => new UniversalAssertion(val);

// ============================================================================
// 4. DIALECT EXPORTS (A Pedra de Roseta)
// ============================================================================

// --- 📐 MATEMÁTICO (MathDialect) ---
export const MathDialect = {
  // Structure
  axiom: (n: string, f: VoidFn) => core.defineGroup(n, f),
  proof: (n: string, f: VoidFn) => core.defineCase(n, f),
  implies: assertValue,

  // Mocks (Creation)
  arbitrary: createAtomicMock,
  lambda: createAtomicMock,
  monitor: createAtomicSpy,

  // Lifecycle
  postulate: (f: VoidFn) => core.addHook("beforeAll", f),
  conclude: (f: VoidFn) => core.addHook("afterAll", f),
  given: (f: VoidFn) => core.addHook("beforeEach", f),
};

// --- 📖 NARRATIVO (NarrativeDialect) ---
export const NarrativeDialect = {
  // Structure
  intend: (n: string, f: VoidFn) => core.defineGroup(n, f),
  story: (n: string, f: VoidFn) => core.defineGroup(n, f),
  detail: (n: string, f: VoidFn) => core.defineCase(n, f),
  scenario: (n: string, f: VoidFn) => core.defineCase(n, f),
  to: assertValue,

  // Mocks (Creation)
  dummy: createAtomicMock,
  standIn: createAtomicMock,
  watch: createAtomicSpy,
  shadow: createAtomicSpy,

  // Lifecycle
  background: (f: VoidFn) => core.addHook("beforeAll", f),
  cleanup: (f: VoidFn) => core.addHook("afterAll", f),
  before: (f: VoidFn) => core.addHook("beforeEach", f),
};

// --- 🛡️ IMPERATIVO (ImperativeDialect) ---
export const ImperativeDialect = {
  // Structure
  ensure: (n: string, f: VoidFn) => core.defineGroup(n, f),
  suite: (n: string, f: VoidFn) => core.defineGroup(n, f),
  check: (n: string, f: VoidFn) => core.defineCase(n, f),
  verify: (n: string, f: VoidFn) => core.defineCase(n, f),
  that: assertValue,

  // Mocks (Creation)
  stub: createAtomicMock,
  mock: createAtomicMock,
  inspect: createAtomicSpy,
  spy: createAtomicSpy,

  // Lifecycle
  initAll: (f: VoidFn) => core.addHook("beforeAll", f),
  disposeAll: (f: VoidFn) => core.addHook("afterAll", f),
  reset: (f: VoidFn) => core.addHook("beforeEach", f),
};

// --- 🤡 JEST / CLASSIC ---
export const ClassicDialect = {
  describe: (n: string, f: VoidFn) => core.defineGroup(n, f),
  it: (n: string, f: VoidFn) => core.defineCase(n, f),
  test: (n: string, f: VoidFn) => core.defineCase(n, f),
  expect: assertValue,

  // Objeto Jest Global (simulado)
  jest: {
    fn: createAtomicMock,
    spyOn: createAtomicSpy,
  },

  beforeAll: (f: VoidFn) => core.addHook("beforeAll", f),
  afterAll: (f: VoidFn) => core.addHook("afterAll", f),
  beforeEach: (f: VoidFn) => core.addHook("beforeEach", f),
  afterEach: (f: VoidFn) => core.addHook("afterEach", f),
};

// End of library exports
