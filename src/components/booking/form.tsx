"use client";
import React from "react";
import { Button } from "@src/components/ui/button";
import { Form } from "@src/components/ui/form";
import { DentalFormFields } from "@src/components/shared/dental-form/dental-form-fields";
import { useDentalForm } from "@src/hooks/useDentalForm";
import { sendBookingDetails } from "@src/app/actions";
import { toast } from "sonner";
import { useHomeContext } from "@src/hooks/useHomeContext";

export default function BookingForm() {
  const { globalState } = useHomeContext();

  const { form, updateGlobalState, handleSubmit, isSubmitting } = useDentalForm(
    "full",
    async () => {
      const res = await sendBookingDetails(globalState.dentalHelpForm);

      if (res.error) {
        throw new Error(res.error.message);
      }

      toast.success("Appuntamento richiesto con successo!");
    }
  );

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full mx-auto space-y-4"
      >
        <DentalFormFields
          control={form.control}
          updateGlobalState={updateGlobalState}
          formType="full"
        />

        <Button
          variant="accent"
          size="figmaFull"
          type="submit"
          disabled={isSubmitting}
          className="text-figmaText"
        >
          {isSubmitting ? "Invio in corso..." : "Richiedi appuntamento"}
        </Button>
      </form>
    </Form>
  );
}
