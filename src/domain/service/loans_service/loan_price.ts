import Installment from "../../entity/installment";
import Loan from "../../entity/loan";
import { LoanCalculationStrategy } from "./loan_calculation_strategy";

export class LoanPriceCalculationStrategy implements LoanCalculationStrategy {
  calculate(loan: Loan): Installment[] {
    const { rate, period, amount } = loan;
    const installments: Installment[] = [];

    let balance = amount;
    let formula = Math.pow(1 + rate, period);
    let installmentPayment = balance * ((formula * rate) / (formula - 1));
    while (balance > 0) {
      let interest = balance * rate;
      let amortization = installmentPayment - interest;
      balance = balance - amortization;
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
