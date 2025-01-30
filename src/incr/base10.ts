import type {Int} from "./shared.js";



type _IncrU10<X extends string, Z extends string> =
    X extends `${infer T}9` ? _IncrU10<T, `${Z}0`> :
    X extends `${infer T}8` ? `${T}9${Z}` :
    X extends `${infer T}7` ? `${T}8${Z}` :
    X extends `${infer T}6` ? `${T}7${Z}` :
    X extends `${infer T}5` ? `${T}6${Z}` :
    X extends `${infer T}4` ? `${T}5${Z}` :
    X extends `${infer T}3` ? `${T}4${Z}` :
    X extends `${infer T}2` ? `${T}3${Z}` :
    X extends `${infer T}1` ? `${T}2${Z}` :
    X extends `${infer T}0` ? `${T}1${Z}` :
    string extends X ? Int : `${X}1${Z}`

export type IncrU10<X extends string> =
    X extends `${infer T}9` ? _IncrU10<T, '0'> :
    X extends `${infer T}8` ? string extends T ? Int : `${T}9` :
    X extends `${infer T}7` ? string extends T ? Int : `${T}8` :
    X extends `${infer T}6` ? string extends T ? Int : `${T}7` :
    X extends `${infer T}5` ? string extends T ? Int : `${T}6` :
    X extends `${infer T}4` ? string extends T ? Int : `${T}5` :
    X extends `${infer T}3` ? string extends T ? Int : `${T}4` :
    X extends `${infer T}2` ? string extends T ? Int : `${T}3` :
    X extends `${infer T}1` ? string extends T ? Int : `${T}2` :
    X extends `${infer T}0` ? string extends T ? Int : `${T}1` :
    Int


type _DecrU10<X extends string, N extends string> =
    X extends `${infer T}0` ? _DecrU10<T, `${N}9`> :
    X extends `${infer T}1` ? T extends '' ? N : `${T}0${N}` :
    X extends `${infer T}2` ? `${T}1${N}` :
    X extends `${infer T}3` ? `${T}2${N}` :
    X extends `${infer T}4` ? `${T}3${N}` :
    X extends `${infer T}5` ? `${T}4${N}` :
    X extends `${infer T}6` ? `${T}5${N}` :
    X extends `${infer T}7` ? `${T}6${N}` :
    X extends `${infer T}8` ? `${T}7${N}` :
    X extends `${infer T}9` ? `${T}8${N}` :
    string extends X ? Int : '-1'

export type DecrU10<X extends string> =
    X extends `${infer T}0` ? _DecrU10<T, '9'> :
    X extends `${infer T}1` ? string extends T ? Int : `${T}0` :
    X extends `${infer T}2` ? string extends T ? Int : `${T}1` :
    X extends `${infer T}3` ? string extends T ? Int : `${T}2` :
    X extends `${infer T}4` ? string extends T ? Int : `${T}3` :
    X extends `${infer T}5` ? string extends T ? Int : `${T}4` :
    X extends `${infer T}6` ? string extends T ? Int : `${T}5` :
    X extends `${infer T}7` ? string extends T ? Int : `${T}6` :
    X extends `${infer T}8` ? string extends T ? Int : `${T}7` :
    X extends `${infer T}9` ? string extends T ? Int : `${T}8` :
    Int


type _IncrN10<X extends string, N extends string> =
    X extends `${infer T}0` ? _IncrN10<T, `${N}9`> :
    X extends `${infer T}1` ? T extends '' ? `-${N}` : `-${T}0${N}` :
    X extends `${infer T}2` ? `-${T}1${N}` :
    X extends `${infer T}3` ? `-${T}2${N}` :
    X extends `${infer T}4` ? `-${T}3${N}` :
    X extends `${infer T}5` ? `-${T}4${N}` :
    X extends `${infer T}6` ? `-${T}5${N}` :
    X extends `${infer T}7` ? `-${T}6${N}` :
    X extends `${infer T}8` ? `-${T}7${N}` :
    X extends `${infer T}9` ? `-${T}8${N}` :
    '1'

export type IncrN10<X extends string> =
    X extends `${infer T}0` ? _IncrN10<T, '9'> :
    X extends `${infer T}1` ? T extends '' ? '0' : `-${T}0` :
    X extends `${infer T}2` ? `-${T}1` :
    X extends `${infer T}3` ? `-${T}2` :
    X extends `${infer T}4` ? `-${T}3` :
    X extends `${infer T}5` ? `-${T}4` :
    X extends `${infer T}6` ? `-${T}5` :
    X extends `${infer T}7` ? `-${T}6` :
    X extends `${infer T}8` ? `-${T}7` :
    X extends `${infer T}9` ? `-${T}8` :
    Int
