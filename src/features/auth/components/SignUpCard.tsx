"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { DottedSaparator } from "@/components/DottedSaparator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schema";
import { useRegister } from "../api/useRegiter";

export const SignUpCard = () => {
  const { mutate: register, isPending } = useRegister();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    register({ json: data });
  };

  return (
    <Card className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[487px] mx-auto border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-4 sm:p-6 md:p-7">
        <CardTitle className="text-lg sm:text-xl md:text-2xl font-bold">
          Sign Up
        </CardTitle>
        <CardDescription className="text-xs sm:text-sm md:text-base mt-2">
          By Signing up, you agree to our{" "}
          <Link href="/privacy">
            <span className="text-blue-700 hover:underline">
              Privacy Policy
            </span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            <span className="text-blue-700 hover:underline">
              Terms of Service
            </span>
          </Link>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-6 md:px-7">
        <DottedSaparator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 sm:space-y-4 mt-4 sm:mt-6 md:mt-7"
          >
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      disabled={isPending}
                      placeholder="Enter your name"
                      className="w-full h-10 sm:h-11 md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      disabled={isPending}
                      placeholder="Enter email address"
                      className="w-full h-10 sm:h-11 md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      type="password"
                      placeholder="Password"
                      className="w-full h-10 sm:h-11 md:h-12"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={isPending}
              size="lg"
              className="w-full h-10 sm:h-11 md:h-12 text-sm sm:text-base"
            >
              Register
            </Button>
          </form>
        </Form>
        <DottedSaparator className="my-4 sm:my-6 md:my-7" />
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
          <Button
            disabled={isPending}
            variant="secondary"
            size="lg"
            className="w-full h-9 sm:h-10 md:h-11 lg:h-12 text-xs sm:text-sm md:text-base"
          >
            <FcGoogle className="mr-1 sm:mr-2 size-3 sm:size-4 md:size-5" />
            <span className="hidden xs:inline">Sign up with Google</span>
            <span className="xs:hidden">Google</span>
          </Button>
          <Button
            disabled={isPending}
            variant="secondary"
            size="lg"
            className="w-full h-9 sm:h-10 md:h-11 lg:h-12 text-xs sm:text-sm md:text-base"
          >
            <FaGithub className="mr-1 sm:mr-2 size-3 sm:size-4 md:size-5" />
            <span className="hidden xs:inline">Sign up with Github</span>
            <span className="xs:hidden">Github</span>
          </Button>
        </div>
      </CardContent>
      <CardFooter className="flex-col px-4 sm:px-6 md:px-7">
        <DottedSaparator className="mb-4 sm:mb-6 md:mb-7 w-full" />
        <div className="flex items-center justify-center text-xs sm:text-sm md:text-base">
          <p>Already have an account?</p>
          <Link href="/sign-in">
            <span className="text-blue-700 ml-1 hover:underline">
              &nbsp;Login
            </span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
