import CalculateLoan from "../../../src/application/usecase/calculate_loan/calculate_loan";

describe("Request loan", () => {
  it("should be able to request loan", async () => {
    const calculateLoan = new CalculateLoan();
    const params = {
      periodInMonths: 360,
      interestRatePercentage: 1,
      downPayment: 100000,
      totalAmount: 350000,
    };
    const output = await calculateLoan.execute(params);
    expect(output.installments).toHaveLength(params.periodInMonths);
  });
});
