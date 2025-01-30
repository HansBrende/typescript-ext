// noinspection BadExpressionStatementJS

import type {Is} from "../testing.js";
import type {Int} from "./shared.js";

type Base2Prefix = '' | '0b' | '0B'
type Base2NonzeroString = `${string}1${string}`

type _IncrU02<X extends string, Z extends string> =
    X extends `${infer T}1` ? _IncrU02<T, `${Z}0`> :
    X extends `${infer T}0` ? `${T}1${Z}` :
    string extends X ? Int : `${X}1${Z}`

export type IncrU02<X extends string> =
    X extends `${infer T}1` ? _IncrU02<T, '0'> :
    X extends `${infer T}0` ? string extends T ? Int : `${T}1` :
    Int


type _DecrU02<X extends string, N extends string, X0 extends string> =
    X extends `${infer T}0` ? _DecrU02<T, `${N}1`, X0> :
    X extends `${infer T}1` ? T extends Base2Prefix ? `${T}${N}` : `${T}0${N}` :
    string extends X ? Int : `-${X0}1`

export type DecrU02<X extends string> =
    X extends `${infer T}0` ? _DecrU02<T, '1', T> :
    X extends `${infer T}1` ? string extends T ? Int : `${T}0` :
    never


type _IncrN02<X extends string, N extends string, X0 extends string> =
    X extends `${infer T}0` ? _IncrN02<T, `${N}1`, X0> :
    X extends `${infer T}1` ? T extends Base2Prefix ? `-${T}${N}` : `-${T}0${N}` :
    `${X0}1` // incr -0 === 1

export type IncrN02<X extends string> =
    X extends `${infer T}0` ? _IncrN02<T, '1', T> :
    X extends `${infer T}1` ? T extends Base2NonzeroString ? `-${T}0` : `${T}0` :
    never


type SafeIncrN02<N extends string> =
    N extends `${'0b' | '0B'}${string}` ? IncrN02<N> : `0b${N}` extends Int ? IncrN02<N> : Int

type SafeDecrU02<U extends string> =
    U extends `${'0b' | '0B'}${string}` ? DecrU02<U> : `0b${U}` extends Int ? DecrU02<U> : Int

type Incr<X extends Int> = X extends `-${infer N}` ? SafeIncrN02<N> : IncrU02<X>
type Decr<X extends Int> = X extends `-${string}` ? IncrU02<X> : SafeDecrU02<X>


type Inc<Prev extends Decr<N> & Int, N extends Int, Next extends Incr<N> & Int> = 0 extends Is<Decr<N>, Prev> & Is<Incr<N>, Next> ? true : Is<Decr<N>, Prev> & Is<Incr<N>, Next>


true satisfies Inc<'-1', '-0', '1'>
true satisfies Inc<'-0b1', '-0b0', '0b1'>
true satisfies Inc<'-0B1', '-0B0', '0B1'>
true satisfies Inc<'-0b01', '-0b00', '0b01'>
true satisfies Inc<'-0b001', '-0b000', '0b001'>
true satisfies Inc<'-1', '0', '1'>
true satisfies Inc<'-0b1', '0b0', '0b1'>
true satisfies Inc<'-0B1', '0B0', '0B1'>
true satisfies Inc<'-0b01', '0b00', '0b01'>
true satisfies Inc<'-0b001', '0b000', '0b001'>
true satisfies Inc<'-10', '-1', '0'>
true satisfies Inc<'-0b10', '-0b1', '0b0'>
true satisfies Inc<'-0B10', '-0B1', '0B0'>
true satisfies Inc<'-0b10', '-0b01', '0b00'>
true satisfies Inc<'-0b010', '-0b001', '0b000'>
true satisfies Inc<'0', '1', '10'>
true satisfies Inc<'0b0', '0b1', '0b10'>
true satisfies Inc<'0B0', '0B1', '0B10'>
true satisfies Inc<'0b00', '0b01', '0b10'>
true satisfies Inc<'0b000', '0b001', '0b010'>
true satisfies Inc<'-11', '-10', '-1'>
true satisfies Inc<'-0b11', '-0b10', '-0b1'>
true satisfies Inc<'-0B11', '-0B10', '-0B1'>
true satisfies Inc<'-0b011', '-0b010', '-0b001'>
true satisfies Inc<'-0b0011', '-0b0010', '-0b0001'>
true satisfies Inc<'1', '10', '11'>
true satisfies Inc<'0b1', '0b10', '0b11'>
true satisfies Inc<'0B1', '0B10', '0B11'>
true satisfies Inc<'0b001', '0b010', '0b011'>
true satisfies Inc<'0b0001', '0b0010', '0b0011'>
true satisfies Inc<'-100', '-11', '-10'>
true satisfies Inc<'-0b100', '-0b11', '-0b10'>
true satisfies Inc<'-0B100', '-0B11', '-0B10'>
true satisfies Inc<'-0b100', '-0b011', '-0b010'>
true satisfies Inc<'-0b0100', '-0b0011', '-0b0010'>
true satisfies Inc<'10', '11', '100'>
true satisfies Inc<'0b10', '0b11', '0b100'>
true satisfies Inc<'0B10', '0B11', '0B100'>
true satisfies Inc<'0b010', '0b011', '0b100'>
true satisfies Inc<'0b0010', '0b0011', '0b0100'>
true satisfies Inc<'-101', '-100', '-11'>
true satisfies Inc<'-0b101', '-0b100', '-0b11'>
true satisfies Inc<'-0B101', '-0B100', '-0B11'>
true satisfies Inc<'-0b0101', '-0b0100', '-0b0011'>
true satisfies Inc<'-0b00101', '-0b00100', '-0b00011'>
true satisfies Inc<'11', '100', '101'>
true satisfies Inc<'0b11', '0b100', '0b101'>
true satisfies Inc<'0B11', '0B100', '0B101'>
true satisfies Inc<'0b0011', '0b0100', '0b0101'>
true satisfies Inc<'0b00011', '0b00100', '0b00101'>

type Tag = {t?: string}

true satisfies Inc<never, never, never>
true satisfies Inc<Int, any, Int>
true satisfies Inc<Int, `${any}`, Int>
true satisfies Inc<Int, Int, Int>


true satisfies Inc<Int, `${any}` & Tag, Int>
true satisfies Inc<Int, `${bigint}` & Tag, Int>
true satisfies Inc<Int, `${bigint & Tag}`, Int>
true satisfies Inc<Int, `${bigint & Tag}` & Tag, Int>

true satisfies Inc<Int, '0' & Tag, Int>
true satisfies Inc<Int, '1' & Tag, Int>
true satisfies Inc<Int, '-0' & Tag, Int>
true satisfies Inc<Int, '-1' & Tag, Int>

true satisfies Inc<Int, '111111' & Tag, Int>
true satisfies Inc<Int, '-111111' & Tag, Int>

true satisfies Inc<Int, '100000' & Tag, Int>
true satisfies Inc<Int, '-100000' & Tag, Int>


true satisfies Inc<Int, `${0n & Tag}`, Int>
true satisfies Inc<Int, `${0n & Tag}` & Tag, Int>

true satisfies Inc<Int, `${any}` & {}, Int>
true satisfies Inc<Int, Int & {}, Int>
true satisfies Inc<Int, `${bigint & {}}`, Int>
true satisfies Inc<Int, `${bigint & {}}` & {}, Int>
true satisfies Inc<'-1', `${0n}` & {}, '1'>
true satisfies Inc<'-1', `${0n & {}}`, '1'>
true satisfies Inc<'-1', `${0n & {}}` & {}, '1'>
true satisfies Inc<'0', `${1n}` & {}, '10'>
true satisfies Inc<'0', `${1n & {}}`, '10'>
true satisfies Inc<'0', `${1n & {}}` & {}, '10'>

true satisfies Inc<Int, Int & `${string}000`, Int>
true satisfies Inc<Int, Int & `${string}001`, Int>
true satisfies Inc<Int, Int & `-${string}000`, Int>
true satisfies Inc<Int, Int & `-${string}001`, Int>
true satisfies Inc<Int, Int & `${string}110`, Int>
true satisfies Inc<Int, Int & `${string}111`, Int>
true satisfies Inc<Int, Int & `-${string}110`, Int>
true satisfies Inc<Int, Int & `-${string}111`, Int>
true satisfies Inc<Int, `${any}` & `${string}000`, Int>
true satisfies Inc<Int, `${any}` & `${string}001`, Int>
true satisfies Inc<Int, `${any}` & `-${string}000`, Int>
true satisfies Inc<Int, `${any}` & `-${string}001`, Int>
true satisfies Inc<Int, `${any}` & `${string}110`, Int>
true satisfies Inc<Int, `${any}` & `${string}111`, Int>
true satisfies Inc<Int, `${any}` & `-${string}110`, Int>
true satisfies Inc<Int, `${any}` & `-${string}111`, Int>

true satisfies Inc<Int, '9000', '9001'>
true satisfies Inc<Int, '9001', '9010'>
true satisfies Inc<'-9001', '-9000', Int>
true satisfies Inc<'-9010', '-9001', Int>
true satisfies Inc<'-0xb010', '-0xb001', Int>
true satisfies Inc<Int, '9110', '9111'>
true satisfies Inc<Int, '9111', '91000'>
true satisfies Inc<'-9111', '-9110', Int>
true satisfies Inc<'-91000', '-9111', Int>

/*
const results = [];
for (let i = 0; i <= 4; i++) {
    for (const sign of [-1, 1]) {
        const n = sign * i;
        const prevN = n - 1;
        const nextN = n + 1;
        for (const prefix of ['', '0b', '0B', '0b0', '0b00']) {
            const unsignedStr = Math.abs(n).toString(2);
            const str = (Math.sign(1/n) === -1 ? '-' : '') + prefix + unsignedStr;
            const unsignedPrev = Math.abs(prevN).toString(2);
            const prevStr = (prevN < 0 ? '-' : '') + (
                prefix.endsWith('0') && unsignedPrev.length > unsignedStr.length ? prefix.substring(0, prefix.length - 1) :
                prefix.endsWith('0') && unsignedPrev.length < unsignedStr.length ? prefix + '0' : prefix
            ) + unsignedPrev;
            const unsignedNext = Math.abs(nextN).toString(2);
            const nextStr = (nextN < 0 ? '-' : '') + (
                prefix.endsWith('0') && unsignedNext.length > unsignedStr.length ? prefix.substring(0, prefix.length - 1) :
                prefix.endsWith('0') && unsignedNext.length < unsignedStr.length ? prefix + '0' : prefix
            ) + unsignedNext;
            results.push(`true satisfies Inc<'${prevStr}', '${str}', '${nextStr}'>`);
            // results.push(`true satisfies Is<Decr<'${str}'>, '${prevStr}'>`, `true satisfies Is<Incr<'${str}'>, '${nextStr}'>`);
        }
    }
}
console.log(results.join('\n'));
*/
