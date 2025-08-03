"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MailIcon, PhoneIcon, LinkedinIcon, GithubIcon, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactSectionProps {
  locale: any;
}

export default function ContactSection({ locale }: ContactSectionProps) {
  return (
    <div id="contact">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{locale.contact.title}</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to collaborate? Let's discuss how we can work together to create exceptional digital experiences
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>{locale.contact.contactInfoTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="h-5 w-5 text-muted-foreground" />
              <a href={`mailto:${locale.contact.contactDetails.email}`} className="hover:underline">
                {locale.contact.contactDetails.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-5 w-5 text-muted-foreground" />
              <a href={`tel:${locale.contact.contactDetails.phone}`} className="hover:underline">
                {locale.contact.contactDetails.phone}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <LinkedinIcon className="h-5 w-5 text-muted-foreground" />
              <a href="https://linkedin.com/in/josh-loughran/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                {locale.contact.contactDetails.linkedin}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <GithubIcon className="h-5 w-5 text-muted-foreground" />
              <a href="http://github.com/4eyedRaven" target="_blank" rel="noopener noreferrer" className="hover:underline">
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
              {locale.contact.resumeOptions.map((option: any, idx: number) => (
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
    </div>
  );
}