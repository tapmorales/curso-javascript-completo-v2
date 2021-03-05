type ArrUniqueTypes<T> = T[]

const teste: ArrUniqueTypes<string> = ["1", "2"]
const teste2: ArrUniqueTypes<number | boolean> = [20, 30, false]

const arrNumber: number[] = [1, 2, 3, 4]
const arrNumber2: Array<number> = [3, 4, 5, 6]