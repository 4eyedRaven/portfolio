"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EducationSectionProps {
  locale: any;
}

export default function EducationSection({ locale }: EducationSectionProps) {
  return (
    <section id="education" className="py-12 md:py-16 border-t">
      <h2 className="text-3xl font-bold mb-8">{locale.education.title}</h2>
      <div className="space-y-8">
        {locale.education.institutions.map((inst: any, idx: number) => (
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
                {inst.bullets.map((bullet: any, i: number) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}