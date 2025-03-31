import CalculateInterest from "../src/calculate_interest";

describe("Request loan", () => {
  it("should be able to request loan", async () => {
    const calculateInterest = new CalculateInterest();
    const params = {
      period: 360,
      downPayment: 100000,
      salary: 5000,
      totalAmount: 350000,
    };
    const output = await calculateInterest.execute(params);
    expect(output.installments).toHaveLength(params.period);
  });
});
