import { useState, useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useHomeContext } from "@src/hooks/useHomeContext";
import {
  dentalFormSchema,
  DentalFormValues,
} from "@src/lib/dental-form/schemas";

export const useDentalForm = (
  formType: "full" | "minimal" = "full",
  successCallback?: () => Promise<void>
) => {
  const { globalState, setGlobalState } = useHomeContext();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Dynamically adjust validation based on form type
  const validationSchema =
    formType === "full"
      ? dentalFormSchema
      : dentalFormSchema.pick({ service: true, place: true, datetime: true });

  const form = useForm<DentalFormValues>({
    resolver: zodResolver(validationSchema),
    defaultValues: globalState.dentalHelpForm,
  });

  useEffect(() => {
    form.reset(globalState.dentalHelpForm);
  }, [globalState.dentalHelpForm]);

  const updateGlobalState = useCallback(
    (data: Partial<DentalFormValues>) => {
      setGlobalState((prev) => ({
        ...prev,
        dentalHelpForm: {
          ...prev.dentalHelpForm,
          ...data,
        },
      }));
    },
    [setGlobalState]
  );

  const handleSubmit = useCallback(
    async (values: DentalFormValues) => {
      setIsSubmitting(true);
      try {
        if (successCallback) {
          await successCallback();
        }
        // Optional: Reset form or navigate
        form.reset();
      } catch (error) {
        toast.error("Impossibile inviare il modulo. Riprova piu tardi.");
        console.error(error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, successCallback]
  );

  return {
    form,
    updateGlobalState,
    handleSubmit,
    isSubmitting,
  };
};
