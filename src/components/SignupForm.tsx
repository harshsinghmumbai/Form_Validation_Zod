"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Control, FieldName, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormDescription } from "./ui/form";
import { toast } from "sonner";

// for performing Validation on Form
const formValidation = z.object({
  email: z.string().email(),
  username: z.string().min(3).max(25),
  password: z.string().min(8),
});

//useForm() to manage state in form
const SignupForm = () => {
  const form = useForm<z.infer<typeof formValidation>>({
    /*who is validator*/ resolver: zodResolver(formValidation),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formValidation>) => {
    form.reset();
    toast("Your Form Received!", {
      description: "Your Form was successfully submitted",
      className: "group-[.toaster]:bg-green-200",
      action: {
        label: "Cancel",
        onClick: () => console.log("Cancel"),
      },
    });
  };
  return (
    <>
      <div className="">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-full h-fit"
          >
            <SignupFormField
              name="email"
              label="Email"
              placeholder="Enter the Email"
              inputType="email"
              formControl={form.control}
            />
            <SignupFormField
              name="username"
              label="Username"
              placeholder="Username"
              // description="At least 3 Characters"
              formControl={form.control}
            />
            <SignupFormField
              name="password"
              label="Password"
              placeholder="Password"
              // description="At least 8 Characters"
              inputType="password"
              formControl={form.control}
            />
            <Button type="submit" className="w-full">
              Signup
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

interface SignupFormFieldProps {
  name: FieldName<z.infer<typeof formValidation>>;
  label: string;
  placeholder: string;
  description?: /*its optional*/ string;
  inputType?: string;
  formControl?: Control<z.infer<typeof formValidation>>;
}

const SignupFormField: React.FC<SignupFormFieldProps> = ({
  name,
  label,
  placeholder,
  description,
  inputType,
  formControl,
}) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="text-base md:text-lg text-blue-700">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              type={inputType || "text"}
              {...field}
            />
          </FormControl>
          {/* showing error message */}
          {description && <FormDescription>{description}</FormDescription>}
          {/* above commit kiva hua part show karvana  */}
          <FormMessage className="text-xs md:text-sm " />
        </FormItem>
      )}
    />
  );
};

export default SignupForm;
