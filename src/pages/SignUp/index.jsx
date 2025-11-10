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
import { toast } from "react-hot-toast";
import { SignUpUser } from "@/components/services/api/user";
import { Spinner } from "@/components/ui/spinner";

export function SignUp() {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSignUp = async () => {
    try {
      if (!email || !name || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      setLoading(true);
      const response = await SignUpUser({ email, username: name, password });
      console.log("SignUp successful:", response);
    } catch (error) {
      toast.error("SignUp failed:", error?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#020024] via-[#5044e5] to-[#00d4ff]">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-15 h-15" alt="" />
          </Link>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  type="text"
                  placeholder="Enter Your Username"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Enter Your Password"
                  type="password"
                  required
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-4">
          <Button
            disabled={loading}
            onClick={handleSignUp}
            type="submit"
            className="w-full bg-blue-700 text-white"
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <Spinner /> Signing Up
              </div>
            ) : (
              "Signup"
            )}
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
