import Loan, { ELoanType } from "../../../../src/domain/entity/loan";
import { LoanSACCalculationStrategy } from "../../../../src/domain/service/loans_service/loan_sac";

describe("loan price method", () => {
  let sut: LoanSACCalculationStrategy;
  let defaultLoan: Loan;
  beforeEach(() => {
    const loanData = {
      amount: 10000,
      period: 12,
      rate: 0.05,
      type: ELoanType.price,
      salary: 5000,
    };
    defaultLoan = new Loan(loanData);
    sut = new LoanSACCalculationStrategy();
  });
  it("should calculate correct installments for loan", () => {
    const installments = sut.calculate(defaultLoan);

    const firstInstallment = installments[0];
    const lastInstallment = installments[installments.length - 1];

    expect(installments.length).toBe(defaultLoan.period);

    expect(firstInstallment.installmentNumber).toBe(1);
    expect(lastInstallment.installmentNumber).toBe(12);
  });
});
