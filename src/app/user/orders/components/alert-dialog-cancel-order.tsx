import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import orderProvider from "@/providers/order-provider";
import CancelUserOrder from "@/requests/cancel-user-order";

const AlertDialogCancelOrder = ({ orderId }: { orderId: string }) => {
  const deleteOrder = orderProvider((state) => state.deleteOrder);
  const handleCancelOrder = () => {
    CancelUserOrder({ orderId });
    deleteOrder(orderId);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex w-full bg-red-600 target:bg-red-600 hover:bg-red-600/90 active:bg-red-600">
          Cancelar Pedido
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja cancelar o pedido?</AlertDialogTitle>
          <AlertDialogDescription>
            Todos os produtos do pedido serão cancelados.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="gap-2">
          {/* <Button variant={"outline"}> */}
          <AlertDialogAction
            onClick={handleCancelOrder}
            className="border border-accent bg-[#0a0a0a] hover:bg-accent"
          >
            Sim
          </AlertDialogAction>
          {/* </Button> */}
          <AlertDialogCancel>Não</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogCancelOrder;
