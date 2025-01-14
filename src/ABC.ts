class A {
  // ...
  getB() {
    return new B();
  }
}

class B {
  // ...
  getC() {
    return new C();
  }
}

class C {
  // ...
  doSomething() {
    // Логика
  }
}

// Использование транзитивного обращения
const a = new A();
a.getB().getC().doSomething();



/**
 * 
 * Тут используется транзитивный доступ для перехода от A к C через B.
 * 
 * Что плохо:
 * Для вызова функции doSomething() на C нам нужно вызвать getB() на A,
 * а затем вызвать getC() на возвращенном объекте B. Это может привести к удлинению и
 * усложнению кода, особенно если нужно получить доступ к нескольким методам на C.
 * 
 */



/**
 * 
 * В оптимизированном коде экземпляры B и C создаются как свойства A и B соответственно.
 * И мы можем обращаться к C напрямую через B, не вызывая никаких дополнительных
 * методов. Это делает код проще и легче для чтения.
 */



class A {
  constructor() {
    this.b = new B();
  }

  getB() {
    return this.b;
  }
}

class B {
  constructor() {
    this.c = new C();
  }

  getC() {
    return this.c;
  }
}

class C {
  doSomething() {
    // Логика
  }
}

const a = new A();
a.getB().doSomething();