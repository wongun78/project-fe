import { Link } from "react-router-dom";
import heroImage from "@/assets/images/hero.png";
import logoIcon from "@/assets/icons/logo.png";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-12 bg-background">
      
      <div className="container-custom">
        
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          
          <div className="flex flex-col gap-4 items-start text-left">
            
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

          <div className="flex justify-center md:justify-end">
            <img 
              src={heroImage} 
              alt="Quiz illustration" 
              className="max-w-md w-full h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;