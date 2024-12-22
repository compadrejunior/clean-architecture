export interface SavePurchases {
  save: (purchases: Array<IPurchase>) => Promise<void>;
}

export interface IPurchase {
  value: number;
  date: Date;
  description: string;
}
