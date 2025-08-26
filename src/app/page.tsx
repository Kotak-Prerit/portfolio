import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { AchievementsCard } from "@/components/achievements-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto mt-6">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
          </BlurFade>
          {/* Achievements Section */}
          <section id="achievements" className="w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 12.5}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Achievements
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    CSSBattle Profile
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Here are my latest stats and achievements from CSSBattle.
                  </p>
                </div>
                <div className="w-full flex justify-center">
                  <AchievementsCard />
                </div>
              </div>
            </BlurFade>
          </section>
          
        </div>
      </section>
      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a postgraduate student balancing academic responsibilities,
                  I also love participating in hackathons. It’s truly inspiring
                  to see passionate individuals from across the country come
                  together and build incredible projects in just 2–3 days. These
                  events are eye-opening, showcasing the limitless possibilities
                  that can emerge when creativity and collaboration unite.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <div className="contact-info-upper-container">
                <div className="contact-info-container">
                  <form
                    action="https://formspree.io/f/mzbndddo"
                    method="POST"
                    className="contact-form"
                  >
                    <label className="email-label">
                      Email
                      <input
                        type="email"
                        name="email"
                        className="email-input"
                        placeholder="example@gmail.com"
                        required
                      />
                    </label>
                    <label className="contact-label">
                      Social or Contact
                      <input
                        type="text"
                        name="message"
                        className="message-input"
                        placeholder="+91 9988776600"
                        required
                      ></input>
                    </label>
                    <label className="message-label">
                      Any specific message me?
                      <textarea
                        required
                        name="message"
                        className="message-input"
                        placeholder="I am interested in working with you."
                      ></textarea>
                    </label>
                    <button type="submit" className="submit">
                      Send
                    </button>
                  </form>
                </div>
                <div className="contact-social-container">
                  <p>
                    <Link
                      className="socials contact-socials"
                      href="https://www.linkedin.com/in/prerit-kotak"
                      target="_blank"
                    >
                      LinkedIn
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="socials contact-socials"
                      href="https://www.github.com/kotak-prerit"
                      target="_blank"
                    >
                      Github
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="socials contact-socials"
                      href="https://twitter.com/preritkotak"
                      target="_blank"
                    >
                      Twitter
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="socials contact-socials"
                      href="https://www.instagram.com/prerit.in"
                      target="_blank"
                    >
                      Instagram
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="socials contact-socials"
                      href="https://wa.me/919265058642?text=Hey"
                      target="_blank"
                    >
                      WhatsApp
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
