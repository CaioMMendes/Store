import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";

interface AlertDialogLoginProps {
  setModalOpen: (modalOpen: boolean) => void;
}

const AlertDialogLogin = ({ setModalOpen }: AlertDialogLoginProps) => {
  const pathname = usePathname();
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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Deseja realizar o login?</AlertDialogTitle>
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
