import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { LogOut, LayoutDashboard } from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/30">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
              <p className="text-xs text-muted-foreground">Welcome back</p>
            </div>
          </div>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="hover:bg-destructive hover:text-destructive-foreground transition-colors"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border/50 rounded-2xl shadow-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6">
              <LayoutDashboard className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to Your Dashboard
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              You've successfully logged in. This is your admin control panel.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Total Users</div>
              </div>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                <div className="text-4xl font-bold text-accent mb-2">0</div>
                <div className="text-sm text-muted-foreground">Active Sessions</div>
              </div>
              <div className="p-6 bg-secondary/50 rounded-xl border border-border/50">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">Notifications</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
