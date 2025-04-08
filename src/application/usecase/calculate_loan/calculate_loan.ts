import Loan, { ELoanType } from "../../../domain/entity/loan/loan";

export default class CalculateLoan {
  constructor() {}
  async execute(params: InputParams): Promise<Output> {
    const { periodInMonths, interestRatePercentage, downPayment, totalAmount } =
      params;
    const amount = totalAmount - downPayment;
    const loanRate = interestRatePercentage / 100;
    const sacLoan = new Loan({
      period: periodInMonths,
      amount,
      rate: loanRate,
      type: ELoanType.sac,
    });
    const priceLoan = new Loan({
      period: periodInMonths,
      amount,
      rate: loanRate,
      type: ELoanType.price,
    });
    const installmentsSac = sacLoan.installments;
    const installmentsPrice = priceLoan.installments;
    console.log(installmentsSac);
    console.log(sacLoan.getTotalAmounts(), priceLoan.getTotalAmounts());
    return {
      installments: installmentsSac,
    };
  }
}

type InputParams = {
  periodInMonths: number;
  downPayment: number;
  totalAmount: number;
  interestRatePercentage: number;
};
type Output = {
  installments: InstallmentOutput[];
};
type InstallmentOutput = {
  installmentNumber: number;
  amount: number;
  interest: number;
  amortization: number;
  balance: number;
};
