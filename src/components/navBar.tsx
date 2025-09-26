"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import AnimatedMenuLink from "./animatedMenuLink";

const demos = [
  { title: "Home One", src: "/menu_h1.jpg", new: true },
  { title: "Home Two", src: "/menu_h2.jpg", new: true },
  { title: "Home Three", src: "/menu_h3.jpg", new: false },
  { title: "Home Four", src: "/menu_h4.jpg", new: true },
  { title: "Home Five", src: "/menu_h5.jpg", new: false },
  { title: "Home Six", src: "/menu_h6.jpg", new: true },
  { title: "Home Seven", src: "/menu_h7.jpg", new: false },
];

const navigationItems = [
  "Home One",
  "Home Two",
  "Home Three",
  "Home Four",
  "Home Five",
  "Home Six",
  "Home Seven",
  "About Us",
  "Our Team",
  "Core Values",
  "Pricing Plans",
  "Career",
  "Testimonials",
  "FAQs",
  "Services Style 01",
  "Services Style 02",
  "Services Style 03",
  "Service Details",
  "Case Studies 01",
  "Case Studies 02",
  "Case Studies 03",
  "Case Details",
  "News - Gridview",
  "News - Listview",
  "News - Standard",
  "Single Post",
  "Contact Us",
  "Error Page",
];

export function Navbar() {
  return (
    <NavigationMenu
      viewport={false}
      className="hidden rounded-xl bg-white px-1 shadow lg:flex"
    >
      <NavigationMenuList className="flex items-center justify-center gap-0">
        <NavigationMenuItem className="py-2">
          <NavigationMenuTrigger className="text-[#636edf]">
            Demos
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-full -translate-x-1/3 transform px-4 pt-4 pb-1">
            <div className="hide-scrollbar max-w-4xl overflow-x-auto">
              <ul className="flex min-w-max gap-5 p-4">
                {demos.map((demo) => (
                  <NavigationMenuLink key={demo.title} asChild>
                    <li className="relative flex w-[250px] flex-col items-center rounded-md transition-shadow">
                      {demo.new && (
                        <div className="absolute -top-2 right-6 flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-2">
                          <span className="font-semibold text-white">new</span>
                        </div>
                      )}
                      <Image
                        src={demo.src}
                        width={250}
                        height={156}
                        alt={demo.title}
                        className="demo-image h-full w-full rounded-xl bg-white object-cover transition-shadow duration-200 ease-in"
                      />
                      <p className="mt-2 font-semibold">{demo.title}</p>
                    </li>
                  </NavigationMenuLink>
                ))}
              </ul>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-[#636edf]"></div>

        <NavigationMenuItem className="py-2">
          <NavigationMenuTrigger className="transition-colors duration-150 hover:text-[#636edf]">
            Company
          </NavigationMenuTrigger>
          <NavigationMenuContent className="px-4 pt-4 pb-1">
            <ul className="flex w-[200px] flex-col">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="cursor-pointer flex-row items-center gap-2 transition-colors duration-100 ease-linear hover:text-[#636edf]"
                  >
                    <span className="mr-2">01.</span>About Us
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="cursor-pointer flex-row items-center gap-2 transition-colors duration-100 ease-linear hover:text-[#636edf]"
                  >
                    <span className="mr-2">02.</span>Our Team
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="cursor-pointer flex-row items-center gap-2 transition-colors duration-100 ease-linear hover:text-[#636edf]"
                  >
                    <span className="mr-2">03.</span>Core Values
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="cursor-pointer flex-row items-center gap-2 transition-colors duration-100 ease-linear hover:text-[#636edf]"
                  >
                    <span className="mr-2">05.</span>Career
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="cursor-pointer flex-row items-center gap-2 transition-colors duration-100 ease-linear hover:text-[#636edf]"
                  >
                    <span className="mr-2">06.</span>Testimonials
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    href="#"
                    className="cursor-pointer flex-row items-center gap-2 transition-colors duration-100 ease-linear hover:text-[#636edf]"
                  >
                    <span className="mr-2">07.</span>FAQs
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-[#636edf]"></div>

        <NavigationMenuItem className="py-2">
          <NavigationMenuTrigger className="transition-colors duration-150 hover:text-[#636edf]">
            Services
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[200px] flex-col">
              <li>
                <AnimatedMenuLink>Service Style 01</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Service Style 02</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Service Style 03</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Service Details</AnimatedMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-[#636edf]"></div>

        <NavigationMenuItem className="py-2">
          <NavigationMenuTrigger className="transition-colors duration-150 hover:text-[#636edf]">
            Case Studies
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[200px] flex-col">
              <li>
                <AnimatedMenuLink>Case Studies 01</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Case Studies 02</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Case Studies 03</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Case Details</AnimatedMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-[#636edf]"></div>

        <NavigationMenuItem className="py-2">
          <NavigationMenuTrigger className="transition-colors duration-150 hover:text-[#636edf]">
            News
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="flex w-[200px] flex-col">
              <li>
                <AnimatedMenuLink>News - Gridview</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>News - Listview</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>News - Standard</AnimatedMenuLink>
              </li>
              <li>
                <AnimatedMenuLink>Single Post</AnimatedMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <div className="h-1.5 w-1.5 flex-shrink-0 rounded-xs bg-[#636edf]"></div>

        <NavigationMenuItem className="py-2">
          <NavigationMenuTrigger className="transition-colors duration-150 hover:text-[#636edf]">
            All Pages
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-1/2 -translate-x-1/2 transform">
            <ul className="grid w-[600px] grid-cols-3">
              {navigationItems.map((item) => (
                <li key={item} className="col-span-1">
                  <AnimatedMenuLink>{item}</AnimatedMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
