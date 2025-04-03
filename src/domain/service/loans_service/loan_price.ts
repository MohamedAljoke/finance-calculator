import Installment from "../../entity/installment";
import Loan from "../../entity/loan";
import { LoanCalculationStrategy } from "./loan_calculation_strategy";

export class LoanPriceCalculationStrategy implements LoanCalculationStrategy {
  calculate(loan: Loan, extraPayments?: Record<number, number>): Installment[] {
    const { rate, period, amount } = loan;
    const installments: Installment[] = [];

    let balance = amount;
    let formula = Math.pow(1 + rate, period);
    let installmentPayment = balance * ((formula * rate) / (formula - 1));
    let installmentNumber = 1;
    while (balance > 0) {
      let interest = balance * rate;
      let amortization = installmentPayment - interest;
      if (extraPayments?.[installmentNumber]) {
        let extraPayment = extraPayments[installmentNumber];
        amortization += extraPayment;
      }
      balance = balance - amortization;
      if (balance <= 0.05) balance = 0;
      installments.push(
        new Installment({
          installmentNumber,
          amount: parseFloat(installmentPayment.toFixed(2)),
          interest: parseFloat(interest.toFixed(2)),
          amortization: parseFloat(amortization.toFixed(2)),
          balance: parseFloat(balance.toFixed(2)),
        })
      );
      installmentNumber++;
    }

    return installments;
  }
}
