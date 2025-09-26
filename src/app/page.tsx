"use client";

import AnimatedButton from "@/components/animatedButton";
import FooterLink from "@/components/footerLink";
import { Navbar } from "@/components/navBar";
import ServicesAccordion from "@/components/services";
import { SideNavbar } from "@/components/sideBarNav";
import Testimonials from "@/components/testimonials";
import TitleSection from "@/components/titleSection";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Plus } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const demos = [
    { title: "Home One", src: "/menu_h1.jpg" },
    { title: "Home Two", src: "/menu_h2.jpg" },
    { title: "Home Three", src: "/menu_h3.jpg" },
    { title: "Home Four", src: "/menu_h4.jpg" },
    { title: "Home Five", src: "/menu_h5.jpg" },
    { title: "Home Six", src: "/menu_h6.jpg" },
    { title: "Home Seven", src: "/menu_h7.jpg" },
  ];

  const activities = [
    {
      src: "/activity1.svg",
      title: "Web Design Agency",
      desc: "As a leading web design and digital agency, our design and development specialists take all measures to ensure your website works like no other.",
    },
    {
      src: "/activity2.svg",
      title: "Mobile App Development",
      desc: "We’re can guide you through the whole process of delivering first class apps from start to finish.",
    },
    {
      src: "/activity3.svg",
      title: "Digital Marketing",
      desc: "Now more than ever, your digital presence is vital. Wherever your customers can find you, you need to make an impact.",
    },
  ];

  const projects = [
    {
      icon: "/project_logo_2.svg",
      title: "UI/UX Design Platform",
      type: "Advanced Analystics",
      src: "",
      iframe:
        "https://www.youtube.com/embed/g7xkVEWrX8E?autoplay=1&loop=1&playlist=g7xkVEWrX8E&mute=1&modestbranding=1&rel=0&controls=0&enablejsapi=1",
      bgcolor: "#12343E",
    },
    {
      icon: "/project_logo_1.svg",
      title: "Social Media Campaigns",
      type: "Design",
      src: "/project_14-1024x768.jpg",
      iframe: "",
      bgcolor: "#3E122F",
    },
    {
      icon: "/project_logo_3.svg",
      title: "Content Marketing Suite",
      type: "Development",
      src: "",
      iframe:
        "https://www.youtube.com/embed/J4xNhYeaGkI?autoplay=1&loop=1&playlist=J4xNhYeaGkI&mute=1&modestbranding=1&rel=0&controls=0&enablejsapi=1",
      bgcolor: "#526648",
    },
    {
      icon: "/project_logo_4.svg",
      title: "SEO & Marketing Tools",
      type: "Advanced Analystics",
      src: "/project_12-1024x731.jpg",
      iframe: "",
      bgcolor: "#423B2F",
    },
    {
      icon: "/project_logo_6.svg",
      title: "Creative Branding Agency",
      type: "Marketing Strategy",
      src: "/project_11-1024x683.jpg",
      iframe: "",
      bgcolor: "#2D2736",
    },
    {
      icon: "/project_logo_5.svg",
      title: "Video Production Hub",
      type: "Technology",
      src: "/project_10-1024x680.jpg",
      iframe: "",
      bgcolor: "#4A0E0F",
    },
  ];

  const leaders = [
    { name: "Marvin Jones", title: "Ceo - Founder", src: "/team-1.jpg" },
    { name: "Arlene Bell", title: "Chief Marketing", src: "/team-2.jpg" },
    { name: "Guy Hawkins", title: "Executive Admin", src: "/team-3.jpg" },
    { name: "Cody Fisher", title: "Office Manager", src: "/team-4.jpg" },
  ];

  const blogs = [
    {
      src: "/blog_11-1024x683.jpg",
      link: "Why Personalization is the Future of Digital Advertising",
      type: "Lifestyle",
    },
    {
      src: "/blog_10-1024x683.jpg",
      link: "Top Crypto Exchange Influencers in Hong Kong",
      type: "social media",
    },
    {
      src: "/blog_9-1024x683.jpg",
      link: "Top UI/UX Design Trends for 2024",
      type: "lifestyle",
    },
  ];

  return (
    <main className="max-w-svw overflow-clip px-2">
      <nav className="flex items-center justify-between px-4 py-6">
        <div className="order-lastmd:order-first lg:hidden">
          <SideNavbar />
        </div>

        <div className="order-first">
          <img
            src="/logo.svg"
            alt="diteck logo"
            className="h-[32px] w-[120px] object-contain"
          />
        </div>

        <Navbar />

        <Button variant="custom" size="custom" className="hidden lg:flex">
          <AnimatedButton>Get In Touch</AnimatedButton>
        </Button>
      </nav>

      <section className="relative -z-10 mt-6 flex w-full flex-col gap-y-2 text-6xl leading-13 font-medium lg:mt-36 lg:px-4 lg:text-8xl lg:leading-27 lg:font-semibold">
        <span>Finest solutions for</span>
        <div className="flex items-end gap-2 lg:gap-4">
          <span>all</span>
          <img
            src="/h1_img-deco.jpg"
            alt="hero-img"
            className="hidden h-[90px] w-[240px] overflow-hidden rounded-lg object-cover lg:flex"
          />
          <span>challenges</span>
        </div>
        <div className="absolute right-40 z-50 hidden lg:top-7 lg:flex">
          <img
            src="/h1_deco-1.png"
            alt=""
            className="h-80 w-80 object-contain"
          />
        </div>
        <div className="absolute -top-20 right-1/2 z-50 hidden lg:flex">
          <img
            src="/h1_deco-2.png"
            alt=""
            className="h-36 w-40 object-contain"
          />
        </div>

        <div
          className="relative mt-8 min-h-68 w-full overflow-clip rounded-2xl lg:mt-10 lg:rounded-[40px]"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            src="https://player.vimeo.com/video/1039504919?muted=1&autoplay=1&loop=1&background=1&app_id=122963"
            className="absolute top-0 left-0 h-full w-full scale-125 lg:scale-100"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Background Video"
          />

          <div className="absolute bottom-0 left-0 text-lg font-medium">
            <div className="relative flex h-full w-full items-center gap-4 rounded-tr-[36px] border-red-300 bg-[#F2F1F6] px-6 py-5 before:absolute before:-right-12 before:bottom-0 before:h-12 before:w-12 before:rounded-bl-[36px] before:bg-transparent before:shadow-[-12px_12px_0_0_#F2F1F6] after:absolute after:-top-12 after:left-0 after:h-12 after:w-12 after:rounded-bl-[36px] after:bg-transparent after:shadow-[-10px_10px_0_0_#F2F1F6]">
              <div className="flex -space-x-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/h1_customer-1.jpg" alt="Customer 1" />
                  <AvatarFallback>AB</AvatarFallback>
                </Avatar>

                <Avatar className="h-10 w-10">
                  <AvatarImage src="/h1_customer-2.jpg" alt="Customer 2" />
                  <AvatarFallback>CD</AvatarFallback>
                </Avatar>

                <Avatar className="h-10 w-10">
                  <AvatarImage src="/h1_customer-3.jpg" alt="Customer 3" />
                  <AvatarFallback>EF</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-3xl font-semibold tracking-tighter">
                  1.7M+
                </span>
                <span className="text-xs leading-tight font-normal text-gray-600">
                  satisfied <br /> customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TitleSection
        text="Who we are"
        title="Your partners for digital success"
        titleClassName="max-w-xl"
        description="We’re a team of expert designers, web developers and marketers
            who’ve been delivering digital success for more than a decade. We
            excel at marketing websites, innovative web apps and mobile
            applications."
        descriptionClassName="max-w-xl"
      />

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:px-4">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="col-span-1 rounded-2xl bg-white px-4 py-8 transition-transform duration-300 hover:-translate-y-2 lg:p-12"
          >
            <div className="mb-12 lg:mb-24">
              <img
                src={activity.src}
                alt={activity.title}
                className="h-20 w-20 object-cover lg:h-24 lg:w-24"
              />
            </div>
            <div>
              <h3 className="mb-4 w-full text-3xl leading-8 font-medium tracking-tight break-words lg:text-4xl lg:leading-11">
                {activity.title}
              </h3>
              <p className="leading-5 text-[#484848] lg:leading-6">
                {activity.desc}
              </p>
            </div>
          </div>
        ))}
        <div className="relative col-span-1 h-fit rounded-2xl bg-[#636EDF] lg:h-full">
          <div className="flex flex-col pt-5 pr-6 pl-4 lg:pt-10 lg:pr-10 lg:pl-12">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-xs bg-white"></div>
              <span className="text-sm font-medium text-white">Need help</span>
            </div>
            <h3 className="text-4xl leading-10 font-medium text-white">
              Free advice. <br /> Book a callback
            </h3>
          </div>
          <div className="right-0 bottom-0 left-0 flex justify-end pr-6 lg:absolute lg:justify-center lg:pr-0">
            <img
              src="/h1_img-1.png"
              alt="hero image"
              className="w-48 lg:w-60"
            />
          </div>

          <div className="absolute right-0 -bottom-5">
            <div className="relative flex h-full w-full items-center justify-center rounded-tl-xl bg-[#F2F1F6] p-3 before:absolute before:-top-6 before:right-0 before:h-6 before:w-6 before:-rotate-90 before:rounded-bl-xl before:bg-transparent before:shadow-[-10px_10px_0_0_#F2F1F6] after:absolute after:bottom-5 after:-left-6 after:z-50 after:h-6 after:w-6 after:-rotate-90 after:rounded-bl-xl after:bg-transparent after:shadow-[-10px_10px_0_0_#F2F1F6]">
              <AnimatedButton className="font-medium lg:text-sm">
                Let's Talk
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-16 rounded-2xl bg-[#0A0F42] px-5 pt-12 pb-20 lg:mt-20 lg:rounded-[40px] lg:pt-6 lg:pb-40">
        <TitleSection
          className="mt-0 text-white"
          text="Our services"
          title="Digital services to grow your business"
          titleClassName="max-w-2xl"
        />

        <div className="mt-4 lg:mt-20">
          <ServicesAccordion />
        </div>

        <div className="absolute -bottom-12 left-1/2 -translate-1/2 transform lg:-bottom-16">
          <div className="relative flex h-full w-full items-center justify-center rounded-t-xl bg-[#F2F1F6] p-1 before:absolute before:top-0 before:-right-6 before:h-6 before:w-6 before:rounded-bl-xl before:bg-transparent before:shadow-[-10px_10px_0_0_#F2F1F6] after:absolute after:bottom-6 after:-left-6 after:z-50 after:h-6 after:w-6 after:-rotate-90 after:rounded-bl-xl after:bg-transparent after:shadow-[-10px_2px_0_0_#F2F1F6] lg:p-3 lg:before:top-2 lg:after:bottom-8">
            <AnimatedButton className="text-sm font-medium">
              View All Services
            </AnimatedButton>
          </div>
        </div>
      </section>

      <TitleSection
        text="Why choose us"
        title="Results that we sucessfully deliver"
        titleClassName="max-w-2xl"
      />

      <section className="mt-4 grid auto-rows-min grid-rows-2 gap-6 lg:mt-20 lg:grid-cols-3 lg:px-4">
        <div className="col-span-1 row-span-1 min-h-[360px] overflow-hidden rounded-2xl">
          <img
            src="/h1_img-2.jpg"
            alt="hero img 2"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-1 row-span-1 flex min-h-[360px] flex-col justify-between rounded-2xl bg-white p-12 px-8 py-6">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-2 w-2 rounded-xs bg-[#636edf]"></div>
            <span className="text-xl leading-6 font-medium">
              projects completed
            </span>
          </div>
          <div>
            <div className="flex place-items-start tracking-tighter">
              <span className="text-7xl leading-24 font-medium">475</span>
              <span className="-ml-1 pt-2 text-5xl font-medium">+</span>
            </div>
            <span className="text-[#484848]">
              Over 400 successful projects delivered to our clients worldwide.
            </span>
          </div>
        </div>

        <div className="relative col-span-1 h-[420px] overflow-hidden rounded-2xl lg:row-span-2 lg:min-h-full">
          <img
            src="/h1_img-3.jpg"
            alt="hero img 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-8 right-8 h-32 w-32 overflow-hidden rounded-full bg-white lg:top-16 lg:right-16">
            <div className="relative flex h-full w-full items-center justify-center">
              <img
                src="/curved-text.png"
                alt="curved text"
                className="scale-200 animate-[custom-rotate_10s_linear_infinite] object-cover"
              />
              <div className="absolute flex items-center rounded-full bg-[#636edf] p-5">
                <img
                  src="/symbol1.svg"
                  alt="symbol"
                  className="h-8 w-8 object-cover invert filter"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex min-h-[360px] flex-col justify-between rounded-2xl bg-white px-8 py-6 lg:p-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-2 w-2 rounded-xs bg-[#636edf]"></div>
            <span className="text-xl leading-6 font-medium">
              satisfied customers
            </span>
          </div>
          <div>
            <div className="flex place-items-start tracking-tighter">
              <span className="text-7xl leading-24 font-medium">98</span>
              <span className="-ml-1 pt-2 text-5xl font-medium">%</span>
            </div>
            <span className="text-[#484848]">
              A 98% satisfaction rate across all our consulting services.
            </span>
          </div>
        </div>
        <div className="col-span-1 row-span-1 flex min-h-[360px] flex-col justify-between rounded-2xl bg-white px-8 py-6 lg:p-12">
          <div className="mb-4 flex items-center gap-4">
            <div className="h-2 w-2 rounded-xs bg-[#636edf]"></div>
            <span className="text-xl leading-6 font-medium">hours saved</span>
          </div>
          <div>
            <div className="flex place-items-start tracking-tighter">
              <span className="text-7xl leading-24 font-medium">843K</span>
              <span className="-ml-1 pt-2 text-5xl font-medium">+</span>
            </div>
            <span className="text-[#484848]">
              Our efficiency strategies have saved clients over 800,000 hours
              collectively.
            </span>
          </div>
        </div>
      </section>

      <section className="relative mt-12 rounded-2xl bg-white bg-[url('/404-bg.png')] bg-cover bg-center bg-no-repeat p-2 lg:mt-20 lg:rounded-[40px] lg:p-5 lg:px-7">
        <div className="absolute -bottom-16 left-1/2 -translate-1/2 transform">
          <div className="relative flex h-full w-full items-center justify-center rounded-t-xl bg-[#F2F1F6] p-3 before:absolute before:top-2 before:-right-6 before:h-6 before:w-6 before:rounded-bl-xl before:bg-transparent before:shadow-[-10px_10px_0_0_#F2F1F6] after:absolute after:bottom-8 after:-left-6 after:z-50 after:h-6 after:w-6 after:-rotate-90 after:rounded-bl-xl after:bg-transparent after:shadow-[-10px_10px_0_0_#F2F1F6]">
            <AnimatedButton className="text-sm font-medium">
              View All Works
            </AnimatedButton>
          </div>
        </div>

        <TitleSection
          text="Selected works"
          className="px-2"
          title="Our finished projects"
          titleClassName="max-w-xl"
          detail="Read how we’ve helped some of the biggest brands transform their business."
        />

        <div className="mt-4 mb-12 grid grid-cols-1 grid-rows-2 gap-6 lg:mt-20 lg:mb-36 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="col-span-1 row-span-1 min-h-[360px] overflow-hidden rounded-[20px]"
              style={{ backgroundColor: project.bgcolor }}
            >
              <div className="relative h-6/8 overflow-hidden rounded-[20px]">
                <div className="absolute top-1/2 left-1/2 z-10 flex h-full w-full -translate-x-1/2 -translate-y-1/2 transform items-center justify-center bg-[#484848]/40 bg-blend-color">
                  <img
                    src={project.icon}
                    alt={project.title}
                    className="max-h-12 w-auto"
                  />
                </div>

                {project.iframe && (
                  <div className="relative h-full w-full scale-135">
                    <iframe
                      src={project.iframe}
                      className="absolute top-0 left-0 h-full w-full"
                      frameBorder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      title="Background Video"
                    />
                  </div>
                )}

                {project.src && (
                  <img
                    src={project.src}
                    alt={project.title}
                    className="h-full w-full rounded-[20px] object-cover"
                  />
                )}
              </div>
              <div className="h-2/8 px-6 py-5">
                <h1 className="text-2xl leading-8 font-normal text-white">
                  {project.title}
                </h1>
                <span className="text-sm font-normal text-white">
                  {project.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TitleSection
        text="Our expert crew"
        title="Meet the leadership team"
        detail="We are all passionate and committed to deliver high quality services to our clients."
      />
      <section className="mt-4 grid grid-cols-1 gap-5 lg:mt-2 lg:grid-cols-4 lg:px-4">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className="group relative col-span-1 flex min-h-[360px] items-center justify-end rounded-2xl bg-white bg-gradient-to-b"
          >
            <img
              src={leader.src}
              alt={leader.name}
              className="h-full w-full rounded-2xl bg-gradient-to-t from-gray-500 to-slate-50 object-cover grayscale"
            />

            <div
              className="absolute inset-0 rounded-2xl transition duration-500 group-hover:opacity-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 50%)",
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl opacity-0 transition duration-500 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(to top, rgba(99,110,223,0.6) 0%, rgba(99,110,223,0.6) 20%, rgba(255,255,255,0) 50%)",
              }}
            />

            <div className="absolute bottom-5 left-8 z-10 text-white">
              <h3 className="text-3xl leading-12 font-bold">{leader.name}</h3>
              <p className="text-sm">{leader.title}</p>
            </div>

            <div className="absolute right-0 -bottom-5">
              <div className="relative flex h-full w-full items-center justify-center rounded-tl-xl bg-[#F2F1F6] p-2 pr-0 before:absolute before:-top-6 before:right-0 before:h-6 before:w-6 before:-rotate-90 before:rounded-bl-xl before:bg-transparent before:shadow-[-10px_10px_0_0_#F2F1F6] after:absolute after:bottom-5 after:-left-6 after:z-50 after:h-6 after:w-6 after:-rotate-90 after:rounded-bl-xl after:bg-transparent after:shadow-[-10px_5px_0_0_#F2F1F6]">
                <div className="z-20 flex items-center justify-center rounded-xl bg-white p-2 text-xl font-semibold shadow-sm transition-colors duration-150 ease-linear group-hover:bg-[#636edf]">
                  <Plus className="transition-colors duration-150 ease-linear group-hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="relative mt-12 lg:mt-20 lg:px-5">
        <div className="absolute top-60 -right-36 z-50 hidden rotate-12 lg:flex">
          <img
            src="/h1_deco-4.png"
            alt=""
            className="h-80 w-80 object-contain"
          />
        </div>

        <div className="relative -z-10 flex h-16 w-full justify-center lg:h-40">
          <h2 className="absolute top-2 left-1/2 w-fit -translate-x-1/2 text-7xl leading-20 font-medium tracking-tight text-white shadow-white lg:top-6 lg:-mb-14 lg:text-[172px] lg:leading-48">
            testimonials
          </h2>
        </div>
        <div className="rounded-2xl bg-white bg-[url('/404-bg.png')] bg-cover bg-center bg-no-repeat p-5 lg:rounded-[40px] lg:p-10">
          <Testimonials />
        </div>
      </section>

      <section className="mt-12 lg:mt-20">
        <TitleSection
          text="Recent psot"
          title="Latest news and industry insights"
          titleClassName="max-w-xl"
        />
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-6 lg:px-5">
          <div className="relative col-span-2 hidden h-full lg:flex">
            <div className="absolute top-96 -left-32 z-50">
              <img
                src="/h2_decor2.png"
                alt=""
                className="h-[272px] w-[272px] object-contain"
              />
            </div>
          </div>
          <div className="col-span-1 h-fit lg:col-span-4">
            <div className="relative h-[420px] w-full rounded-2xl lg:rounded-3xl">
              <img
                src="/blog_12-1024x683.jpg"
                alt="blog img"
                className="h-full w-full overflow-hidden rounded-3xl object-cover"
              />
              <div className="absolute -bottom-4 left-0">
                <div className="relative flex h-full w-full items-center justify-center gap-2 rounded-t-xl bg-[#F2F1F6] p-3 pr-5 before:absolute before:-right-6 before:bottom-4 before:h-6 before:w-6 before:rounded-bl-xl before:bg-transparent before:shadow-[-10px_10px_0_0_#F2F1F6] after:absolute after:bottom-10 after:left-0 after:z-50 after:h-6 after:w-6 after:rounded-bl-xl after:bg-transparent after:shadow-[-10px_10px_0_0_#F2F1F6]">
                  <Link
                    href="/"
                    className="text-xs leading-4 font-semibold tracking-tight text-[#636edf] uppercase"
                  >
                    Company
                  </Link>
                  <Link
                    href="/"
                    className="text-xs leading-4 font-semibold tracking-tight uppercase transition-colors duration-150 ease-in hover:text-[#636edf]"
                  >
                    20 Nov 2024
                  </Link>
                  <Link
                    href="/"
                    className="text-xs leading-4 font-semibold tracking-tight uppercase transition-colors duration-150 ease-in hover:text-[#636edf]"
                  >
                    admin
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <div className="border-b-[1.5px] border-b-[#484848] pb-12">
                <h2 className="text-4xl leading-11 font-medium tracking-tight lg:text-5xl lg:leading-14 lg:font-normal">
                  <Link href="/">
                    Top Digital Agency Case Studies in Web3 Marketing
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-4 tracking-tight text-[#484848] lg:mt-8">
                  We bring deep, functional expertise, but are known for our
                  holistic perspective: we capture value across boundaries…
                </p>
              </div>

              <div>
                {blogs.map((b, i) => (
                  <div
                    key={i}
                    className="group h-fit overflow-hidden border-b-[1.5px] border-b-[#484848] py-4 transition-all duration-500 ease-in-out lg:max-h-40 lg:py-8 lg:hover:max-h-[500px]"
                  >
                    <div className="flex h-fit flex-col items-center justify-center gap-4 lg:flex-row lg:gap-10">
                      <div className="overflow-hidden rounded-xl lg:h-[160px] lg:w-[300px]">
                        <img
                          src={b.src}
                          alt="blog img"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex w-full flex-col items-center justify-between lg:flex-row">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            <Link
                              href="/"
                              className="text-sm leading-4 font-semibold tracking-tight text-[#636edf] uppercase lg:text-xs"
                            >
                              {b.type}
                            </Link>
                            <Link
                              href="/"
                              className="text-sm leading-4 font-semibold tracking-tight uppercase transition-colors duration-150 ease-in hover:text-[#636edf] lg:text-xs"
                            >
                              20 Nov 2024
                            </Link>
                            <Link
                              href="/"
                              className="text-sm leading-4 font-semibold tracking-tight uppercase transition-colors duration-150 ease-in hover:text-[#636edf] lg:text-xs"
                            >
                              admin
                            </Link>
                          </div>
                          <h2 className="line-clamp-2 cursor-pointer text-4xl leading-10 font-medium transition-colors duration-700 ease-in-out hover:text-[#636edf] lg:max-w-md lg:text-3xl lg:leading-8">
                            {b.link}
                          </h2>
                        </div>
                        <div className="mt-6 flex w-full transition-opacity duration-500 ease-in-out group-hover:opacity-100 lg:mt-0 lg:items-center lg:justify-center lg:opacity-0">
                          <span className="relative z-10 mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-[#636edf]">
                            <ArrowRight
                              className="text-white"
                              height={20}
                              width={20}
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-20 rounded-3xl bg-[#0A0F42] px-5 py-4 text-white lg:rounded-[40px] lg:py-8">
        <div className="flex flex-col border-b-2 border-b-[#636edf] py-8 pb-4 lg:flex-row lg:border-b lg:py-20 lg:pb-12">
          <div className="lg:w-1/2">
            <span className="text-2xl leading-8 font-medium tracking-tight lg:text-xl lg:leading-6">
              Tell us about your project
            </span>
            <div className="group relative mt-6 w-fit text-6xl leading-16 font-medium tracking-tighter lg:mt-0 lg:text-9xl lg:leading-40">
              Let's talk
              <div className="absolute top-1/2 left-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 scale-0 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-white transition-transform duration-300 ease-in group-hover:scale-100">
                <div className="relative flex h-40 w-40 items-center justify-center text-white">
                  <img
                    src="/contact-text.jpg"
                    alt="curved text"
                    className="scale-[265%] animate-[custom-rotate_10s_linear_infinite] object-cover"
                  />
                  <div className="absolute flex items-center rounded-full bg-[#636edf] p-5">
                    <Mail className="h-10 w-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2">
            <div className="border-b border-b-[#484848] pb-8 lg:pb-10">
              <span className="text-2xl leading-8 font-medium tracking-tight lg:text-xl lg:leading-6">
                Get the latest inspiration & insights
              </span>
              <div className="relative mt-6 h-fit max-w-md overflow-hidden rounded-2xl bg-white py-2 pr-0 lg:mt-6">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-full cursor-pointer border-none px-5 text-black"
                />
                <div className="absolute top-1/2 -right-3 flex h-10 w-10 -translate-1/2 cursor-pointer items-center justify-center rounded-xl bg-[#636edf]">
                  <ArrowRight className="text-white" height={20} width={20} />
                </div>
              </div>
            </div>

            <div className="mg:gap-0 grid grid-cols-2 grid-rows-2 py-4 lg:grid-cols-3 lg:grid-rows-1 lg:py-10">
              <div className="col-span-1 flex flex-col gap-2">
                {["works", "expertise", "about", "team", "awards"].map(
                  (item, index) => (
                    <FooterLink key={index}>{item}</FooterLink>
                  ),
                )}
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                {["blog", "careers", "partnerships", "contact"].map(
                  (item, index) => (
                    <FooterLink key={index}>{item}</FooterLink>
                  ),
                )}
              </div>
              <div className="col-span-2 mt-8 flex flex-col gap-2 lg:col-span-1 lg:mt-0">
                <span className="block text-2xl leading-7 font-normal tracking-tight">
                  Head office
                </span>
                <p className="text-sm leading-5">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486
                </p>

                <span className="text-sm leading-5">support@example.com</span>

                <span className="text-lg leading-8 text-[#636edf]">
                  + (406) 555-0120
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-6 pb-4 lg:flex-row lg:items-center lg:justify-between lg:pt-12">
          <div className="text-sm lg:text-xs">
            &copy; 2025 <span className="text-[#636edf]">Diteck</span>. All
            Rights Reserved.
          </div>
          <div className="mt-2 flex items-center justify-center gap-3 text-xs lg:mt-0">
            <span className="mr-4 text-[#636edf]">Follow Us</span>
            <Link
              href="/"
              className="transition-colors duration-200 ease-in hover:text-[#636edf]"
            >
              Facebook
            </Link>
            <span className="rounded- full h-0.5 w-0.5 bg-white"></span>
            <Link
              href="/"
              className="transition-colors duration-200 ease-in hover:text-[#636edf]"
            >
              Instagram
            </Link>
            <span className="h-0.5 w-0.5 rounded-full bg-white"></span>
            <Link
              href="/"
              className="transition-colors duration-200 ease-in hover:text-[#636edf]"
            >
              Youtube
            </Link>
            <span className="h-0.5 w-0.5 rounded-full bg-white"></span>
            <Link
              href="/"
              className="transition-colors duration-200 ease-in hover:text-[#636edf]"
            >
              Tiktok
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
