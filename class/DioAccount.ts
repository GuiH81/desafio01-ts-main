export class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName(name: string): void {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  }

  getName(): string {
    return this.name;
  }

  deposit(amount: number): void {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
    }
  }

  withdraw(amount: number): void {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
      } else {
        console.log('Saldo insuficiente');
      }
    }
  }

  getBalance(): void {
    console.log(`Saldo atual: ${this.balance}`);
  }

  public validateStatus(): boolean {
    if (this.status) {
      return true;
    }
    throw new Error('Conta inválida');
  }
}
