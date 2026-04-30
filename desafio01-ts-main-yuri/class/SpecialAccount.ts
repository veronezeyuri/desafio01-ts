import { DioAccount } from "./DioAccount"

export class SpecialAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if (this.validateStatus()) {
      const bonus = 10
      this.addToBalance(amount + bonus)
      console.log(`Depósito de R$${amount} + bônus de R$${bonus} realizado. Total creditado: R$${amount + bonus}`)
    }
  }
}
