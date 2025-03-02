"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  LinkedinIcon as LinkedInIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  FileText,
  Download,
  Menu,
  X,
} from "lucide-react"

// Reusable VideoPlayer component that toggles from a clickable thumbnail to an embedded YouTube player
function VideoPlayer({ videoId, thumbnailUrl, alt }: { videoId: string; thumbnailUrl: string; alt: string }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative w-full aspect-video">
      {playing ? (
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="relative w-full h-full cursor-pointer" onClick={() => setPlaying(true)}>
          <Image
            src={thumbnailUrl}
            alt={alt}
            fill
            className="object-cover rounded"
          />
          {/* Play Icon Overlay with a circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center justify-center w-20 h-20 bg-white/80 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-black"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile nav component (Hamburger)
function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <Button variant="ghost" className="p-2" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div className="absolute top-16 left-0 z-50 w-full border-t border-b bg-background">
          <nav className="flex flex-col items-start p-4 gap-4">
            <Link href="#about" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              About
            </Link>
            <Link href="#experience" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              Experience
            </Link>
            <Link href="#education" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              Education
            </Link>
            <Link href="#skills" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              Skills
            </Link>
            <Link href="#projects" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              Projects
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-bold text-xl">Josh Loughran</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Education
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Skills
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>

            {/* Mobile Nav + Mode Toggle */}
            <div className="flex items-center gap-2">
              <div className="md:hidden">
                <MobileNav />
              </div>
              <ModeToggle />
            </div>
          </div>
        </header>

        <main className="container py-8 md:py-10">
          {/* Hero Section */}
          <section
            id="about"
            className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start md:gap-12 py-12 md:py-24"
          >
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Senior UX Expert &<br />Software Engineer
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Integrating AI, LLMs, and user-centered design into intuitive engineering solutions
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <Badge variant="secondary" className="text-sm">
                  AI & Machine Learning
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  UX Design
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Web Development
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Software Engineering
                </Badge>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#experience">View Experience</Link>
                </Button>
              </div>
            </div>

            {/* Image */}
            <div className="flex-shrink-0 w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/josh_headshot.jpg"
                alt="Josh Loughran"
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </section>

          {/* Contact Info */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-t border-b">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <span>Cincinnati, OH 45245</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href="mailto:JoshLoughran1@gmail.com" className="hover:underline">
                JoshLoughran1@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <a href="tel:+15132933465" className="hover:underline">
                (513) 293-3465
              </a>
            </div>
            <div className="flex items-center gap-2">
              <LinkedInIcon className="h-5 w-5 text-muted-foreground" />
              <a
                href="https://linkedin.com/in/josh-loughran/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/josh-loughran/
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-12 md:py-16">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-transparent rounded-md p-1 flex items-center justify-center">
                        <Image
                          src="/siemens_logo.svg"
                          alt="Siemens logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle>Senior Product Designer</CardTitle>
                        <CardDescription>Siemens Digital Industries Software | Milford, OH</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                      2018 – Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Lead UX design and integration of AI and LLM-driven capabilities into Siemens NX, improving
                      predictive analysis, automated workflows, and user interactions.
                    </li>
                    <li>
                      Develop agent-driven applications using the Transformers library and OpenAI API for enhanced
                      product manager (PM) productivity and user research knowledge share.
                    </li>
                    <li>
                      Define product requirements and UX strategies for cloud/web applications, marine, and electrical
                      and mechanical routing solutions.
                    </li>
                    <li>
                      Create interactive mockups, prototypes, and functional specifications from Figma designs,
                      effectively bridging user-centered design and development processes.
                    </li>
                    <li>
                      Manage agile product development cycles and facilitate team collaboration for continuous
                      deployment and enhancements.
                    </li>
                    <li>
                      Automated extraction and rule-based review of user-facing text within Siemens NX via LLM, reducing
                      manual review time over 30% and improving incidence catch rate over 20%.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-transparent rounded-md p-1 flex items-center justify-center">
                        <Image
                          src="/siemens_logo.svg"
                          alt="Siemens logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle>Application Engineer</CardTitle>
                        <CardDescription>Siemens Digital Industries Software | Milford, OH</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                      2014 – 2018
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Automated testing procedures across Siemens NX Routing & Assemblies, Teamcenter, and Mentor
                      Graphics Capital, significantly improving product reliability.
                    </li>
                    <li>Enhanced QA processes and proactively managed stakeholder communications and risks.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-white rounded-md p-1">
                        <Image
                          src="/honda_logo.svg"
                          alt="Honda logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle>Engine Design Engineer</CardTitle>
                        <CardDescription>Honda R&D | Marysville, OH</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                      2013 – 2014
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Developed fuel system components meeting high standards for safety, efficiency, and performance.
                    </li>
                    <li>Collaborated across departments to achieve robust engineering outcomes.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Education & Certifications Section */}
          <section id="education" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Education & Certifications</h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-white rounded-md p-1">
                        <Image
                          src="/uc_logo.svg"
                          alt="University of Cincinnati logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle>Bachelor of Science, Mechanical Engineering</CardTitle>
                        <CardDescription>University of Cincinnati | Cincinnati, OH</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                      2008 – 2013
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Focus on mechanical design, computational methods, and systems engineering.</li>
                    <li>Participated in the co-op program, gaining practical experience with industry leaders.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-white rounded-md p-1">
                        <Image
                          src="/safe_logo.svg"
                          alt="SAFe logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <CardTitle>SAFe® 5 Practitioner</CardTitle>
                        <CardDescription>Scaled Agile, Inc.</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                      2021 – Present
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Certified in applying Lean-Agile principles and practices across the enterprise.</li>
                    <li>Experienced in planning and executing Program Increments within an Agile Release Train.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

            {/* Tabs for large screens */}
            <div className="hidden lg:block">
              <Tabs defaultValue="ai" className="w-full">
                <TabsList className="flex gap-2 py-2 whitespace-nowrap">
                  <TabsTrigger value="ai">AI & ML</TabsTrigger>
                  <TabsTrigger value="web">Web Dev</TabsTrigger>
                  <TabsTrigger value="programming">Programming</TabsTrigger>
                  <TabsTrigger value="databases">Databases</TabsTrigger>
                  <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
                  <TabsTrigger value="cad">CAD & Simulation</TabsTrigger>
                  <TabsTrigger value="ux">UI/UX Tools</TabsTrigger>
                </TabsList>

                <TabsContent value="ai" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["AWS Bedrock", "Azure OpenAI", "Transformers", "CrewAI", "Prompt Design"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="web" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="programming" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Python", "C++", "MATLAB", "Visual Basic"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="databases" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["SQL", "MongoDB", "Chroma", "OpenSearch", "FAISS"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cloud" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["AWS S3", "Docker", "Git", "CI/CD"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="cad" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Siemens NX", "Solidworks", "ANSYS", "CATIA", "AutoCAD"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="ux" className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Figma", "Sketch", "Illustrator", "Lunacy"].map((skill) => (
                      <Card key={skill} className="flex items-center justify-center p-4 h-24">
                        <span className="font-medium text-center">{skill}</span>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Mobile (badge-based) for smaller screens */}
            <div className="lg:hidden space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">AI & ML</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS Bedrock", "Azure OpenAI", "Transformers", "CrewAI", "Prompt Design"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Web Dev</h3>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Programming</h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C++", "MATLAB", "Visual Basic"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {["SQL", "MongoDB", "Chroma", "OpenSearch", "FAISS"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Cloud & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS S3", "Docker", "Git", "CI/CD"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">CAD & Simulation</h3>
                <div className="flex flex-wrap gap-2">
                  {["Siemens NX", "Solidworks", "ANSYS", "CATIA", "AutoCAD"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Sketch", "Illustrator", "Lunacy"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
{/* Projects Section */}
<section id="projects" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Projects & Contributions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Student Grouping App */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-4">
                    <Image
                      src="/student-grouping-app-thumbnail.jpg"
                      alt="Student Grouping App"
                      width={400}
                      height={225}
                      className="rounded"
                    />
                  </div>
                  <CardTitle>Student Grouping App</CardTitle>
                  <CardDescription>Web Application</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4">
                    Developed a web application using React and Node.js, enabling educators to manage classes and generate balanced student groups.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="http://student-grouper.vercel.app">Live Demo</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Hummel Ultracruiser Aircraft */}
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <div className="mb-4">
                    <Image
                      src="/hummel-ultracruiser-thumbnail.jpg"
                      alt="Hummel Ultracruiser Aircraft"
                      width={400}
                      height={225}
                      className="rounded"
                    />
                  </div>
                  <CardTitle>Hummel Ultracruiser Aircraft</CardTitle>
                  <CardDescription>Personal Aerospace Project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4">
                    Actively building a Hummel Ultracruiser aircraft in my home workshop, exploring a passion for aerospace innovation and hands-on engineering.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="https://www.youtube.com/@Joshmakes">Follow Along</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Siemens NX Contributions */}
              <Card className="flex flex-col h-full md:col-span-2">
                <CardHeader>
                  <CardTitle>Siemens NX Contributions</CardTitle>
                  <CardDescription>Professional Projects</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Select Similar Faces and Edges */}
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Select Similar Faces and Edges</h4>
                      <div className="mb-2">
                        <Image
                          src="/nx-select-similar-faces-thumbnail.png"
                          alt="Select Similar Faces and Edges"
                          width={400}
                          height={225}
                          className="rounded"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Leverages NX’s geometry recognition to quickly find and group faces or edges with similar properties (e.g., planar, cylindrical), saving time on repetitive selection tasks.
                        <br />
                        <a
                          href="https://blogs.sw.siemens.com/nx-design/nx-tips-and-tricks-select-similar-faces/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-foreground"
                        >
                          Read more in this NX Tips & Tricks blog
                        </a>
                      </p>
                    </Card>
                    {/* Select Similar Components (video) */}
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Select Similar Components</h4>
                      <VideoPlayer
                        videoId="1ka_uD8LM80"
                        thumbnailUrl="https://img.youtube.com/vi/1ka_uD8LM80/hqdefault.jpg"
                        alt="Select Similar Components"
                      />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Utilize NX’s selection tools to automatically group similar components in large assemblies for efficient editing.
                      </p>
                    </Card>
                    {/* NX X Copilot Chat (video) */}
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">NX X Copilot Chat</h4>
                      <VideoPlayer
                        videoId="lk5VmsjtOns"
                        thumbnailUrl="https://img.youtube.com/vi/lk5VmsjtOns/hqdefault.jpg"
                        alt="NX X Copilot Chat"
                      />
                      <p className="mt-2 text-sm text-muted-foreground">
                        Experience AI-powered design assistance with real-time insights and contextual help right inside NX.
                      </p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Volunteer Section */}
          <section className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Volunteer & Leadership</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>STEM Ambassador</CardTitle>
                  <CardDescription>Siemens</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Managed STEM outreach programs and technologies.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Co-founder, 3D Printed Face Shields</CardTitle>
                  <CardDescription>COVID-19 Response</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Produced 5,000 face shields during the COVID-19 pandemic.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Engineer</CardTitle>
                  <CardDescription>Engineers Without Borders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Designed water distribution systems for a Tanzanian community.</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <a href="mailto:JoshLoughran1@gmail.com" className="hover:underline">
                      JoshLoughran1@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <a href="tel:+15132933465" className="hover:underline">
                      (513) 293-3465
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <LinkedInIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="https://linkedin.com/in/josh-loughran/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/josh-loughran/
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <GithubIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href="http://github.com/4eyedRaven"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      github.com/4eyedRaven
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Download My Resume</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">Download my resume in your preferred format:</p>
                  <div className="grid grid-cols-1 gap-4">
                    <Button variant="outline" asChild className="h-16 w-full justify-start gap-4">
                      <a
                        href="https://drive.google.com/file/d/1I4pO1uFQ6UYX9kbSmwvnwLEDFhWv791F/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-6 w-6 text-primary" />
                        <div className="flex flex-col items-start">
                          <span className="font-medium">Resume - PDF Format</span>
                          <span className="text-xs text-muted-foreground">Universal format for viewing</span>
                        </div>
                        <Download className="ml-auto h-5 w-5 text-muted-foreground" />
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="h-16 w-full justify-start gap-4">
                      <a
                        href="https://docs.google.com/document/d/1LQh8thg99IcEKeRDE10bK-c3HePjEG1Y/edit?usp=sharing&ouid=109595031920595380639&rtpof=true&sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FileText className="h-6 w-6 text-primary" />
                        <div className="flex flex-col items-start">
                          <span className="font-medium">Resume - DOCX Format</span>
                          <span className="text-xs text-muted-foreground">Editable format for MS Word</span>
                        </div>
                        <Download className="ml-auto h-5 w-5 text-muted-foreground" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Josh Loughran. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="mailto:JoshLoughran1@gmail.com" className="text-muted-foreground hover:text-foreground">
                <MailIcon className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/josh-loughran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <LinkedInIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="http://github.com/4eyedRaven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}