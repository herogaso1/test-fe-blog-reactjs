"use client";

import { useState } from "react";
import { MoreHorizontalIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

export default function AuthMenu() {
  const [showNewDialog, setShowNewDialog] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  return (
    <>
      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              className="aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive
  border border-border bg-white text-accent-foreground shadow-xs
  dark:bg-accent/70 dark:border-input
  inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all
  disabled:pointer-events-none disabled:opacity-50
  [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4
  shrink-0 [&_svg]:shrink-0 outline-none
  focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
  hover:bg-gray-100 dark:hover:bg-input/30
  h-9 px-4 py-2 has-[>svg]:px-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-user"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-40 p-2" align="end">
            <DropdownMenuGroup>
              <div>
                <Link
                  to="/Login"
                  className="group flex items-center gap-2 cursor-pointer hover:bg-[#5044e5] hover:text-white rounded py-1.5 px-1.5 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-fingerprint w-4 h-4 text-[#6b7280] group-hover:text-white"
                  >
                    <path d="M18.9 7a8 8 0 0 1 1.1 5v1a6 6 0 0 0 .8 3"></path>
                    <path d="M8 11a4 4 0 0 1 8 0v1a10 10 0 0 0 2 6"></path>
                    <path d="M12 11v2a14 14 0 0 0 2.5 8"></path>
                    <path d="M8 15a18 18 0 0 0 1.8 6"></path>
                    <path d="M4.9 19a22 22 0 0 1 -.9 -7v-1a8 8 0 0 1 12 -6.95"></path>
                  </svg>
                  Login
                </Link>
              </div>
              <div>
                <Link
                  to="/registration"
                  className="group flex items-center gap-2 cursor-pointer hover:bg-[#5044e5] hover:text-white rounded py-1.5 px-1.5 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-user-plus w-4 h-4 text-[#6b7280] group-hover:text-white"
                  >
                    <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                    <path d="M16 19h6"></path>
                    <path d="M19 16v6"></path>
                    <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
                  </svg>
                  Sign Up
                </Link>
              </div>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Dialog>
    </>
  );
}
