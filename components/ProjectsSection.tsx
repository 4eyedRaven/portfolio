"use client";

import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {
  locale: any;
}

export default function ProjectsSection({ locale }: ProjectsSectionProps) {
  return (
    <div id="projects">
      <h2 className="text-3xl font-bold mb-8">{locale.projects.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {locale.projects.projectsList.map((project: any, idx: number) => {
          if (project.subProjects) {
            return (
              <Card key={idx} className="flex flex-col h-full md:col-span-2">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.subProjects.map((sub: any, subIdx: number) => (
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
                        project.title === "Random Roster"
                          ? "https://randomroster.com"
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
    </div>
  );
}