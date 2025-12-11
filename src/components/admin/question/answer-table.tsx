import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardHeader,
  CardWrap,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

interface Answer {
  id: number;
  content: string;
  isCorrect: string;
  status: string;
}

interface AnswerTableProps {
  answers: Answer[];
}

const AnswerTable = ({ answers }: AnswerTableProps) => {
  return (
    <CardWrap>
      <CardHeader className="border-b">
        <CardTitle>Answer List</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <Table>
          <TableHeader className="bg-muted/50">
            <TableRow>
              <TableHead className="pl-6 w-[40%]">Content</TableHead>
              <TableHead>Is Correct</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right pr-6">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {answers.map((answer) => (
              <TableRow key={answer.id}>
                <TableCell className="pl-6">{answer.content}</TableCell>
                <TableCell>{answer.isCorrect}</TableCell>
                <TableCell>{answer.status}</TableCell>
                <TableCell className="text-right pr-6">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      <FaTrash />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="p-4 flex justify-end">
          <Button>
            <FaPlus className="mr-2" /> Add
          </Button>
        </div>
      </CardContent>
    </CardWrap>
  );
};

export default AnswerTable;
