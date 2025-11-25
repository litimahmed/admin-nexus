import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import loginGradient from "@/assets/login-gradient.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success",
        description: "Welcome back!",
      });
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4 md:p-8">
      <div className="w-full max-w-6xl bg-card rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Column - Form */}
          <div className="flex items-center justify-center p-8 md:p-12">
            <div className="w-full max-w-md">
              {/* Logo & Branding */}
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground mb-4">
                  <Shield className="w-6 h-6 text-background" />
                </div>
                <h1 className="text-2xl font-semibold text-foreground mb-1">
                  Welcome Back Creative!
                </h1>
                <p className="text-sm text-muted-foreground">
                  We Are Happy to See You Again
                </p>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 mb-8">
                <button
                  onClick={() => setActiveTab("signin")}
                  className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === "signin"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeTab === "signup"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 bg-muted/50 border-border/50 rounded-xl text-sm placeholder:text-muted-foreground/60"
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-muted/50 border-border/50 rounded-xl text-sm placeholder:text-muted-foreground/60"
                    disabled={isLoading}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remember"
                      checked={rememberMe}
                      onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                      disabled={isLoading}
                      className="border-muted-foreground/30"
                    />
                    <label
                      htmlFor="remember"
                      className="text-sm text-muted-foreground cursor-pointer select-none"
                    >
                      Remember me
                    </label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-primary hover:text-primary-hover transition-colors duration-200 font-medium"
                    disabled={isLoading}
                  >
                    Forgot Password?
                  </button>
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary-hover text-primary-foreground rounded-xl text-sm font-medium shadow-md transition-all duration-200"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Right Column - Gradient Image */}
          <div className="hidden md:block relative overflow-hidden">
            <img
              src={loginGradient}
              alt="Abstract gradient background"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
