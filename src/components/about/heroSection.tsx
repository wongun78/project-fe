import { Link } from "react-router-dom";
import heroImage from "@/assets/images/hero.png";
import logoIcon from "@/assets/icons/logo.png";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-12 bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 items-start text-left">
            <div className="flex flex-col gap-4">
              <Link to="/" className="flex items-center gap-2 font-bold">
                <img src={logoIcon} alt="Quiz Logo" className="h-8 w-8" />
                <span className="text-xl font-bold tracking-tight text-foreground">
                  Quizzes
                </span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                The leading online quiz platform in Vietnam. Enhance your
                knowledge and develop critical thinking every day.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-foreground">Contact</h3>
              <ul className="space-y-4 text-sm text-foreground/80">
                <li className="flex items-center gap-3">
                  <MdEmail className="text-xl text-primary" />
                  <span>congdinh2021@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdPhone className="text-xl text-primary" />
                  <span>+84 944 551 356</span>
                </li>
                <li className="flex items-start gap-3">
                  <MdLocationOn className="text-xl text-primary shrink-0" />
                  <span>123 Xuan Dinh, Bac Tu Liem, Ha Noi, Viet Nam</span>
                </li>
              </ul>
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
