"use client";

import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function SideNavbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="bg-[#636EDF] p-2">
          <Menu className="h-8 w-8 text-white" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[280px] p-6 [&_.absolute]:hidden">
        <div>
          <img
            src="/logo.svg"
            alt="diteck logo"
            className="h-[32px] w-[120px] object-contain"
          />
        </div>

        <Accordion
          type="single"
          collapsible
          className="mt-4 w-full space-y-2 [&>*]:border-none"
        >
          <AccordionItem value="demos" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline [&[data-state=open]]:border-none">
              Demos
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-3 pt-2 pb-0 pl-3 text-sm">
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Home 1
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Home 2
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Home 3
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Home 4
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Home 5
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="company" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline [&[data-state=open]]:border-none">
              Company
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-3 pt-2 pb-0 pl-3 text-sm">
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                01. About Us
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                02. Our Team
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                03. Core Values
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                04. Pricing Plans
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                05. Career
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                06. Testimonials
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                07. FAQs
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="services" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline [&[data-state=open]]:border-none">
              Services
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-3 pt-2 pb-0 pl-3 text-sm">
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Service Style 01
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Service Style 02
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Service Style 03
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Service Details
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="case-studies" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline [&[data-state=open]]:border-none">
              Case Studies
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-2 pt-2 pb-0 pl-3 text-sm">
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Case Studies 01
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Case Studies 02
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Case Studies 03
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Case Details
              </Link>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="news" className="border-none">
            <AccordionTrigger className="py-2 text-sm font-medium hover:no-underline [&[data-state=open]]:border-none">
              News
            </AccordionTrigger>
            <AccordionContent className="flex flex-col space-y-2 pt-2 pb-0 pl-3 text-sm">
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                News - Gridview
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                News - Listview
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                News - Standard
              </Link>
              <Link
                href="#"
                className="py-1 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
              >
                Single Post
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="space-y-3 text-sm font-medium">
          <Link
            href="#"
            className="block py-2 transition-colors duration-200 ease-in-out hover:text-[#636EDF]"
          >
            All Pages
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
