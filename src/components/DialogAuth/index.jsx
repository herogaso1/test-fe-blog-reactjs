import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";

export function DialogAuth({ isOpen, setIsOpen }) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} className="">
      <DialogContent className=" fixed left-332 top-27 w-40 p-2 border-none shadow-lg ">
        <DialogFooter className="grid grid-cols-1 gap-2">
          <Link to="/login">
            <Button
              type="button"
              className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-fingerprint w-4 h-4 text-[#6b7280] group-hover:text-white"
              >
                <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
                <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
                <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
                <path d="M8 15a18 18 0 0 0 1.8 6"></path>
                <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
              </svg>
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button
              type="button"
              className="w-full bg-white text-black hover:bg-[#665de6] hover:text-white justify-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-user-plus w-4 h-4 text-[#6b7280] group-hover:text-white "
              >
                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                <path d="M16 19h6"></path>
                <path d="M19 16v6"></path>
                <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
              </svg>
              Sign up
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
