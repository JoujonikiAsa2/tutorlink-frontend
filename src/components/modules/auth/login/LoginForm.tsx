/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./loginFormValidation";
import { toast, Toaster } from "sonner";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { setCookies } from "@/services/AuthService";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const redirect = searchParams.get("redirectPath");
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      const res = await login(data).unwrap();
      console.log(res);
      console.log(res?.message);
      toast.success(res?.message);
      const authUser = jwtDecode(res?.data?.accessToken) as Record<
        string,
        unknown
      >;
      await setCookies(res?.data?.accessToken);
      console.log(authUser);
      const authState = {
        token: res?.data?.accessToken as string,
        user: authUser,
      };
      console.log(authState);
      dispatch(setUser(authState));
      if (redirect) {
        router.push(redirect);
      } else {
        router.push("/");
      }
    } catch (err: any) {
      console.error(err);
    }
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
                <p className="text-sm font-medium">Email</p>
                <FormControl>
                  <Input
                    type="email"
                    {...field}
                    value={field.value || ""}
                    placeholder="Enter your email"
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
                <p className="text-sm font-medium">Password</p>
                <FormControl>
                  <Input
                    type="password"
                    {...field}
                    value={field.value || ""}
                    placeholder="Enter your password"
                  />
                </FormControl>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-5 w-full">
            {isSubmitting ? "Loading .." : "Login"}
          </Button>
        </form>
        <div className="text-center pt-6 text-gray-500">
          Already have an account?{" "}
          <Link href="/register">
            <span className="text-primary">Register</span>
          </Link>
        </div>
      </Form>
      <Toaster richColors position="top-center" />
    </Card>
  );
};

export default LoginForm;
