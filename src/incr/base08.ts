import type {Int} from "./shared.js";


type Base8Prefix = '' | '0o' | '0O'
type Base8NonzeroString = `${string}${1|2|3|4|5|6|7}${string}`

type _IncrU08<X extends string, Z extends string> =
    X extends `${infer T}7` ? _IncrU08<T, `${Z}0`> :
    X extends `${infer T}6` ? `${T}7${Z}` :
    X extends `${infer T}5` ? `${T}6${Z}` :
    X extends `${infer T}4` ? `${T}5${Z}` :
    X extends `${infer T}3` ? `${T}4${Z}` :
    X extends `${infer T}2` ? `${T}3${Z}` :
    X extends `${infer T}1` ? `${T}2${Z}` :
    X extends `${infer T}0` ? `${T}1${Z}` :
    string extends X ? Int : `${X}1${Z}`

export type IncrU08<X extends string> =
    X extends `${infer T}7` ? _IncrU08<T, '0'> :
    X extends `${infer T}6` ? string extends T ? Int : `${T}7` :
    X extends `${infer T}5` ? string extends T ? Int : `${T}6` :
    X extends `${infer T}4` ? string extends T ? Int : `${T}5` :
    X extends `${infer T}3` ? string extends T ? Int : `${T}4` :
    X extends `${infer T}2` ? string extends T ? Int : `${T}3` :
    X extends `${infer T}1` ? string extends T ? Int : `${T}2` :
    X extends `${infer T}0` ? string extends T ? Int : `${T}1` :
    Int


type _DecrU08<X extends string, N extends string, X0 extends string> =
    X extends `${infer T}0` ? _DecrU08<T, `${N}7`, X0> :
    X extends `${infer T}1` ? T extends Base8Prefix ? `${T}${N}` : `${T}0${N}` :
    X extends `${infer T}2` ? `${T}1${N}` :
    X extends `${infer T}3` ? `${T}2${N}` :
    X extends `${infer T}4` ? `${T}3${N}` :
    X extends `${infer T}5` ? `${T}4${N}` :
    X extends `${infer T}6` ? `${T}5${N}` :
    X extends `${infer T}7` ? `${T}6${N}` :
    string extends X ? Int : `-${X0}1`

export type DecrU08<X extends string> =
    X extends `${infer T}0` ? _DecrU08<T, '7', T> :
    X extends `${infer T}1` ? string extends T ? Int : `${T}0` :
    X extends `${infer T}2` ? string extends T ? Int : `${T}1` :
    X extends `${infer T}3` ? string extends T ? Int : `${T}2` :
    X extends `${infer T}4` ? string extends T ? Int : `${T}3` :
    X extends `${infer T}5` ? string extends T ? Int : `${T}4` :
    X extends `${infer T}6` ? string extends T ? Int : `${T}5` :
    X extends `${infer T}7` ? string extends T ? Int : `${T}6` :
    never


type _IncrN08<X extends string, N extends string, X0 extends string> =
    X extends `${infer T}0` ? _IncrN08<T, `${N}7`, X0> :
    X extends `${infer T}1` ? T extends Base8Prefix ? `-${T}${N}` : `-${T}0${N}` :
    X extends `${infer T}2` ? `-${T}1${N}` :
    X extends `${infer T}3` ? `-${T}2${N}` :
    X extends `${infer T}4` ? `-${T}3${N}` :
    X extends `${infer T}5` ? `-${T}4${N}` :
    X extends `${infer T}6` ? `-${T}5${N}` :
    X extends `${infer T}7` ? `-${T}6${N}` :
    `${X0}1`

export type IncrN08<X extends string> =
    X extends `${infer T}0` ? _IncrN08<T, '7', T> :
    X extends `${infer T}1` ? T extends Base8NonzeroString ? `-${T}0` : `${T}0` :
    X extends `${infer T}2` ? `-${T}1` :
    X extends `${infer T}3` ? `-${T}2` :
    X extends `${infer T}4` ? `-${T}3` :
    X extends `${infer T}5` ? `-${T}4` :
    X extends `${infer T}6` ? `-${T}5` :
    X extends `${infer T}7` ? `-${T}6` :
    never
