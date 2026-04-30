import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SpecialAccount } from './class/SpecialAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(50)
peopleAccount.withdraw(20)
peopleAccount.withdraw(999)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(100)
companyAccount.getLoan(500)
companyAccount.withdraw(200)
console.log(companyAccount)

const specialAccount: SpecialAccount = new SpecialAccount('Special User', 30)
specialAccount.deposit(100)
specialAccount.withdraw(50)
console.log(specialAccount)
