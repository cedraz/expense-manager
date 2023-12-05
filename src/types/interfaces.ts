export interface expenseInterface {
    id: string;
    amount: number;
    description: string;
    date: string;
    credit_card_id: string;
    selected: boolean;
}

export interface creditCardInterface {
    id: string;
    card_name: string;
    Expenses: expenseInterface[];
}
  
export interface creditCardWithStatementInterface {
    id: string;
    card_name: string;
    statement: number;
    Expenses: expenseInterface[];
}