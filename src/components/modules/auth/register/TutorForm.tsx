/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
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
import { Textarea } from "@/components/ui/textarea";
import { classesArray, subjectsArray } from "@/lib/tutors";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { registerUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import { tutorSchema } from "./registerValidation";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const TutorForm = () => {
  const { setIsLoading } = useUser();
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(tutorSchema),
  });
  const [classChecked, setClassChecked] = useState<boolean>(false);
  const [subjectChecked, setSubjectChecked] = useState<boolean>(false);
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    data.preferedLocation = data.preferedLocation.split(",")
    try {
      const res = await registerUser(data, "tutor");
      setIsLoading(true);
      if (res?.success) {
        toast.success(res?.message);
        router.push("/login");
      } else {
        toast.error(res?.message);
      }
    } catch (error: any) {
      toast.error(error.message);
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
                  <p className="font-medium text-sm">
                    Name<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Ex: Mina"
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
                  <p className="font-medium text-sm">
                    Age<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value}
                      placeholder="Ex: 20"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
        </div>
        <FormField
          control={form.control}
          name="preferedLocation"
          render={({ field }) => (
            <FormItem>
              <p className="font-medium text-sm">
                Prefered Location<span className="text-red-500">*</span>
              </p>
              <FormControl>
                <Input
                  {...field}
                  value={field.value || ""}
                  placeholder="Ex: Mirpur,Dhanmondi(use comma(,) to seperate)"
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
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <p className="font-medium text-sm">
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
                  <p className="font-medium text-sm">
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
        <FormField
              control={form.control}
              name="hourlyRate"
              render={({ field }) => (
                <FormItem>
                  <p className="font-medium text-sm">
                  Hourly Rate in BDT<span className="text-red-500">*</span>
                  </p>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value}
                      placeholder="Ex: 200"
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <p className="font-medium text-sm">
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
        <div className="">
          <FormField
            control={form.control}
            name="yourLocation"
            render={({ field }) => (
              <FormItem>
                <p className="font-medium text-sm">
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
        <FormField
          control={form.control}
          name="classes"
          render={({ field }) => (
            <FormItem>
              <p className="font-medium text-sm">
                Classes<span className="text-red-500">*</span>
              </p>
              <div className="flex flex-wrap gap-2">
                {classesArray.map((item) => (
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
                          setClassChecked(updatedValue?.length > 0);
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
          name="subjects"
          render={({ field }) => (
            <FormItem>
              <p className="font-medium text-sm">
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
          name="bio"
          render={({ field }) => (
            <FormItem>
              <p className="font-medium text-sm">
                Bio<span className="text-red-500">*</span>
              </p>
              <FormControl>
                <Textarea
                  {...field}
                  value={field.value || ""}
                  placeholder="Ex: I am John...."
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
              <p className="font-medium text-sm">
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
          disabled={!subjectChecked || !classChecked}
        >
          Register as Tutor
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

export default TutorForm;
