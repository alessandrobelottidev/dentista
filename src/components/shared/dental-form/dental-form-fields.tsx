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
import { DatetimePicker } from "@src/components/ui/datetime-picker";
import {
  DentalFormValues,
  dentalServiceOptions,
  locationOptions,
} from "@src/lib/dental-form/schemas";

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
      <div className="grid grid-cols-12 gap-4 p-2 bg-black/15 rounded-full">
        <div className="col-span-5">
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
                <SelectTrigger>
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
        </div>
        <div className="col-span-7">
          <Controller
            name="datetime"
            control={control}
            render={({ field, fieldState: _ }) => (
              <DatetimePicker
                {...field}
                value={control._defaultValues.datetime}
                onChange={(nextDate) => {
                  field.onChange({ target: { nextDate } });
                  updateGlobalState({ datetime: nextDate });
                }}
                format={[
                  ["months", "days", "years"],
                  ["hours", "minutes", "am/pm"],
                ]}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};
