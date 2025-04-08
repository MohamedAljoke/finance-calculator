import Investment, { EInvestmentType } from "./investiments";

export default class FixedIncomeInvestment extends Investment {
  constructor(
    id: string,
    userId: string,
    symbol: string,
    buyPrice: number,
    buyDate: Date,
    quantity: number,
    public maturityDate: Date,
    public interestRate: number
  ) {
    super(
      id,
      userId,
      EInvestmentType.FIXED_INCOME,
      symbol,
      buyPrice,
      buyDate,
      quantity
    );
  }
}
