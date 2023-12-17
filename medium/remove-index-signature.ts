type RemoveIndexSignature<T> = {
    [K in keyof T as {} extends Record<K, 1> ? never : K]: T[K]
}


// type Foo = {
//     [key: string]: any
//     foo(): void
// }


// type Bar = {
//     [key: number]: any
//     bar(): void
//     0: string
// }
  
// const foobar = Symbol('foobar')

// type FooBar = {
//     [key: symbol]: any
//     [foobar](): void
// }
  
// type Baz = {
//     bar(): void
//     baz: string
// }
  
// type A = RemoveIndexSignature<Foo> // expected { foo(): void }