import QuizCard from "@/components/quiz/quizCard";
import type { Quiz } from "@/types/quiz";

import quiz1Img from "@/assets/images/quizzes/quiz-1.png";
import quiz2Img from "@/assets/images/quizzes/quiz-2.png";
import quiz3Img from "@/assets/images/quizzes/quiz-3.png";

const featuredQuizzes: Quiz[] = [
  {
    id: "1",
    title: "Capitals of Country",
    description: "Test your knowledge about world capitals and geography.",
    image: quiz1Img,
    duration: "15m",
  },
  {
    id: "2",
    title: "Capitals of Country",
    description: "Test your knowledge about world capitals and geography.",
    image: quiz2Img,
    duration: "15m",
  },
  {
    id: "3",
    title: "Capitals of Country",
    description: "Test your knowledge about world capitals and geography.",
    image: quiz3Img,
    duration: "15m",
  },
];

const FeaturedQuizzes = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
            Quizzes
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedQuizzes;
