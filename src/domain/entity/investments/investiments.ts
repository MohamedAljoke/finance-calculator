export enum EInvestmentType {
  STOCK = "STOCK",
  CRYPTO = "CRYPTO",
  INTERNATIONAL_ETFS = "INTERNATIONAL_ETFS",
  BRASILIAN_STOCKS = "BRASILIAN_STOCKS",
  FIIS = "FIIS",
  FIXED_INCOME = "FIXED_INCOME",
  OTHER = "OTHER",
}
export default abstract class Investment {
  constructor(
    public id: string,
    public userId: string,
    public assetType: EInvestmentType,
    public symbol: string,
    public buyPrice: number,
    public buyDate: Date,
    public quantity: number
  ) {}
}
