"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LinkedinIcon as LinkedInIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  GithubIcon,
  FileText,
  Download,
  Menu,
  X
} from "lucide-react";

import en from "../locales/en.json";
import de from "../locales/de.json";
import es from "../locales/es.json";
import it from "../locales/it.json";
import fr from "../locales/fr.json";

// Updated VideoPlayer accepts a locale prop.
function VideoPlayer({
  videoId,
  thumbnailUrl,
  alt,
  locale
}: {
  videoId: string;
  thumbnailUrl: string;
  alt: string;
  locale: any;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full aspect-video">
      {playing ? (
        <iframe
          className="w-full h-full rounded"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={locale.videoPlayer.iframeTitle}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div
          className="relative w-full h-full cursor-pointer"
          onClick={() => setPlaying(true)}
        >
          <Image
            src={thumbnailUrl}
            alt={alt}
            fill
            className="object-cover rounded"
          />
          {/* Play Icon Overlay */}
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
  );
}

// MobileNav now accepts the active locale as a prop.
function MobileNav({ locale }: { locale: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="ghost" className="p-2" onClick={() => setOpen(!open)}>
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      {open && (
        <div className="absolute top-16 left-0 z-50 w-full border-t border-b bg-background">
          <nav className="flex flex-col items-start p-4 gap-4">
            <Link href="#about" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.about}
            </Link>
            <Link href="#experience" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.experience}
            </Link>
            <Link href="#education" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.education}
            </Link>
            <Link href="#skills" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.skills}
            </Link>
            <Link href="#projects" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.projects}
            </Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="hover:text-foreground/80">
              {locale.header.nav.contact}
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  // Default language state set to "en"
  const [lang, setLang] = useState("en");

  // On mount, read the locale cookie and update the state if necessary.
  useEffect(() => {
    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    if (cookieValue && cookieValue !== lang) {
      setLang(cookieValue);
    }
  }, [lang]);

  // Select active locale based on the language state.
  const locale =
    lang === "de" ? de :
    lang === "es" ? es :
    lang === "it" ? it :
    lang === "fr" ? fr :
    en;

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-16 items-center justify-between">
            <div className="font-bold text-xl">{locale.header.title}</div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                {locale.header.nav.about}
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                {locale.header.nav.experience}
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                {locale.header.nav.education}
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                {locale.header.nav.skills}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                {locale.header.nav.projects}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                {locale.header.nav.contact}
              </Link>
            </nav>

            {/* Mobile Nav, Mode Toggle & Language Toggle */}
            <div className="flex items-center gap-2">
              <div className="md:hidden">
                <MobileNav locale={locale} />
              </div>
              <ModeToggle />
              <LanguageToggle lang={lang} setLang={setLang} />
            </div>
          </div>
        </header>

        <main className="container py-8 md:py-10">
          {/* Hero Section */}
          <section id="about" className="flex flex-col-reverse items-center gap-8 md:flex-row md:items-start md:gap-12 py-12 md:py-24">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                {locale.hero.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {locale.hero.subtitle}
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
                <Badge variant="secondary" className="text-sm">
                  {locale.hero.badges.ai}
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {locale.hero.badges.ux}
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {locale.hero.badges.web}
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  {locale.hero.badges.software}
                </Badge>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <Button asChild>
                  <Link href="#contact">{locale.hero.buttons.contact}</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#experience">{locale.hero.buttons.experience}</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="flex-shrink-0 w-48 h-48 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
              <Image
                src="/josh_headshot.jpg"
                alt={locale.hero.imageAlt}
                width={320}
                height={320}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </section>

          {/* Contact Info Section */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6 border-t border-b">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5 text-muted-foreground" />
              <span>{locale.contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href={`mailto:${locale.contactInfo.email}`} className="hover:underline">
                {locale.contactInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <a href={`tel:${locale.contactInfo.phone}`} className="hover:underline">
                {locale.contactInfo.phone}
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
                {locale.contactInfo.linkedin}
              </a>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-12 md:py-16">
            <h2 className="text-3xl font-bold mb-8">{locale.experience.title}</h2>
            <div className="space-y-8">
              {locale.experience.positions.map((position, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-transparent rounded-md p-1 flex items-center justify-center">
                          <Image
                            src={
                              position.title === "Ingegnere di Progettazione Motori" ||
                              position.title === "Motorbauingenieur"
                                ? "/honda_logo.svg"
                                : "/siemens_logo.svg"
                            }
                            alt={position.logoAlt}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle>{position.title}</CardTitle>
                          <CardDescription>{position.company}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                        {position.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {position.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">{locale.education.title}</h2>
            <div className="space-y-8">
              {locale.education.institutions.map((inst, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-white rounded-md p-1">
                          <Image
                            src={
                              inst.degree.includes("Bachelor") ||
                              inst.degree.includes("Laurea") ||
                              inst.degree.includes("Licence")
                                ? "/uc_logo.svg"
                                : "/safe_logo.svg"
                            }
                            alt={inst.logoAlt}
                            width={48}
                            height={48}
                            className="object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle>{inst.degree}</CardTitle>
                          <CardDescription>{inst.school}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline" className="w-fit whitespace-nowrap text-sm">
                        {inst.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2">
                      {inst.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">{locale.skills.title}</h2>
            {/* Desktop Tabs */}
            <div className="hidden lg:block">
              <Tabs defaultValue="ai" className="w-full">
                <TabsList className="flex gap-2 py-2 whitespace-nowrap">
                  {Object.entries(locale.skills.categories).map(([key, cat]) => (
                    <TabsTrigger key={key} value={key}>
                      {cat.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {Object.entries(locale.skills.categories).map(([key, cat]) => (
                  <TabsContent key={key} value={key} className="space-y-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {cat.skills.map((skill, i) => (
                        <Card key={i} className="flex items-center justify-center p-4 h-24">
                          <span className="font-medium text-center">{skill}</span>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
            {/* Mobile Badge List */}
            <div className="lg:hidden space-y-6">
              {Object.entries(locale.skills.categories).map(([key, cat]) => (
                <div key={key}>
                  <h3 className="text-xl font-semibold mb-2">{cat.label}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">{locale.projects.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {locale.projects.projectsList.map((project, idx) => {
                if (project.subProjects) {
                  return (
                    <Card key={idx} className="flex flex-col h-full md:col-span-2">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {project.subProjects.map((sub, subIdx) => (
                            <Card key={subIdx} className="p-4">
                              <h4 className="font-semibold mb-2">{sub.title}</h4>
                              <div className="mb-2">
                                {sub.videoId ? (
                                  <VideoPlayer
                                    videoId={sub.videoId}
                                    thumbnailUrl={sub.thumbnailUrl}
                                    alt={sub.imageAlt}
                                    locale={locale}
                                  />
                                ) : sub.imageUrl ? (
                                  <Image
                                    src={sub.imageUrl}
                                    alt={sub.imageAlt}
                                    width={400}
                                    height={225}
                                    className="rounded"
                                  />
                                ) : null}
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {sub.description}
                                {sub.linkText && (
                                  <>
                                    <br />
                                    <a
                                      href="https://blogs.sw.siemens.com/nx-design/nx-tips-and-tricks-select-similar-faces/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="underline hover:text-foreground"
                                    >
                                      {sub.linkText}
                                    </a>
                                  </>
                                )}
                              </p>
                            </Card>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  );
                } else {
                  return (
                    <Card key={idx} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="mb-4">
                          <Image
                            src={project.imageUrl}
                            alt={project.imageAlt}
                            width={400}
                            height={225}
                            className="rounded"
                          />
                        </div>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.category}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <p className="mb-4">{project.description}</p>
                        <Button variant="outline" asChild>
                          <Link
                            href={
                              project.title === "Student Grouping App" ||
                              project.title === "Aplicación de Agrupación de Estudiantes" ||
                              project.title === "Applicazione di Raggruppamento Studentesco" ||
                              project.title === "Application de Groupement d'Étudiants"
                                ? "http://student-grouper.vercel.app"
                                : "https://www.youtube.com/@Joshmakes"
                            }
                          >
                            {project.buttonText}
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  );
                }
              })}
            </div>
          </section>

          {/* Volunteer Section */}
          <section className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">{locale.volunteer.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {locale.volunteer.roles.map((role, idx) => (
                <Card key={idx}>
                  <CardHeader>
                    <CardTitle>{role.title}</CardTitle>
                    <CardDescription>{role.organization}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{role.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-12 md:py-16 border-t">
            <h2 className="text-3xl font-bold mb-8">{locale.contact.title}</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>{locale.contact.contactInfoTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`mailto:${locale.contact.contactDetails.email}`}
                      className="hover:underline"
                    >
                      {locale.contact.contactDetails.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`tel:${locale.contact.contactDetails.phone}`}
                      className="hover:underline"
                    >
                      {locale.contact.contactDetails.phone}
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
                      {locale.contact.contactDetails.linkedin}
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
                      {locale.contact.contactDetails.github}
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>{locale.contact.downloadResumeTitle}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{locale.contact.resumeText}</p>
                  <div className="grid grid-cols-1 gap-4">
                    {locale.contact.resumeOptions.map((option, idx) => (
                      <Button key={idx} variant="outline" asChild className="h-16 w-full justify-start gap-4">
                        <a href={option.link} target="_blank" rel="noopener noreferrer">
                          <FileText className="h-6 w-6 text-primary" />
                          <div className="flex flex-col items-start">
                            <span className="font-medium">{option.format}</span>
                            <span className="text-xs text-muted-foreground">{option.subText}</span>
                          </div>
                          <Download className="ml-auto h-5 w-5 text-muted-foreground" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        <footer className="border-t py-6 md:py-0">
          <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              {locale.footer.rights.replace("{year}", new Date().getFullYear().toString())}
            </p>
            <div className="flex items-center gap-4">
              <a href={`mailto:${locale.contact.contactDetails.email}`} className="text-muted-foreground hover:text-foreground">
                <MailIcon className="h-5 w-5" />
                <span className="sr-only">{locale.footer.social.email}</span>
              </a>
              <a
                href="https://linkedin.com/in/josh-loughran/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <LinkedInIcon className="h-5 w-5" />
                <span className="sr-only">{locale.footer.social.linkedin}</span>
              </a>
              <a
                href="http://github.com/4eyedRaven"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">{locale.footer.social.github}</span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}