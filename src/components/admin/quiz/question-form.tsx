import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardWrap,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { FaSync, FaSave } from "react-icons/fa";

const QuestionForm = () => {
  return (
    <CardWrap>
      <CardHeader className="border-b">
        <CardTitle>Add Question</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-6 md:flex-col">
          <div className="flex flex-row gap-4">
            <div className="space-y-2 flex-1">
              <Label>Question Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select question type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="multiple">Multiple Choice</SelectItem>
                  <SelectItem value="single">Single Answer</SelectItem>
                  <SelectItem value="boolean">True/False</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 flex-1">
              <Label>Order</Label>
              <Input placeholder="Enter order question in quiz" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col-reverse md:flex-row md:justify-between gap-4 border-t pt-6">
        <div></div>
        <div className="flex gap-2">
          <Button variant="outline" className="text-muted-foreground">
            <FaSync className="mr-2" /> Clear
          </Button>
          <Button>
            <FaSave className="mr-2" /> Save
          </Button>
        </div>
      </CardFooter>
    </CardWrap>
  );
};

export default QuestionForm;
