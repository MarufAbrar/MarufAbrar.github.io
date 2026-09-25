import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
// [BLOG HIDDEN] Re-enable together with the homepage Blog section below
// import { allPosts } from "content-collections";
// import Link from "next/link";
import Markdown from "react-markdown";
import ContactSection from "@/components/section/contact-section";
import ProjectsSection from "@/components/section/projects-section";
import StartupsSection from "@/components/section/startups-section";
import WorkSection, { LogoImage } from "@/components/section/work-section";
// [BLOG HIDDEN] Re-enable together with the homepage Blog section below
// import { ArrowUpRight } from "lucide-react";
import { FileText } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

// [BLOG HIDDEN] Re-enable together with the homepage Blog section below
// const recentPosts = [...allPosts]
//   .sort((a, b) => (new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1))
//   .slice(0, 3);

export default function Page() {
  return (
    <main className="min-h-dvh flex flex-col gap-14 relative">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 gap-y-6 flex flex-col md:flex-row justify-between">
            <div className="gap-2 flex flex-col order-2 md:order-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-xl font-medium tracking-tight sm:text-2xl"
                yOffset={8}
                text={DATA.title}
              />
              <BlurFadeText
                className="text-muted-foreground max-w-[600px] md:text-lg lg:text-xl"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.tagline}
              />
              <BlurFade
                delay={BLUR_FADE_DELAY * 4}
                className="flex flex-wrap gap-3 pt-2"
              >
                <Button asChild>
                  <a href="#projects">View Projects</a>
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${DATA.contact.email}`}>Contact Me</a>
                </Button>
              </BlurFade>
            </div>
            <BlurFade delay={BLUR_FADE_DELAY} className="order-1 md:order-2">
              <Avatar className="size-24 md:size-32 border rounded-full shadow-lg ring-4 ring-muted">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
              <Markdown>{DATA.summary}</Markdown>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Experience</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <WorkSection />
          </BlurFade>
        </div>
      </section>

      <ProjectsSection />

      <StartupsSection />

      <section id="technical-focus">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Technical Focus</h2>
          </BlurFade>
          <div className="flex flex-col gap-y-5">
            {DATA.technicalFocus.map((group, groupId) => (
              <BlurFade
                key={group.label}
                delay={BLUR_FADE_DELAY * 8 + groupId * 0.05}
              >
                <div className="flex flex-col gap-y-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {group.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <div
                        key={item}
                        className="border bg-background border-border ring-2 ring-border/20 rounded-xl h-8 w-fit px-4 flex items-center"
                      >
                        <span
                          className={
                            group.label === "Secondary"
                              ? "text-muted-foreground text-sm font-medium"
                              : "text-foreground text-sm font-medium"
                          }
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <h2 className="text-xl font-bold">Education &amp; Training</h2>
          </BlurFade>
          <div className="flex flex-col gap-8">
            {DATA.education.map((education, index) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 15 + index * 0.05}
              >
                <div className="flex items-center gap-x-3 justify-between group">
                  <div className="flex items-center gap-x-3 flex-1 min-w-0">
                    <LogoImage
                      src={education.logoUrl}
                      alt={`${education.school} logo`}
                    />
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <div className="font-semibold leading-none">
                        {education.school}
                      </div>
                      <div className="font-sans text-sm text-muted-foreground">
                        {education.degree}
                      </div>
                      {education.certificateUrl && (
                        <a
                          href={education.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-fit inline-flex items-center gap-1.5 mt-1 text-sm font-medium text-foreground hover:underline underline-offset-4 transition-colors"
                        >
                          <FileText className="size-3.5 shrink-0" aria-hidden />
                          View Certificate
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs tabular-nums text-muted-foreground text-right flex-none">
                    <span>
                      {education.start
                        ? `${education.start} - ${education.end}`
                        : education.end}
                    </span>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold">Volunteering</h3>
              {DATA.volunteering.map((entry) => (
                <div key={entry.role} className="flex flex-col gap-0.5">
                  <div className="text-sm font-medium">
                    {entry.role} — {entry.org}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {entry.location} · {entry.dates}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {entry.description}
                  </p>
                  {entry.certificateUrl && (
                    <a
                      href={entry.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit inline-flex items-center gap-1.5 mt-1 text-sm font-medium text-foreground hover:underline underline-offset-4 transition-colors"
                    >
                      <FileText className="size-3.5 shrink-0" aria-hidden />
                      View Certificate
                    </a>
                  )}
                </div>
              ))}
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <div className="flex flex-col gap-y-2">
              <h3 className="font-semibold">Languages</h3>
              <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                {DATA.languages.map((language) => (
                  <div key={language.name}>
                    <span className="font-medium text-foreground">
                      {language.name}
                    </span>{" "}
                    — {language.level}
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* BLOG SECTION ON HOMEPAGE HIDDEN TEMPORARILY — blog routes, MDX posts, and
          components remain intact. To re-enable, remove this comment marker and the
          matching closing marker right after the section.
      <section id="blog">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <h2 className="text-xl font-bold">Blog</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 20}>
            <div className="flex flex-col gap-5">
              {recentPosts.map((post) => {
                const slug = post._meta.path.replace(/\.mdx$/, "");
                return (
                  <Link
                    key={slug}
                    href={`/blog/${slug}`}
                    className="group flex items-start justify-between gap-2 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  >
                    <div className="flex flex-col gap-y-1">
                      <p className="tracking-tight text-lg font-medium">
                        <span className="group-hover:text-foreground transition-colors">
                          {post.title}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {post.publishedAt}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 mt-1 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden
                    />
                  </Link>
                );
              })}
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 21}>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline w-fit"
            >
              View all posts
            </Link>
          </BlurFade>
        </div>
      </section>
      */}

      <section id="contact">
        <BlurFade delay={BLUR_FADE_DELAY * 22}>
          <ContactSection />
        </BlurFade>
      </section>
    </main>
  );
}
