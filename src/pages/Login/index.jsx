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
import { loginUser } from "@/services/api/user";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "react-hot-toast";
export function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        toast.error("Please fill in all fields");
        return;
      }
      setLoading(true);
      const response = await loginUser({ email, password });
      console.log("Login successful:", response);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#020024] via-[#5044e5] to-[#00d4ff]">
      <Card className=" bg-white w-full max-w-sm">
        <CardHeader className="flex justify-center items-center">
          <Link to="/">
            <img src={logo} className="w-15 h-15" alt="" />
          </Link>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
          <Button
            disabled={loading}
            onClick={handleLogin}
            type="submit"
            className="w-full bg-[#5044e5] text-white"
          >
            {loading ? (
              <div className="flex gap-2 items-center">
                <Spinner /> Logging
              </div>
            ) : (
              "Login"
            )}
          </Button>
          <Label className="text-center mt-4">
            Don't have an account?{" "}
            <Link to="/signup" className="text-[#5044e5]">
              Signup
            </Link>
          </Label>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Login;
