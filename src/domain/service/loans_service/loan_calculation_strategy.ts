import Installment from "../../entity/installment";
import Loan from "../../entity/loan";

export interface LoanCalculationStrategy {
  calculate(loan: Loan, extraPayments?: Record<number, number>): Installment[];
}
