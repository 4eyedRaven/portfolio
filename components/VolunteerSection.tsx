"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface VolunteerSectionProps {
  locale: any;
}

export default function VolunteerSection({ locale }: VolunteerSectionProps) {
  return (
    <section className="py-12 md:py-16 border-t">
      <h2 className="text-3xl font-bold mb-8">{locale.volunteer.title}</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {locale.volunteer.roles.map((role: any, idx: number) => (
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
  );
}