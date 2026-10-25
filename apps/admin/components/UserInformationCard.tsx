"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Pencil } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const userSchema = z.object({
  username: z
    .string()
    .trim()
    .min(2, "Username must be at least 2 characters!")
    .max(50, "Username must be at most 50 characters!"),
  email: z.email("Enter a valid email address."),
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Phone number must be at least 10 digits!")
    .max(15, "Phone number must be at most 15 digits!"),
  location: z.string().trim().min(2, "Location must be at least 2 characters!"),
  role: z.enum(["Admin", "User"]),
});

export type UserInformation = z.infer<typeof userSchema>;

interface UserInformationCardProps {
  initialUser: UserInformation;
  joinedOn: string;
}

const UserInformationCard = ({
  initialUser,
  joinedOn,
}: UserInformationCardProps) => {
  const [user, setUser] = useState<UserInformation>(initialUser);
  const [open, setOpen] = useState(false);

  const form = useForm<UserInformation>({
    resolver: zodResolver(userSchema),
    defaultValues: initialUser,
    mode: "onSubmit",
  });

  const handleEdit = () => {
    form.reset(user);
    setOpen(true);
  };

  const handleSave = (values: UserInformation) => {
    setUser(values);
    setOpen(false);
  };

  const profileCompletion = [
    user.username,
    user.email,
    user.phoneNumber,
    user.location,
  ].filter((value) => value.trim().length > 0).length;

  const completionPercentage = Math.round((profileCompletion / 4) * 100);

  return (
    <div className="rounded-md bg-primary-foreground p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="font-semibold">User Information</h2>

        <Button type="button" variant="outline" size="sm" onClick={handleEdit}>
          <Pencil className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent className="flex w-full flex-col gap-0 overflow-y-auto sm:max-w-lg">
          <SheetHeader className="pb-6">
            <SheetTitle>Edit User Information</SheetTitle>
            <SheetDescription>
              Update the user&apos;s profile details below.
            </SheetDescription>
          </SheetHeader>

          <form
            id="edit-user-form"
            onSubmit={form.handleSubmit(handleSave)}
            className="flex flex-1 flex-col gap-5 px-4"
          >
            <Controller
              control={form.control}
              name="username"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    autoComplete="username"
                    placeholder="Enter username"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="email"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    autoComplete="email"
                    placeholder="Enter email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="phoneNumber"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    type="tel"
                    autoComplete="tel"
                    placeholder="Enter phone number"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="location"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Location</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    autoComplete="address-level2"
                    placeholder="Enter location"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="role"
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Role</FieldLabel>

                  <Select
                    name={field.name}
                    value={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id={field.name}
                      aria-invalid={fieldState.invalid}
                      className="w-full"
                    >
                      <SelectValue placeholder="Select a role" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="User">User</SelectItem>
                    </SelectContent>
                  </Select>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <SheetFooter className="mt-8 flex-row gap-2 sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>

              <Button
                type="submit"
                form="edit-user-form"
                disabled={form.formState.isSubmitting}
              >
                Save changes
              </Button>
            </SheetFooter>
          </form>
        </SheetContent>
      </Sheet>

      <div className="mt-5 space-y-4">
        <div className="mb-6 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">Profile completion</p>
            <span className="text-sm font-medium">{completionPercentage}%</span>
          </div>

          <Progress value={completionPercentage} />
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="font-bold">Username:</span>
          <span className="break-all text-muted-foreground">
            {user.username}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="font-bold">Email:</span>
          <span className="break-all text-muted-foreground">
            {user.email || "Not provided"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="font-bold">Phone Number:</span>
          <span className="text-muted-foreground">
            {user.phoneNumber || "Not provided"}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="font-bold">Location:</span>
          <span className="text-muted-foreground">
            {user.location || "Not provided"}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-bold">Role:</span>
          <Badge>{user.role}</Badge>
        </div>

        <p className="pt-2 text-sm text-muted-foreground">
          Joined on: {joinedOn}
        </p>
      </div>
    </div>
  );
};

export default UserInformationCard;
