import LoanCalculatorFactory from "../factory/loan_calculator_factory";
import Installment from "./installment";

export enum ELoanType {
  price = "price",
  sac = "sac",
}

export default class Loan {
  readonly amount: number;
  readonly period: number;
  readonly rate: number;
  readonly type: ELoanType;
  readonly salary: number;
  constructor({
    amount,
    period,
    rate,
    type,
    salary,
  }: {
    amount: number;
    period: number;
    rate: number;
    type: ELoanType;
    salary: number;
  }) {
    this.amount = amount;
    this.period = period;
    this.rate = rate;
    this.type = type;
    this.salary = salary;
    this.validateSalaryLoanRelation();
  }
  validateSalaryLoanRelation() {
    if (this.salary * 0.25 < this.amount / this.period) {
      throw new Error("Insufficient salary");
    }
  }

  calculateLoanInstallments(): Installment[] {
    const loanCalculator = LoanCalculatorFactory.create(this.type);
    const installments = loanCalculator.calculate(this);
    return installments;
  }
}
