import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id
  }

  deposit(amount: number): void {
    const specialAmount = amount + 10;
    super.deposit(specialAmount);  // Depósito com 10 a mais
    console.log(`Depósito especial de ${specialAmount} realizado (valor original + 10).`);
  }
  
}