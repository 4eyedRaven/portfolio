"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExperienceSectionProps {
  locale: any;
}

export default function ExperienceSection({ locale }: ExperienceSectionProps) {
  return (
    <div id="experience">
      <h2 className="text-3xl font-bold mb-8">{locale.experience.title}</h2>
      <div className="space-y-8">
        {locale.experience.positions.map((position: any, idx: number) => (
          <Card key={idx}>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 relative flex-shrink-0 bg-white dark:bg-transparent rounded-md p-1 flex items-center justify-center">
                    <Image
                      src={
                        position.company.includes("Honda")
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
                {position.bullets.map((bullet: any, i: number) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}