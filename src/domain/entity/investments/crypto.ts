import Investment, { EInvestmentType } from "./investiments";

class CryptoInvestment extends Investment {
  constructor(
    id: string,
    userId: string,
    symbol: string,
    buyPrice: number,
    buyDate: Date,
    quantity: number,
    public blockchain: string // e.g., Ethereum, Solana, Bitcoin
  ) {
    super(
      id,
      userId,
      EInvestmentType.CRYPTO,
      symbol,
      buyPrice,
      buyDate,
      quantity
    );
  }
}
