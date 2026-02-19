import { useToast } from "@/hooks/use-toaster";
import Toast from "./toast";

const Toaster = () => {
  const { toasts } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 items-end">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
        />
      ))}
    </div>
  );
};

export default Toaster;
