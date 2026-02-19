import { useEffect } from "react";
import { useToast } from "@/hooks/use-toaster";
import { X } from "lucide-react";

const Toast = ({ toast }) => {
  const { dismiss } = useToast();

  useEffect(() => {
    if (toast.open) {
      const timer = setTimeout(() => {
        dismiss(toast.id);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [toast.open, toast.id, dismiss]);

  if (!toast.open) return null;

  const handleClose = () => {
    dismiss(toast.id);
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-lg px-4 py-3 min-w-[300px] max-w-[400px] flex items-start justify-between gap-4 animate-fade-in">
      <div className="flex-1">
        {toast.title && (
          <h4 className="font-semibold text-foreground mb-1">{toast.title}</h4>
        )}
        {toast.description && (
          <p className="text-sm text-muted-foreground">{toast.description}</p>
        )}
      </div>
      <button 
        onClick={handleClose} 
        className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
        aria-label="Close toast"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
