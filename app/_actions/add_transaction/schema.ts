import {
  TransactionCategory,
  TransactionPaymentMethod,
  TransactionTypes,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  name: z.string().trim().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionTypes),
  category: z.nativeEnum(TransactionCategory),
  paymentMethod: z.nativeEnum(TransactionPaymentMethod),
  date: z.date(),
});
