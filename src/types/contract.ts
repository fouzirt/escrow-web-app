export interface Party {
  address: string;
  name: string;
  role: 'buyer' | 'seller' | 'carrier';
}

export interface ContractDetails {
  amount: number;
  currency: string;
  portOfLoading: string;
  deadline: Date;
  status: 'draft' | 'active' | 'completed' | 'disputed';
}

export interface EscrowContract {
  id: string;
  parties: Party[];
  details: ContractDetails;
  createdAt: Date;
  updatedAt: Date;
}