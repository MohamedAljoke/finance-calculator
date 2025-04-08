import Investment, { EInvestmentType } from "./investiments";

export default class InternationalETFInvestment extends Investment {
  constructor(
    id: string,
    userId: string,
    symbol: string,
    buyPrice: number,
    buyDate: Date,
    quantity: number,
    public exchange: string, // NYSE, NASDAQ, B3, etc.
    public currency: string, // USD, BRL, EUR
    public fundManager: string, // BlackRock, Vanguard, etc.
    public expenseRatio: number, // Annual cost in %
    public dividendYield: number // Dividends per year in %
  ) {
    super(
      id,
      userId,
      EInvestmentType.BRASILIAN_STOCKS,
      symbol,
      buyPrice,
      buyDate,
      quantity
    );
  }
}
