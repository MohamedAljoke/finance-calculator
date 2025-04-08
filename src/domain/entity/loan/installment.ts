export default class Installment {
  public installmentNumber: number;
  public amount: number;
  public interest: number;
  public amortization: number;
  public balance: number;
  constructor({
    installmentNumber,
    amount,
    interest,
    amortization,
    balance,
  }: {
    installmentNumber: number;
    amount: number;
    interest: number;
    amortization: number;
    balance: number;
  }) {
    this.installmentNumber = installmentNumber;
    this.amount = amount;
    this.interest = interest;
    this.amortization = amortization;
    this.balance = balance;
  }
}
