import { Link } from "react-router-dom";
import logoIcon from "@/assets/icons/logo.png";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
      
      <div className="container-custom flex h-16 items-center justify-between">
        
        <Link to="/" className="flex items-center gap-2 font-bold">
          <img 
            src={logoIcon} 
            alt="Quiz Logo" 
            className="h-8 w-8"
          />
          <span className="text-xl tracking-tight text-foreground">Quizzes</span>
        </Link>

        <nav className="hidden gap-6 md:flex">
          <Link to="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/quizzes" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Quizzes
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Login
          </Link>
          <Link to="/register" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
            Register
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;