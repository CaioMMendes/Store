import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface CreditCardDialogProps {
  modalCreditCard: Boolean;
  setModalCreditCard: (modalOpen: boolean) => void;
  handleFinishPurchase: () => void;
}

const CreditCardDialog = ({
  setModalCreditCard,
  handleFinishPurchase,
  modalCreditCard,
}: CreditCardDialogProps) => {
  const handleCancelClick = () => {
    setModalCreditCard(false);
  };
  return (
    <AlertDialog open={Boolean(modalCreditCard)}>
      <AlertDialogContent className="!select-text">
        <AlertDialogHeader className="!select-text">
          <AlertDialogTitle>Deseja finalizar a compra?</AlertDialogTitle>
          <AlertDialogDescription className="!select-text">
            Para realizar a compra utilize o cartão 4242 4242 4242 4242.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancelClick}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleFinishPurchase}>
            Finalizar Compra
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CreditCardDialog;
