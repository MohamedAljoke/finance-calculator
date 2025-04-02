import Installment from "../../entity/installment";
import Loan from "../../entity/loan";
import { LoanCalculationStrategy } from "./loan_calculation_strategy";

export class LoanPriceCalculationStrategy implements LoanCalculationStrategy {
  calculate(loan: Loan): Installment[] {
    const { rate, period, amount } = loan;
    const annuityFactor =
      (rate * Math.pow(1 + rate, period)) / (Math.pow(1 + rate, period) - 1);
    const installmentValue = amount * annuityFactor;
    let balance = amount;
    const installments: Installment[] = [];
    for (let i = 1; i <= period; i++) {
      const interest = balance * rate;
      const amortization = installmentValue - interest;
      balance -= amortization;
      installments.push({
        installmentNumber: i,
        amount: parseFloat(installmentValue.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
        amortization: parseFloat(amortization.toFixed(2)),
        balance: parseFloat(balance.toFixed(2)),
      });
    }
    return installments;
  }
}
