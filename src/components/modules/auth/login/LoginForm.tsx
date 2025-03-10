"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const LoginForm = () => {
  const form = useForm();

  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Card className="w-full max-w-md p-4 ">
      <CardHeader className="space-y-1 p-0">
        <CardTitle className="text-xl font-bold text-primary uppercase">
          Login
        </CardTitle>
      </CardHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-5 w-full">
            Register as Student
          </Button>
        </form>
        <div className="text-center pt-6 text-gray-500">
          Already have an account?{" "}
          <Link href="/register">
            <span className="text-primary">Register</span>
          </Link>
        </div>
      </Form>
    </Card>
  );
};

export default LoginForm;
