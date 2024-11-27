import * as z from "zod";

export const dentalServiceOptions = [
  "Overdenture",
  "All on Four",
  "All on Six",
  "Protesi mobile arcata completa",
  "Implantologia un dente",
] as const;

export const locationOptions = ["Roma", "Napoli", "Milano"] as const;

export const dentalFormSchema = z.object({
  full_name: z.string().min(2, { message: "Nome completo è richiesto" }),
  phone_number: z.string().min(8, { message: "Numero di telefono non valido" }),
  email: z.string().email({ message: "Inserire un'email valida" }),
  service: z.enum(dentalServiceOptions, {
    errorMap: () => ({ message: "Selezionare un servizio" }),
  }),
  place: z.enum(locationOptions, {
    errorMap: () => ({ message: "Selezionare una location" }),
  }),
  datetime: z.coerce.date().optional(),
});

export type DentalFormValues = z.infer<typeof dentalFormSchema>;
