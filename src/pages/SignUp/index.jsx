import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-lGLL0Zb0.png";
import { Label } from "@radix-ui/react-label";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#020024] via-[#5044e5] to-[#00d4ff]">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex justify-center items-center">
          <a href="/">
            <img src={logo} className="w-15 h-15" alt="" />
          </a>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter Your Username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  id="password"
                  placeholder="Enter Your Password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button type="submit" className="w-full bg-blue-700 text-white">
            Signup
          </Button>
          <Label className="text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
