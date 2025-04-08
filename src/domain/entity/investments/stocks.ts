import Investment, { EInvestmentType } from "./investiments";

class StockInvestment extends Investment {
  constructor(
    id: string,
    userId: string,
    symbol: string,
    buyPrice: number,
    buyDate: Date,
    quantity: number,
    public exchange: string, // NYSE, B3, etc.
    public sector: string
  ) {
    super(
      id,
      userId,
      EInvestmentType.STOCK,
      symbol,
      buyPrice,
      buyDate,
      quantity
    );
  }
}
