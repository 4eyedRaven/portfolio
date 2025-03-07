"use client";

import { MailIcon, LinkedinIcon, GithubIcon } from "lucide-react";

interface FooterProps {
  locale: any;
}

export default function Footer({ locale }: FooterProps) {
  return (
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
            <LinkedinIcon className="h-5 w-5" />
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
  );
}