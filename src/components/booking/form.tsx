"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useRef } from "react";
import { Button } from "@src/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@src/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import { DatetimePicker } from "@src/components/ui/datetime-picker";
import styles from "./Form.module.css";
import { Input } from "../ui/input";
import { PhoneInput } from "../ui/phone-input";

const formSchema = z.object({
  full_name: z.string(),
  phone_number: z.string(),
  email: z.string(),
  service: z.string(),
  place: z.string(),
  datetime: z.coerce.date(),
});

export default function MyForm() {
  const inputsContainerRef = useRef<HTMLDivElement>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      datetime: new Date(),
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      console.log(values);
      toast(
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mx-auto space-y-4"
      >
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <div className="p-2 bg-black/15 rounded-full">
                <FormControl>
                  <Input
                    placeholder="Nome completo es. Mario Rossi"
                    type="text"
                    {...field}
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start">
              <div className="p-2 bg-black/15 rounded-full w-full">
                <FormControl className="w-full">
                  <PhoneInput
                    placeholder="123 456 7890"
                    {...field}
                    className="w-full"
                    defaultCountry="IT"
                  />
                </FormControl>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <div className="p-2 bg-black/15 rounded-full">
                <FormControl>
                  <Input
                    placeholder="Email es. mario.rossi@gmail.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem>
              <div className="p-2 bg-black/15 rounded-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Implantologia un dente" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Implantologia un dente">
                      Implantologia un dente
                    </SelectItem>
                    <SelectItem value="Overdenture">Overdenture</SelectItem>
                    <SelectItem value="All on Four">All on Four</SelectItem>
                    <SelectItem value="All on Six">All on Six</SelectItem>
                    <SelectItem value="Protesi mobile arcata completa">
                      Protesi mobile arcata completa
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="relative">
          {/* Inputs container */}
          <div
            ref={inputsContainerRef}
            className="grid grid-cols-12 gap-4 p-2 bg-black/15 rounded-full"
          >
            <div className="col-span-5">
              <FormField
                control={form.control}
                name="place"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Milano" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Milano">Milano</SelectItem>
                        <SelectItem value="Roma">Roma</SelectItem>
                        <SelectItem value="Napoli">Napoli</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
            </div>

            <div className={`col-span-7 ${styles.subitemFlexEndCustom}`}>
              <FormField
                control={form.control}
                name="datetime"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <DatetimePicker
                      {...field}
                      format={[
                        ["months", "days", "years"],
                        ["hours", "minutes", "am/pm"],
                      ]}
                    />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Error messages container */}
          <div className="grid grid-cols-12 gap-4 mt-1">
            <div className="col-span-5">
              <FormField
                control={form.control}
                name="place"
                render={() => <FormMessage />}
              />
            </div>
            <div className="col-span-7">
              <FormField
                control={form.control}
                name="datetime"
                render={() => <FormMessage />}
              />
            </div>
          </div>
        </div>

        <Button
          variant={"accent"}
          size={"figmaFull"}
          type="submit"
          className="text-figmaText"
        >
          Richiedi appuntamento
        </Button>
      </form>
    </Form>
  );
}
