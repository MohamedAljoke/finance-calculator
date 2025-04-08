import Investment, { EInvestmentType } from "./investiments";

export enum EFiisType {
  LOGISTICS = "logistics",
  SHOPPING = "shopping",
  COMMERCIAL = "commercial",
  FOF = "fund-of-fund",
  LOANS = "loans",
  OTHER = "other",
}

export default class FiisInvestment extends Investment {
  constructor(
    id: string,
    userId: string,
    symbol: string,
    buyPrice: number,
    buyDate: Date,
    quantity: number,
    public dividendsPerShare: number,
    public sector: string
  ) {
    super(
      id,
      userId,
      EInvestmentType.FIIS,
      symbol,
      buyPrice,
      buyDate,
      quantity
    );
  }
}
