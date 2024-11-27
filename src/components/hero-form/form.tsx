"use client";
import React from "react";
import { Button } from "@src/components/ui/button";
import { Form } from "@src/components/ui/form";
import { DentalFormFields } from "@src/components/shared/dental-form/dental-form-fields";
import { useDentalForm } from "@src/hooks/useDentalForm";
import { useHomeContext } from "@src/hooks/useHomeContext";

export default function HeroForm() {
  const { refs: _, scrollToSection } = useHomeContext();

  const { form, updateGlobalState, handleSubmit, isSubmitting } =
    useDentalForm("minimal");

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full mx-auto space-y-4"
      >
        <DentalFormFields
          control={form.control}
          updateGlobalState={updateGlobalState}
          formType="minimal"
        />

        <Button
          variant="accent"
          size="figmaFull"
          type="submit"
          disabled={isSubmitting}
          onClick={() => scrollToSection("form")}
          className="text-figmaText"
        >
          {isSubmitting ? "Invio in corso..." : "Richiedi appuntamento"}
        </Button>
      </form>
    </Form>
  );
}
