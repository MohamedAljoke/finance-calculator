export default class CalculateInterest {
  constructor() {}
  async execute(params: InputParams): Promise<Output> {
    return {
      installments: [],
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
  installments: {
    installmentNumber: number;
    amount: number;
    interest: number;
    amortization: number;
    balance: number;
  }[];
};
