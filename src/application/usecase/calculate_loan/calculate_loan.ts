import Loan, { ELoanType } from "../../../domain/entity/loan";

export default class CalculateLoan {
  constructor() {}
  async execute(params: InputParams): Promise<Output> {
    const { period, downPayment, totalAmount, salary } = params;
    const amount = totalAmount - downPayment;
    const loanRate = 1;
    const loan = new Loan({
      period,
      amount,
      salary,
      rate: loanRate,
      type: ELoanType.price,
    });
    const installments = loan.calculateLoanInstallments();

    console.log(installments);
    return {
      installments: installments,
    };
  }
}

type InputParams = {
  period: number;
  downPayment: number;
  salary: number;
  totalAmount: number;
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
