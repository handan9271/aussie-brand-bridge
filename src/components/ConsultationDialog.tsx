import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import ConsultationForm from "./ConsultationForm"
import { useState } from "react"

interface ConsultationDialogProps {
  children: React.ReactNode;
}

const ConsultationDialog = ({ children }: ConsultationDialogProps) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto section-card border-border/50">
        <ConsultationForm onClose={handleClose} />
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;