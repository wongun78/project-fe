import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardWrap,
  CardTitle,
} from "@/components/ui/card";
import { FaPlus, FaSync, FaSearch } from "react-icons/fa";

const RoleSearchFilter = () => {
  return (
    <CardWrap>
      <CardHeader>
        <CardTitle>Role Management</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="space-y-2">
            <Label htmlFor="search-role">Name</Label>
            <Input id="search-role" placeholder="Enter role name to search" />
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

export default RoleSearchFilter;
