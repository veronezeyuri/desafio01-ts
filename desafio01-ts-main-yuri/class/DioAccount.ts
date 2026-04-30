export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  protected addToBalance = (amount: number): void => {
    this.balance += amount
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance += amount
      console.log(`Depósito de R$${amount} realizado. Saldo: R$${this.balance}`)
    }
  }

  withdraw = (amount: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= amount) {
        this.balance -= amount
        console.log(`Saque de R$${amount} realizado. Saldo: R$${this.balance}`)
      } else {
        console.log('Saldo insuficiente.')
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }
}
