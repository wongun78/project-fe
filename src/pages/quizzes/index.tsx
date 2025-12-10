import FeaturedQuizzes from "@/components/home/quiz-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const QuizPage = () => {
  return (
    <>
      <section className="container-custom py-12 md:py-12">
        <div className="w-full mx-auto text-center space-y-6">
          <h1 className="text-3xl font-bold tracking-tight">Take a Quiz</h1>

          <form className="flex flex-col sm:flex-row items-center w-full">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Enter quiz code to take a quiz"
                className="h-12 text-base shadow-sm"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-12 px-8 w-full sm:w-auto font-bold"
            >
              Take Quiz
            </Button>
          </form>
        </div>
      </section>
      <FeaturedQuizzes />
    </>
  );
};

export default QuizPage;
