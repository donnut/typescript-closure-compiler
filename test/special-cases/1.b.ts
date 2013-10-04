// The TypeScript 0.9.1-1 compiler stores the symbol in "A" and not "A<void>" here
class D implements A<void> {
  a(b: B): void {
  }
}
