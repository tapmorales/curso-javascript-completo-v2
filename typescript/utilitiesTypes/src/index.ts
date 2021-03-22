//Partial

type Square = {
    x: number,
    y: number,
    width: number,
    height: number
}

type UpdateSquare = (a: Square, b: Partial<Square>) => Square

const square: Square = {
    x: 10,
    y: 20,
    width: 100,
    height: 200
}

// const square2: Partial<Square> = { x: 30 }


const updateSquare: UpdateSquare = (a, b) => {
    return Object.assign({}, a, b)
}

const square3 = updateSquare(square, { x: 70 })

console.log(square)
// console.log(square2)
console.log(square3)


//Pick
type Position = Pick<Square, "x" | "y">
const position: Position = {
    x: 20,
    y: 50
}

// Omit
type Size = Omit<Square, "x" | "y">
const size: Size = {
    width: 200,
    height: 300
}


// Exclude<T, U>
type SquareColor = "red" | "blue" | "green" | "black" | "white"

type SaturatedColor = Exclude<SquareColor, "black" | "white">

type SadColor = "black" | "white" | "grey" | "blue dark"

//Extract
type SadSquareColor = Extract<SquareColor, SadColor>
type HappySquareColor = Exclude<SquareColor, SadColor>


type User = {
    readonly name: string,
    email: string,
    id?: number
}


//Required
type UserGet = Required<User>

type UserPatch = Partial<User>
const maria: UserPatch = { id: 2 }

// Readonly
type UserRead = Readonly<User>
const daniel: User = {
    name: "daniel",
    email: "daniel@server"
}

daniel.email = "email alterado"

//NonNullable
type Cpf = { cpf: string }
type Cnpj = { cnpj: string }

type User2 = Cpf | Cnpj | null | undefined

const user: NonNullable<User2> = {
    cnpj: ""
}


// Record<T, U>

type Url = {
    url: string
}

type MidiasSociais = "facebook" | "instagram" | "youtube" | "tiktok"

const midias: Record<MidiasSociais, Url> = {
    facebook: { url: "facebook.com" },
    instagram: { url: "instagram.com" },
    youtube: { url: "youtube.com" },
    tiktok: { url: "" }
}

console.log(midias)

// conditional types
type MyString = string
type MyType = MyString extends string | number ? string : boolean

function myFunction<T>(param: T extends string ? string : number) {

}

myFunction<boolean>(20)

function myFunction2<T>(param: T) {
    return function (param2: T extends number ? boolean : MyString) {

    }
}

const minhaFuncao = myFunction2(100)
minhaFuncao(true)

type NumberOrNever<T> = T extends number ? number : never

let teste: NumberOrNever<boolean>

// type OnePropertyOfSquare = "x" | "y" | "width" | "height"
type OnePropertyOfSquare = keyof Square
let onePropertyOfSquare: OnePropertyOfSquare = "x"



//Mapped Types

type Props = "x" | "y" | "z" | "a"

// type MappedFromProps = {
//     "x": number,
//     "y": number,
//     "z": number,
//     "a": number
// }
type MappedFromProps<T extends string | number | symbol> = {
    [P in T]: P
}

type MyMappedTypes = MappedFromProps<Props>

type MappedFromProps2<T> = {
    readonly [P in keyof T]: T[P]
}

type Teste = MappedFromProps2<{ a: boolean, b: "b" }>


// Lookup Types
type BankAcount = {
    id: number,
    name: string,
    count: {
        agency: number,
        code: number,
        digit: number
    }
}

type Id = BankAcount["id"]
type Count = BankAcount["count"]
type Digit = BankAcount["count"]["digit"]

// typeof

const myCount: BankAcount = {
    id: 1,
    name: "daniel",
    count: {
        agency: 2,
        code: 3,
        digit: 4
    }
}

type TypeOfMyCount = typeof myCount
type TypeOfMyCountId = typeof myCount.id

let minhaString = "ola mundo"
let string2: typeof minhaString
