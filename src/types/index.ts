export type Expense = {
    id: string,
    amount: number,
    expenseName: string,
    category: string,
    date: Value
}

//Copia todo del tipo menos el id
export type DrafExpense = Omit<Expense, 'id'>

type ValuePice = Date | null;
export type Value = ValuePice | [ValuePice, ValuePice];

export type Category = {
    id: string,
    name: string,
    icon: string
}