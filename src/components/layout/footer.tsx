import { Link } from "react-router-dom";
import logoIcon from "@/assets/icons/logo.png";

const Footer = () => {
  return (
    <footer className="w-full border-t bg-secondary/20 pt-16 pb-8">
      <div className="container-custom">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 mb-16">
          
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2 font-bold">
              <img 
            src={logoIcon} 
            alt="Quiz Logo" 
            className="h-8 w-8"
          />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Quizzes
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              The leading online quiz platform in Vietnam. Enhance your knowledge and develop critical thinking every day.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-foreground">Menu</h3>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors w-fit">
                Home
              </Link>
              <Link to="/quizzes" className="hover:text-primary transition-colors w-fit">
                Quizzes
              </Link>
              <Link to="/about" className="hover:text-primary transition-colors w-fit">
                About Us
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors w-fit">
                Contact
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-foreground">Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <span>📧</span> kiennt169@fpt.com
              </p>
              <p className="flex items-center gap-2">
                <span>📞</span> +84 84848484
              </p>
              <p className="flex items-center gap-2">
                <span>📍</span> Hanoi, Vietnam
              </p>
            </div>
          </div>

        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Quiz App. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;