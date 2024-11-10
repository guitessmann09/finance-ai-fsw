"use client";
import { useState } from "react";
import UpsertTransactionDialog from "../../_components/upsert-transaction-dialog";
import { PencilIcon } from "lucide-react";
import { Button } from "../../_components/ui/button";
import { Transaction } from "@prisma/client";

interface EditTransactionProps {
  transaction: Transaction;
}

const EditTransactionButton = ({ transaction }: EditTransactionProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{ ...transaction, amount: Number(transaction.amount) }}
        transactionId={transaction.id}
      />
    </>
  );
};

export default EditTransactionButton;
