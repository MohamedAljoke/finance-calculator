import Loan, { ELoanType } from "../../../src/domain/entity/loan";

describe("Loan", () => {
  it("should be able to create a loan", () => {
    const loanData = {
      amount: 10000,
      period: 12,
      rate: 0.05,
      type: ELoanType.price,
      salary: 5000,
    };

    const loan = new Loan(loanData);

    expect(loan.amount).toBe(loanData.amount);
    expect(loan.period).toBe(loanData.period);
    expect(loan.rate).toBe(loanData.rate);
    expect(loan.type).toBe(loanData.type);
    expect(loan.salary).toBe(loanData.salary);
  });
  it("should throw an error if salary is insufficient for the loan", () => {
    const loanData = {
      amount: 10000,
      period: 6,
      rate: 0.05,
      type: ELoanType.price,
      salary: 2000,
    };

    expect(() => {
      new Loan(loanData);
    }).toThrow("Insufficient salary");
  });
});
