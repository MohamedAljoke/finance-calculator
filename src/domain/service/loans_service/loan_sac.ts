import Installment from "../../entity/installment";
import Loan from "../../entity/loan";
import { LoanCalculationStrategy } from "./loan_calculation_strategy";

export class LoanSACCalculationStrategy implements LoanCalculationStrategy {
  calculate(loan: Loan, extraPayments?: Record<number, number>): Installment[] {
    const { rate, period, amount } = loan;
    const installments: Installment[] = [];

    let balance = amount;
    let amortization = balance / period;
    while (balance > 0) {
      let initialBalance = balance;
      let interest = initialBalance * rate;
      let updatedBalance = initialBalance + interest;
      let installmentPayment = interest + amortization;
      if (extraPayments?.[installments.length + 1]) {
        updatedBalance -= extraPayments[installments.length + 1];
      }

      balance = updatedBalance - installmentPayment;
      if (balance <= 0.05) balance = 0;
      installments.push(
        new Installment({
          installmentNumber: installments.length + 1,
          amount: parseFloat(installmentPayment.toFixed(2)),
          interest: parseFloat(interest.toFixed(2)),
          amortization: parseFloat(amortization.toFixed(2)),
          balance: parseFloat(balance.toFixed(2)),
        })
      );
    }

    return installments;
  }
}
