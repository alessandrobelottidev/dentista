import React from "react";
import { Control, Controller } from "react-hook-form";
import { Input } from "@src/components/ui/input";
import { PhoneInput } from "@src/components/ui/phone-input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@src/components/ui/select";
import {
  DentalFormValues,
  dentalServiceOptions,
  locationOptions,
} from "@src/lib/dental-form/schemas";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@src/components/ui/popover";
import { cn } from "@src/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Button } from "@src/components/ui/button";
import { Calendar } from "@src/components/ui/calendar";
import { TimePickerDemo } from "@src/components/ui/time-picker-demo";
import { add } from "date-fns/add";

interface DentalFormFieldsProps {
  control: Control<DentalFormValues>;
  updateGlobalState: (data: Partial<DentalFormValues>) => void;
  formType?: "full" | "minimal";
}

export const DentalFormFields: React.FC<DentalFormFieldsProps> = ({
  control,
  updateGlobalState,
  formType = "full",
}) => {
  return (
    <div className="space-y-4">
      {formType === "full" && (
        <>
          {/* Full Name Field */}
          <Controller
            name="full_name"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <div className="p-2 bg-black/15 rounded-full">
                  <Input
                    placeholder="Nome completo es. Mario Rossi"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateGlobalState({ full_name: e.target.value });
                    }}
                  />
                </div>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* Phone Number Field */}
          <Controller
            name="phone_number"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <div className="p-2 bg-black/15 rounded-full">
                  <PhoneInput
                    placeholder="123 456 7890"
                    {...field}
                    defaultCountry="IT"
                    onChange={(value) => {
                      field.onChange({ target: { value } });
                      updateGlobalState({ phone_number: value });
                    }}
                  />
                </div>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />

          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <div>
                <div className="p-2 bg-black/15 rounded-full">
                  <Input
                    placeholder="Email es. mario.rossi@gmail.com"
                    type="email"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e);
                      updateGlobalState({ email: e.target.value });
                    }}
                  />
                </div>
                {fieldState.error && (
                  <p className="text-red-500 text-sm mt-1">
                    {fieldState.error.message}
                  </p>
                )}
              </div>
            )}
          />
        </>
      )}

      {/* Service Select */}
      <Controller
        name="service"
        control={control}
        render={({ field, fieldState }) => (
          <div>
            <div className="p-2 bg-black/15 rounded-full">
              <Select
                onValueChange={(value: DentalFormValues["service"]) => {
                  field.onChange({ target: { value } });
                  updateGlobalState({ service: value });
                }}
                value={control._defaultValues.service}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Scegli servizio" />
                </SelectTrigger>
                <SelectContent>
                  {dentalServiceOptions.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {fieldState.error && (
              <p className="text-red-500 text-sm mt-1">
                {fieldState.error.message}
              </p>
            )}
          </div>
        )}
      />

      {/* Location and Date Fields */}
      <div className="flex flex-row items-center py-2 px-6 bg-black/15 rounded-full gap-3 sm:gap-6">
        <Controller
          name="place"
          control={control}
          render={({ field, fieldState: _ }) => (
            <Select
              onValueChange={(value: DentalFormValues["place"]) => {
                field.onChange({ target: { value } });
                updateGlobalState({ place: value });
              }}
              value={control._defaultValues.place}
            >
              <SelectTrigger className="p-0 w-max gap-1 sm:flex-1">
                <SelectValue placeholder="Scegli location" />
              </SelectTrigger>
              <SelectContent>
                {locationOptions.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />

        <Controller
          name="datetime"
          control={control}
          render={({ field, fieldState: _ }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"calendarField"}
                  className={cn(
                    "w-full justify-start text-left font-normal text-sm p-0 sm:flex-1",
                    !field && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="h-4 w-4" />
                  {field.value ? (
                    field.value.toLocaleString("it-IT", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: undefined, // No seconds
                    })
                  ) : (
                    <span>Scegli una data</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={field.value}
                  onSelect={(newDay) => {
                    // Carry over the hours, minutes and seconds
                    if (!newDay) return;
                    if (!field.value) {
                      updateGlobalState({ datetime: newDay });
                      return;
                    }
                    const diff = newDay.getTime() - field.value.getTime();
                    const diffInDays = diff / (1000 * 60 * 60 * 24);
                    const newDateFull = add(field.value, {
                      days: Math.ceil(diffInDays),
                    });

                    // And only then set the new days bro
                    updateGlobalState({ datetime: newDateFull });
                  }}
                  initialFocus
                />
                <div className="p-3 border-t border-border">
                  <TimePickerDemo
                    setDate={(newTime) => {
                      updateGlobalState({ datetime: newTime });
                    }}
                    date={field.value}
                  />
                </div>
              </PopoverContent>
            </Popover>
          )}
        />
      </div>
    </div>
  );
};
