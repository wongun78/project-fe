import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardWrap,
  CardTitle,
} from "@/components/ui/card";
import { FaPlus, FaSync, FaSearch } from "react-icons/fa";

const QuestionSearchFilter = () => {
  return (
    <CardWrap>
      <CardHeader>
        <CardTitle>Question Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="space-y-2 flex-1">
              <Label htmlFor="search-name">Name</Label>
              <Input id="search-name" placeholder="Enter role name to search" />
            </div>
            <div className="space-y-2 flex-1">
              <Label>Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select item" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="multiple">Multiple Choice</SelectItem>
                  <SelectItem value="single">Single Choice</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="status-filter" />
            <Label htmlFor="status-filter">Active</Label>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col-reverse md:flex-row md:justify-between gap-4 border-t pt-6">
        <Button>
          <FaPlus className="mr-2" /> Create
        </Button>

        <div className="flex gap-2">
          <Button variant="outline" className="text-muted-foreground">
            <FaSync className="mr-2" /> Clear
          </Button>
          <Button>
            <FaSearch className="mr-2" /> Search
          </Button>
        </div>
      </CardFooter>
    </CardWrap>
  );
};

export default QuestionSearchFilter;
