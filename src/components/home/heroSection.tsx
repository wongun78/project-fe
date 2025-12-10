import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/images/hero.png";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-12 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 items-start text-left">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-foreground">
              Welcome to <span className="text-primary">Quiz App</span>
            </h1>

            <p className="max-w-[600px] text-muted-foreground text-base sm:text-sm md:text-lg">
              The leading online quiz platform. Challenge yourself with
              thousands of diverse questions and track your progress today.
            </p>

            <div className="mt-4">
              <Link to="/quizzes">
                <Button size="lg">Take a Quiz Now</Button>
              </Link>
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
