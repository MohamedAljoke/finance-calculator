import Installment from "../../entity/installment";
import Loan from "../../entity/loan";
import { LoanCalculationStrategy } from "./loan_calculation_strategy";

export class LoanSACCalculationStrategy implements LoanCalculationStrategy {
  calculate(loan: Loan): Installment[] {
    const { amount, period } = loan;
    const amortization = amount / period;
    let balance = amount;
    const installments: Installment[] = [];

    for (let i = 1; i <= period; i++) {
      const interest = balance * 0.01; // Juros de 1% ao mês
      const amount = amortization + interest;
      balance -= amortization;

      installments.push({
        installmentNumber: i,
        amount: parseFloat(amount.toFixed(2)),
        interest: parseFloat(interest.toFixed(2)),
        amortization: parseFloat(amortization.toFixed(2)),
        balance: parseFloat(balance.toFixed(2)),
      });
    }
    return installments;
  }
}
