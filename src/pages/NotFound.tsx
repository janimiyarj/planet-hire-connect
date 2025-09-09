import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center section-gradient">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="card-elevated space-y-8">
          <div className="space-y-4">
            <h1 className="text-8xl font-bold text-primary">404</h1>
            <h2 className="text-3xl font-bold heading-corporate">Page Not Found</h2>
            <p className="text-corporate text-lg">
              Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="btn-hero">
              <a href="/">
                <Home className="mr-2 w-4 h-4" />
                Return to Home
              </a>
            </Button>
            <Button variant="outline" onClick={() => window.history.back()} className="btn-corporate">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
