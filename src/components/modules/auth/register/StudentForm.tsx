/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

const StudentForm = () => {
  const form = useForm();
  const [subjectChecked, setSubjectChecked] = useState<boolean>(false);
  const [termsAndConditionChecked, setTermsAndConditionChecked] =
    useState<boolean>(false);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const sInfo = {
      ...data,
    };
    console.log(sInfo);
  };

  console.log(subjectChecked, termsAndConditionChecked);
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="sName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Name<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Name"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="sAge"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Age<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      value={field.value || ""}
                      placeholder="Age"
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="sGender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Gender<span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    required
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="sPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Phone<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      value={field.value || ""}
                      placeholder="Ex: 01749534..."
                      required
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <div className="w-full flex gap-2">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="sClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Class<span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    required
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="sLocation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Your location<span className="text-red-500">*</span>
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    required
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="subjects"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Subjects<span className="text-red-500">*</span>
              </FormLabel>
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
                    <FormLabel className="text-sm font-normal">
                      {item.label}
                    </FormLabel>
                  </FormItem>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  value={field.value || ""}
                  placeholder="Ex: example@gmail.com"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Password<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  {...field}
                  value={field.value || ""}
                  placeholder="Enter a secure password"
                  required
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="pt-4">
          <FormField
            control={form.control}
            name="terms"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Terms<span className="text-red-500">*</span>
                </FormLabel>
                <div className="flex flex-wrap gap-2">
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value || false}
                        onCheckedChange={(checked) => {
                          field.onChange(checked);
                          setTermsAndConditionChecked(!!checked);
                        }}
                        required
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      Accept terms and conditions
                    </FormLabel>
                  </FormItem>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="mt-5 w-full"
            disabled={!subjectChecked || !termsAndConditionChecked}
          >
            Register as Student
          </Button>
        </div>
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
