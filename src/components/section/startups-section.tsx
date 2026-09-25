import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function StartupsSection() {
    return (
        <section id="startups">
            <div className="flex min-h-0 flex-col gap-y-6">
                <BlurFade delay={BLUR_FADE_DELAY * 5}>
                    <h2 className="text-xl font-bold">Startups</h2>
                </BlurFade>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {DATA.startups.map((startup, id) => (
                        <BlurFade
                            key={startup.name}
                            delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                            className="h-full"
                        >
                            <div className="flex h-full flex-col gap-2 border border-border rounded-xl p-6 hover:ring-2 hover:ring-muted transition-all duration-200">
                                <h3 className="font-semibold">
                                    {startup.href ? (
                                        <a
                                            href={startup.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline underline-offset-4 transition-colors"
                                        >
                                            {startup.name}
                                        </a>
                                    ) : (
                                        startup.name
                                    )}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {startup.description}
                                </p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
