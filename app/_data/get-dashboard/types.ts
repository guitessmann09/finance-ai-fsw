import { TransactionCategory, TransactionTypes } from "@prisma/client";

export type TransactionPercentagePerType = {
  [key in TransactionTypes]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
