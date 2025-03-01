import Image from "next/image"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LinkedinIcon as LinkedInIcon, MailIcon, PhoneIcon, MapPinIcon, GithubIcon, FileText, Download } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-bold text-xl">Josh Loughran</div>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
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
            <ModeToggle />
          </div>
        </header>

        <main className="container py-10">
          {/* Hero Section */}
          <section id="about" className="py-12 md:py-24 lg:py-32 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Senior UX Expert &<br></br>Software Engineer
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Integrating AI, LLMs, and user-centered design into intuitive engineering solutions
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
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
              <div className="flex flex-wrap gap-4">
                <Button asChild>
                  <Link href="#contact">Contact Me</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#experience">View Experience</Link>
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
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
          <section id="experience" className="py-16">
            <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-white rounded-md p-1">
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
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">2018 – Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      Led UX design and integration of AI and LLM-driven capabilities into Siemens NX, improving
                      predictive analysis, automated workflows, and user interactions.
                    </li>
                    <li>
                      Developed agent-driven application using the Transformers library and OpenAI API for enhanced
                      product manager (PM) productivity and user research knowledge share.
                    </li>
                    <li>
                      Defined product requirements and UX strategies for cloud/web applications, marine, and electrical
                      and mechanical routing solutions.
                    </li>
                    <li>
                      Created interactive mockups, prototypes, and functional specifications from Figma designs,
                      effectively bridging user-centered design and development processes.
                    </li>
                    <li>
                      Managed agile product development cycles and facilitated team collaboration for continuous
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
                      <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-white rounded-md p-1">
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
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">2014 – 2018</Badge>
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
                    <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">2013 – 2014</Badge>
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

          {/* Skills Section */}
          <section id="skills" className="py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>

            <Tabs defaultValue="ai" className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 mb-8">
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
          </section>

          {/* Education & Certifications */}
          <section className="py-16 border-t">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>B.S. Mechanical Engineering</CardTitle>
                    <CardDescription>University of Cincinnati, OH (2013)</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-8">Certifications</h2>
                <Card>
                  <CardHeader>
                    <CardTitle>Certified SAFe Product Owner/Product Manager</CardTitle>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">Projects & Contributions</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Student Grouping App</CardTitle>
                  <CardDescription>Web Application</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4">
                    Developed a web application using React and Node.js, enabling educators to manage classes and
                    generate balanced student groups.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="http://student-grouper.vercel.app">Live Demo</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Hummel Ultracruiser Aircraft</CardTitle>
                  <CardDescription>Personal Aerospace Project</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="mb-4">
                    Actively building a Hummel Ultracruiser aircraft in home workshop, exploring my passion for
                    aerospace innovation and hands-on engineering.
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="https://www.youtube.com/@Joshmakes">Follow Along</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full md:col-span-2">
                <CardHeader>
                  <CardTitle>Siemens NX Contributions</CardTitle>
                  <CardDescription>Professional Projects</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Select Similar Faces and Edges</h4>
                      <p className="text-sm text-muted-foreground">Enhanced selection capabilities in Siemens NX</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">Select Similar Components</h4>
                      <p className="text-sm text-muted-foreground">Improved component selection workflow</p>
                    </Card>
                    <Card className="p-4">
                      <h4 className="font-semibold mb-2">NX X Copilot Chat</h4>
                      <p className="text-sm text-muted-foreground">AI-powered assistance for Siemens NX</p>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Volunteer Section */}
          <section className="py-16 border-t">
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
                  <p>Produced 5,000 face shields during COVID-19 pandemic.</p>
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
          <section id="contact" className="py-16 border-t">
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
                    <a href="http://github.com/4eyedRaven" target="_blank" rel="noopener noreferrer" className="hover:underline">
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
                  <p className="text-muted-foreground">
                    Download my resume in your preferred format:
                  </p>
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
