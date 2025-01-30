
// https://github.com/Microsoft/TypeScript/issues/27024
// https://github.com/type-challenges/type-challenges/blob/main/utils/index.d.ts
// https://stackoverflow.com/a/75699960/2599133
// https://stackoverflow.com/a/68963796/2599133
// noinspection BadExpressionStatementJS


// Alternative ideas: Bra/Ket (might be too obscure), Ping/Pong (might be too overloaded)
export type Zig<X> = <T>() => T extends X ? 0 : 1
export type Zag<Y> = <T>() => T extends Y ? 0 : 1

type ERROR_TAG = {readonly ERROR: unique symbol}['ERROR']
export type Is<Actual, Expected> = Zig<Actual> extends Zag<Expected> ? 0 : {[_ in ERROR_TAG]: {actual: Actual, expected: Expected}};
export type IsNot<X, Y> = Zig<X> extends Zag<Y> ? {[_ in ERROR_TAG]: {identical: [X, Y]}} : 0;

0 satisfies Is<0, 0>
0 satisfies IsNot<0, 1>
// @ts-expect-error
0 satisfies IsNot<0, 0>
// @ts-expect-error
0 satisfies Is<0, 1>

({} as {[_ in ERROR_TAG]: {actual: 0, expected: 1}}) satisfies Is<0, 1>
({} as {[_ in ERROR_TAG]: {identical: [0, 0]}}) satisfies IsNot<0, 0>
// @ts-expect-error
({} as {[_ in ERROR_TAG]: never}) satisfies Is<0, 0>
// @ts-expect-error
({} as {[_ in ERROR_TAG]: never}) satisfies IsNot<0, 1>

0 satisfies Is<0, 0> & Is<1, 1>
0 satisfies IsNot<0, 1> & IsNot<1, 0>
// @ts-expect-error
0 satisfies IsNot<0, 0> & IsNot<1, 1>
// @ts-expect-error
0 satisfies Is<0, 1> & Is<1, 0>
// @ts-expect-error
0 satisfies Is<0, 0> & IsNot<0, 0>
// @ts-expect-error
0 satisfies Is<0, 1> & IsNot<0, 1>

0 satisfies IsNot<number, string>
0 satisfies Is<1, 1>
0 satisfies IsNot<any, 1>
0 satisfies IsNot<1 | 2, 1>
0 satisfies Is<[1, 2, 3] extends [infer H, ...any] ? H : never, 1>
0 satisfies IsNot<[1, 2, 3] extends [infer H, ...any] ? H : never, 2>
0 satisfies IsNot<any, never>
0 satisfies IsNot<[any], [number]>
0 satisfies IsNot<{x:1} & {y:2}, {x:1, y:2}>

// @ts-expect-error
// Typescript bug. See: https://github.com/microsoft/TypeScript/issues/27024#issuecomment-2619895045
0 satisfies Is<`${string & {tag: string}}`, `${string & {tag: string}}`>

// @ts-expect-error
// Typescript bug. See: https://github.com/microsoft/TypeScript/issues/57918
0 satisfies Is<`${'abc' & { a: 1 }}`, `${'abc' & { a: 1 }}`>
