type Generic<T extends string> = {
    name: T
}

type Custom = {
    age: number
}& string
