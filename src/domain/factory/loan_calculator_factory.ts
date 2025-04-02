import { ELoanType } from "../entity/loan";
import { LoanPriceCalculationStrategy } from "../service/loans_service/loan_price";
import { LoanSACCalculationStrategy } from "../service/loans_service/loan_sac";

export default class LoanCalculatorFactory {
  static create(type: ELoanType) {
    if (type === "price") {
      return new LoanPriceCalculationStrategy();
    }
    if (type === "sac") {
      return new LoanSACCalculationStrategy();
    }
    throw new Error("method not implemented");
  }
}
