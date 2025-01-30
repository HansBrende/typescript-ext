import type {Int} from "./shared.js";


type Base16NonzeroString = `${string}${1|2|3|4|5|6|7|8|9|'a'|'b'|'c'|'d'|'e'|'f'|'A'|'B'|'C'|'D'|'E'|'F'}${string}`
type Aa = 'A' | 'a'

type _IncrU16<X extends string, Z extends string, A extends Aa> =
    X extends `${infer T}f` ? _IncrU16<T, `${Z}0`, 'a'> :
    X extends `${infer T}F` ? _IncrU16<T, `${Z}0`, 'A'> :
    X extends `${infer T}9` ? `${T}${A}${Z}` :
    X extends `${infer T}8` ? `${T}9${Z}` :
    X extends `${infer T}7` ? `${T}8${Z}` :
    X extends `${infer T}6` ? `${T}7${Z}` :
    X extends `${infer T}5` ? `${T}6${Z}` :
    X extends `${infer T}4` ? `${T}5${Z}` :
    X extends `${infer T}3` ? `${T}4${Z}` :
    X extends `${infer T}2` ? `${T}3${Z}` :
    X extends `${infer T}1` ? `${T}2${Z}` :
    X extends `${infer T}0` ? `${T}1${Z}` :
    X extends `${infer T}e` ? `${T}f${Z}` :
    X extends `${infer T}d` ? `${T}e${Z}` :
    X extends `${infer T}c` ? `${T}d${Z}` :
    X extends `${infer T}b` ? `${T}c${Z}` :
    X extends `${infer T}a` ? `${T}b${Z}` :
    X extends `${infer T}E` ? `${T}F${Z}` :
    X extends `${infer T}D` ? `${T}E${Z}` :
    X extends `${infer T}C` ? `${T}D${Z}` :
    X extends `${infer T}B` ? `${T}C${Z}` :
    X extends `${infer T}A` ? `${T}B${Z}` :
    string extends X ? Int : `${X}1${Z}`

export type IncrU16<X extends string> =
    X extends `${infer T}f` ? _IncrU16<T, '0', 'a'> :
    X extends `${infer T}F` ? _IncrU16<T, '0', 'A'> :
    X extends `${infer T}9` ? string extends T ? Int : `${T}${T extends Lowercase<T> ? 'a' : 'A'}` :
    X extends `${infer T}8` ? string extends T ? Int : `${T}9` :
    X extends `${infer T}7` ? string extends T ? Int : `${T}8` :
    X extends `${infer T}6` ? string extends T ? Int : `${T}7` :
    X extends `${infer T}5` ? string extends T ? Int : `${T}6` :
    X extends `${infer T}4` ? string extends T ? Int : `${T}5` :
    X extends `${infer T}3` ? string extends T ? Int : `${T}4` :
    X extends `${infer T}2` ? string extends T ? Int : `${T}3` :
    X extends `${infer T}1` ? string extends T ? Int : `${T}2` :
    X extends `${infer T}0` ? string extends T ? Int : `${T}1` :
    X extends `${infer T}e` ? string extends T ? Int : `${T}f` :
    X extends `${infer T}d` ? string extends T ? Int : `${T}e` :
    X extends `${infer T}c` ? string extends T ? Int : `${T}d` :
    X extends `${infer T}b` ? string extends T ? Int : `${T}c` :
    X extends `${infer T}a` ? string extends T ? Int : `${T}b` :
    X extends `${infer T}E` ? string extends T ? Int : `${T}F` :
    X extends `${infer T}D` ? string extends T ? Int : `${T}E` :
    X extends `${infer T}C` ? string extends T ? Int : `${T}D` :
    X extends `${infer T}B` ? string extends T ? Int : `${T}C` :
    X extends `${infer T}A` ? string extends T ? Int : `${T}B` :
    Int


type _DecrU16<X extends string, N extends string, X0 extends string> =
    X extends `${infer T}0` ? _DecrU16<T, `${N}f`, X0> :
    X extends `${infer T}1` ? T extends '' | '0x' ? `${T}${N}` : T extends '0X' ? `${T}${Uppercase<N>}` : `${T}0${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}2` ? `${T}1${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}3` ? `${T}2${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}4` ? `${T}3${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}5` ? `${T}4${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}6` ? `${T}5${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}7` ? `${T}6${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}8` ? `${T}7${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}9` ? `${T}8${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}a` ? `${T}9${N}` :
    X extends `${infer T}b` ? `${T}a${N}` :
    X extends `${infer T}c` ? `${T}b${N}` :
    X extends `${infer T}d` ? `${T}c${N}` :
    X extends `${infer T}e` ? `${T}d${N}` :
    X extends `${infer T}f` ? `${T}e${N}` :
    X extends `${infer T}A` ? `${T}9${Uppercase<N>}` :
    X extends `${infer T}B` ? `${T}A${Uppercase<N>}` :
    X extends `${infer T}C` ? `${T}B${Uppercase<N>}` :
    X extends `${infer T}D` ? `${T}C${Uppercase<N>}` :
    X extends `${infer T}E` ? `${T}D${Uppercase<N>}` :
    X extends `${infer T}F` ? `${T}E${Uppercase<N>}` :
    string extends X ? Int : `-${X0}1`

export type DecrU16<X extends string> =
    X extends `${infer T}0` ? _DecrU16<T, 'f', T> :
    X extends `${infer T}1` ? string extends T ? Int : `${T}0` :
    X extends `${infer T}2` ? string extends T ? Int : `${T}1` :
    X extends `${infer T}3` ? string extends T ? Int : `${T}2` :
    X extends `${infer T}4` ? string extends T ? Int : `${T}3` :
    X extends `${infer T}5` ? string extends T ? Int : `${T}4` :
    X extends `${infer T}6` ? string extends T ? Int : `${T}5` :
    X extends `${infer T}7` ? string extends T ? Int : `${T}6` :
    X extends `${infer T}8` ? string extends T ? Int : `${T}7` :
    X extends `${infer T}9` ? string extends T ? Int : `${T}8` :
    X extends `${infer T}${Aa}` ? string extends T ? Int : `${T}9` :
    X extends `${infer T}b` ? string extends T ? Int : `${T}a` :
    X extends `${infer T}c` ? string extends T ? Int : `${T}b` :
    X extends `${infer T}d` ? string extends T ? Int : `${T}c` :
    X extends `${infer T}e` ? string extends T ? Int : `${T}d` :
    X extends `${infer T}f` ? string extends T ? Int : `${T}e` :
    X extends `${infer T}B` ? string extends T ? Int : `${T}A` :
    X extends `${infer T}C` ? string extends T ? Int : `${T}B` :
    X extends `${infer T}D` ? string extends T ? Int : `${T}C` :
    X extends `${infer T}E` ? string extends T ? Int : `${T}D` :
    X extends `${infer T}F` ? string extends T ? Int : `${T}E` :
    never


type _IncrN16<X extends string, N extends string, X0 extends string> =
    X extends `${infer T}0` ? _IncrN16<T, `${N}f`, X0> :
    X extends `${infer T}1` ? T extends '' | '0x' ? `-${T}${N}` : T extends '0X' ? `-${T}${Uppercase<N>}` : `-${T}0${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}2` ? `-${T}1${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}3` ? `-${T}2${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}4` ? `-${T}3${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}5` ? `-${T}4${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}6` ? `-${T}5${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}7` ? `-${T}6${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}8` ? `-${T}7${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}9` ? `-${T}8${T extends Lowercase<T> ? N : Uppercase<N>}` :
    X extends `${infer T}a` ? `-${T}9${N}` :
    X extends `${infer T}b` ? `-${T}a${N}` :
    X extends `${infer T}c` ? `-${T}b${N}` :
    X extends `${infer T}d` ? `-${T}c${N}` :
    X extends `${infer T}e` ? `-${T}d${N}` :
    X extends `${infer T}f` ? `-${T}e${N}` :
    X extends `${infer T}A` ? `-${T}9${Uppercase<N>}` :
    X extends `${infer T}B` ? `-${T}A${Uppercase<N>}` :
    X extends `${infer T}C` ? `-${T}B${Uppercase<N>}` :
    X extends `${infer T}D` ? `-${T}C${Uppercase<N>}` :
    X extends `${infer T}E` ? `-${T}D${Uppercase<N>}` :
    X extends `${infer T}F` ? `-${T}E${Uppercase<N>}` :
    `${X0}1`

export type IncrN16<X extends string> =
    X extends `${infer T}0` ? _IncrN16<T, 'f', T> :
    X extends `${infer T}1` ? T extends Base16NonzeroString ? `-${T}0` : `${T}0` :
    X extends `${infer T}2` ? `-${T}1` :
    X extends `${infer T}3` ? `-${T}2` :
    X extends `${infer T}4` ? `-${T}3` :
    X extends `${infer T}5` ? `-${T}4` :
    X extends `${infer T}6` ? `-${T}5` :
    X extends `${infer T}7` ? `-${T}6` :
    X extends `${infer T}8` ? `-${T}7` :
    X extends `${infer T}9` ? `-${T}8` :
    X extends `${infer T}${Aa}` ? `-${T}9` :
    X extends `${infer T}b` ? `-${T}a` :
    X extends `${infer T}c` ? `-${T}b` :
    X extends `${infer T}d` ? `-${T}c` :
    X extends `${infer T}e` ? `-${T}d` :
    X extends `${infer T}f` ? `-${T}e` :
    X extends `${infer T}B` ? `-${T}A` :
    X extends `${infer T}C` ? `-${T}B` :
    X extends `${infer T}D` ? `-${T}C` :
    X extends `${infer T}E` ? `-${T}D` :
    X extends `${infer T}F` ? `-${T}E` :
    never
