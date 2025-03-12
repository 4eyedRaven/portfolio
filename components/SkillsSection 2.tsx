"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SkillsSectionProps {
  locale: any;
}

export default function SkillsSection({ locale }: SkillsSectionProps) {
  return (
    <section id="skills" className="py-12 md:py-16 border-t">
      <h2 className="text-3xl font-bold mb-8">{locale.skills.title}</h2>
      <div className="hidden lg:block">
        <Tabs defaultValue="ai" className="w-full">
          <TabsList className="flex gap-2 py-2 whitespace-nowrap">
            {Object.entries(locale.skills.categories).map(([key, cat]: [string, any]) => (
              <TabsTrigger key={key} value={key}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(locale.skills.categories).map(([key, cat]: [string, any]) => (
            <TabsContent key={key} value={key} className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cat.skills.map((skill: string, i: number) => (
                  <Card key={i} className="flex items-center justify-center p-4 h-24">
                    <span className="font-medium text-center">{skill}</span>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
      <div className="lg:hidden space-y-6">
        {Object.entries(locale.skills.categories).map(([key, cat]: [string, any]) => (
          <div key={key}>
            <h3 className="text-xl font-semibold mb-2">{cat.label}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill: string, i: number) => (
                <Badge key={i} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}