import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import type { Quiz } from "@/types/quiz";

interface QuizCardProps {
  quiz: Quiz;
}

const QuizCard = ({ quiz }: QuizCardProps) => {
  return (
    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={quiz.image}
          alt={quiz.title}
          className="h-full w-full object-cover"
        />
      </div>

      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-bold text-lg">{quiz.title}</h3>
          <span className="text-xs font-medium bg-secondary px-2 py-1 rounded text-muted-foreground">
            {quiz.duration}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{quiz.description}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/quiz/${quiz.id}`}>
          <Button className="w-full" size="lg">
            Start Quiz
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
