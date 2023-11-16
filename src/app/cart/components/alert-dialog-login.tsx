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
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

interface AlertDialogLoginProps {
  setModalOpen: (modalOpen: boolean) => void;
}

const AlertDialogLogin = ({ setModalOpen }: AlertDialogLoginProps) => {
  const pathname = usePathname();
  console.log("first");
  const handleLoginClick = () => {
    signIn("google", {
      callbackUrl: `/redirect/signin?pathname=${pathname}`,
    });
  };
  const handleCancelClick = () => {
    setModalOpen(false);
  };
  return (
    <AlertDialog defaultOpen={true}>
      {/* <AlertDialogTrigger asChild>
        <Button variant="outline">Finalizar Compra</Button>
      </AlertDialogTrigger> */}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja realizar o login?</AlertDialogTitle>
          {/* <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
        </AlertDialogDescription> */}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancelClick}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleLoginClick}>
            Login
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDialogLogin;
