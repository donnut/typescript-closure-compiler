// class A implements C
class A implements C {
  // a: number
  a: number;

  // static b: number
  static b: number;

  // c(a: number): boolean
  c(a: number): boolean { return false; }

  // static d(a: number): boolean
  static d(a: number): boolean { return false; }
}

// class B extends A
class B extends A {
  // constructor()
  constructor() { super(); }
}

// interface A
interface C {
  // a: number
  a: number;

  // c(a: number): boolean
  c(a: number): boolean;
}
