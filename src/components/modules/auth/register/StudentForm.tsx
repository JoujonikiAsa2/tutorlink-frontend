/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { classesArray, subjectsArray } from "@/lib/tutors";
import { Checkbox } from "@/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "./registerValidation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useRegisterUserMutation } from "@/redux/features/auth/authApi";

const StudentForm = () => {
  const [registerUser] = useRegisterUserMutation()
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(studentSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const [subjectChecked, setSubjectChecked] = useState<boolean>(false);
  useState<boolean>(false);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await registerUser(data);
        toast.success(res?.data?.message);
        router.push("/login");
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="profileImage"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Photo URL<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Ex: https://photo/...."
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Name<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Name"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Age<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={Number(field.value)}
                      placeholder="Age"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Gender<span className="text-red-500">*</span>
                  </p>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Ex: Female" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Phone<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Ex: 01749534..."
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="class"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Class<span className="text-red-500">*</span>
                  </p>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Ex: Class 2" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {classesArray.map((classItem, index) => (
                        <SelectItem key={index} value={classItem.id}>
                          {classItem.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="yourLocation"
              render={({ field }) => (
                <FormItem>
                  <p className="text-sm font-medium">
                    Your location<span className="text-red-500">*</span>
                  </p>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Ex: Dhaka, Bangladesh" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="dhaka, bangladesh">
                        Dhaka, Bangladesh
                      </SelectItem>
                      <SelectItem value="rangpur, bangladesh">
                        Rangpur, Bangladesh
                      </SelectItem>
                      <SelectItem value="Lalmonirhat, Bangladesh">
                        Lalmonirhat, Bangladesh
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <p className="text-sm font-medium">
                Subjects<span className="text-red-500">*</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {subjectsArray.map((item) => (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          const updatedValue = checked
                            ? [...(field.value || []), item.id]
                            : field.value?.filter(
                                (value: any) => value !== item.id
                              );
                          field.onChange(updatedValue);
                          setSubjectChecked(updatedValue?.length > 0);
                        }}
                      />
                    </FormControl>
                    <p className="text-sm font-normal">{item.label}</p>
                  </FormItem>
                ))}
              </div>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <p className="text-sm font-medium">
                Email<span className="text-red-500">*</span>
              </p>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  value={field.value || ""}
                  placeholder="Ex: example@gmail.com"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <p className="text-sm font-medium">
                Password<span className="text-red-500">*</span>
              </p>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  value={field.value || ""}
                  placeholder="Enter a secure password"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
          <Button
            type="submit"
            className="mt-5 w-full"
            disabled={!subjectChecked}
          >
            {isSubmitting ? "Registering..." : "Register as Student"}
          </Button>
      </form>
      <div className="text-center pt-6 text-gray-500">
        Already have an account?{" "}
        <Link href="/login">
          <span className="text-primary">Login</span>
        </Link>
      </div>
    </Form>
  );
};

export default StudentForm;
