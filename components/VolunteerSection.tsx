"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface VolunteerSectionProps {
  locale: any;
}

export default function VolunteerSection({ locale }: VolunteerSectionProps) {
  return (
    <div id="volunteer">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale.volunteer.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Community involvement and leadership roles that demonstrate my commitment to making a positive impact
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {locale.volunteer.roles.map((role: any, idx: number) => (
          <Card key={idx} className="overflow-hidden flex flex-col">
            {role.imageUrl && (
              <div className="relative w-full h-48">
                <Image 
                  src={role.imageUrl} 
                  alt={`${role.title} at ${role.organization}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <CardHeader>
              <CardTitle>{role.title}</CardTitle>
              <CardDescription>{role.organization}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p>{role.description}</p>
              {role.link && (
                <div className="mt-4">
                  <Button variant="outline" asChild>
                    <Link 
                      href={role.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {role.linkText || "Learn more"}
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}