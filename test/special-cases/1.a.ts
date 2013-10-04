interface A<T> {
  a(b: B): T;
}

class B {
  c<T>(d: A<T>): void {
  }
}

class C {
  e(b: B): void {
    b.c(new D());
  }
}
