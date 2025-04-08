import LoanCalculatorFactory from "../../factory/loan_calculator_factory";
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
  readonly installments: Installment[];

  constructor({
    amount,
    period,
    rate,
    type,
    extraPayments,
  }: {
    amount: number;
    period: number;
    rate: number;
    type: ELoanType;
    extraPayments?: Record<number, number>;
  }) {
    this.amount = amount;
    this.period = period;
    this.rate = rate;
    this.type = type;

    this.installments = this.calculateLoanInstallments(extraPayments);
  }

  public getTotalAmounts() {
    const totals = this.installments.reduce(
      (acc, installment) => {
        acc.amortization += installment.amortization;
        acc.interest += installment.interest;
        acc.amount += installment.amount;
        return acc;
      },
      { amortization: 0, interest: 0, amount: 0 }
    );

    return {
      totalAmortization: parseFloat(totals.amortization.toFixed(2)),
      totalInterest: parseFloat(totals.interest.toFixed(2)),
      totalLoan: parseFloat(totals.amount.toFixed(2)),
    };
  }
  private calculateLoanInstallments(
    extraPayments?: Record<number, number>
  ): Installment[] {
    const loanCalculator = LoanCalculatorFactory.create(this.type);
    const installments = loanCalculator.calculate(this, extraPayments);
    return installments;
  }
}
