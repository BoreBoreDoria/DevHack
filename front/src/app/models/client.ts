export interface Client {
  clientId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  role: string;
  config: {
    getHistory: boolean
    createSwiftFlow: boolean;
    createCurrencyFlow: boolean;
    createNsjFlow: boolean;
  };
}
