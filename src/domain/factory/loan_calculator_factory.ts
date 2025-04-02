import { ELoanType } from "../entity/loan";
import { LoanPriceCalculationStrategy } from "../service/loans_service/loan_price";
import { LoanSACCalculationStrategy } from "../service/loans_service/loan_sac";

export default class LoanCalculatorFactory {
  static create(type: ELoanType) {
    switch (type) {
      case ELoanType.price:
        return new LoanPriceCalculationStrategy();
      case ELoanType.sac:
        return new LoanSACCalculationStrategy();
      default:
        throw new Error("Invalid loan type");
    }
  }
}
