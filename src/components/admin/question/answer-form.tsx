import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardWrap,
  CardTitle,
} from "@/components/ui/card";
import { FaSync, FaSave } from "react-icons/fa";

const AnswerForm = () => {
  return (
    <CardWrap>
      <CardHeader className="border-b">
        <CardTitle>Add Answer</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Description</Label>
            <Textarea placeholder="Enter your email" className="min-h-20" />
          </div>

          <div className="flex gap-8">
            <div className="flex items-center space-x-2">
              <Checkbox id="ans-correct" />
              <Label htmlFor="ans-correct">Is Correct?</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="ans-active" />
              <Label htmlFor="ans-active">Active</Label>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-4 border-t pt-6">
        <Button variant="outline" className="text-muted-foreground">
          <FaSync className="mr-2" /> Cancel
        </Button>
        <Button>
          <FaSave className="mr-2" /> Save
        </Button>
      </CardFooter>
    </CardWrap>
  );
};

export default AnswerForm;
