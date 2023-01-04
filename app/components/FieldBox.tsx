"use client";
import { useForm } from "react-hook-form";
import cn from "classnames";
import type { SubmitHandler, UseFormProps } from "react-hook-form";

import { Button, Input } from "app/components/ui";
import type { InputProps } from "app/components/ui";
import type { UserInputs } from "stubby";

export type FieldBoxProps = {
  title: string;
  description: string;
  footerText: string;
  inputId: keyof UserInputs;
  required?: boolean;
} & UseFormProps &
  InputProps;

export default function FieldBox({
  title,
  description,
  footerText,
  inputId,
  required,
  ...useFormProps
}: FieldBoxProps) {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ ...useFormProps });
  const onSubmit: SubmitHandler<UserInputs> = (data) => console.log(data);

  return (
    <section aria-label={title} className="border">
      <div className="p-6 rounded-tl-md rounded-tr-md">
        <h3
          className={cn("font-medium", {
            "after:content-['*'] after:text-red after:ml-1": required,
          })}
        >
          {title}
        </h3>
        <p className="my-3">{description}</p>
        <Input
          {...register(inputId, {
            required,
          })}
        />
      </div>
      <footer className="bg-primary border-top clr-secondary py-3 px-6 rounded-bl-md rounded-br-md flex justify-between items-center">
        <span className="max-w-[38rem]">{footerText}</span>
        <Button
          type="submit"
          text="Save"
          className="btn-primary btn-sm hover:!bg-transparent min-w-[8rem]"
        />
      </footer>
    </section>
  );
}
