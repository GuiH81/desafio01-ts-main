import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

import { DioAccount } from './class/DioAccount';

const personAccount = new DioAccount('João', 12345);
personAccount.deposit(100);
personAccount.getBalance();
personAccount.withdraw(50);
personAccount.getBalance();

const companyAccount = new CompanyAccount('TechCorp', 67890);
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.getBalance();

const specialAccount = new CompanyAccount('Maria', 54321);
specialAccount.deposit(100);
specialAccount.getBalance();
