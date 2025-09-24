import { PageHero } from "@/components/portfolio/hero";
import { H2, H3, H4, BodyText, BodyLarge, AccentText, LinkText } from "@/components/ui/typography";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Hero */}
      <PageHero
        title="About Me"
        description="Designer, learner, and maker of thoughtful digital experiences"
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12 md:py-16">

        {/* Introduction Section */}
        <section className="mb-16">
          <BodyLarge className="mb-8">
            Hi! I'm a product designer who believes great design happens when we deeply understand
            the people we're designing for. I love solving complex problems through research,
            iteration, and collaboration.
          </BodyLarge>

          <BodyText className="mb-6">
            Currently, I'm focused on creating intuitive digital experiences that make technology
            more accessible and delightful. My approach combines user research, systems thinking,
            and a healthy dose of curiosity about how things work.
          </BodyText>

          <BodyText>
            When I'm not designing, you'll find me learning new technologies (like building this
            portfolio with React!), exploring local coffee shops, or planning my next adventure.
          </BodyText>
        </section>

        {/* Skills & Approach Section */}
        <section className="mb-16">
          <H2 className="mb-8">My Approach</H2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <H4 className="mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--portfolio-blue)] rounded-full"></span>
                Research-Driven
              </H4>
              <BodyText>
                I start every project by understanding the problem deeply. User interviews,
                analytics, and competitive analysis inform every design decision.
              </BodyText>
            </div>

            <div>
              <H4 className="mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--portfolio-blue)] rounded-full"></span>
                Systems Thinking
              </H4>
              <BodyText>
                I believe in building design systems that scale. Every component and pattern
                is designed to work harmoniously within the larger ecosystem.
              </BodyText>
            </div>

            <div>
              <H4 className="mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--portfolio-blue)] rounded-full"></span>
                Collaborative
              </H4>
              <BodyText>
                The best work happens when designers, developers, and stakeholders work together.
                I thrive in cross-functional teams and value diverse perspectives.
              </BodyText>
            </div>

            <div>
              <H4 className="mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-[var(--portfolio-blue)] rounded-full"></span>
                Iterative
              </H4>
              <BodyText>
                I embrace the messy middle of design. Prototyping, testing, and refining
                ideas leads to solutions that truly serve users' needs.
              </BodyText>
            </div>
          </div>
        </section>

        {/* Tools & Skills */}
        <section className="mb-16">
          <H2 className="mb-8">Tools & Skills</H2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <H3 className="text-lg mb-4">Design</H3>
              <div className="text-base text-gray-600 leading-relaxed space-y-2">
                <div>• Figma</div>
                <div>• Sketch</div>
                <div>• Adobe Creative Suite</div>
                <div>• Principle</div>
                <div>• Framer</div>
              </div>
            </div>

            <div>
              <H3 className="text-lg mb-4">Research</H3>
              <div className="text-base text-gray-600 leading-relaxed space-y-2">
                <div>• User Interviews</div>
                <div>• Usability Testing</div>
                <div>• Analytics (GA, Hotjar)</div>
                <div>• A/B Testing</div>
                <div>• Journey Mapping</div>
              </div>
            </div>

            <div>
              <H3 className="text-lg mb-4">Development</H3>
              <div className="text-base text-gray-600 leading-relaxed space-y-2">
                <div>• HTML & CSS</div>
                <div>• JavaScript</div>
                <div>• React (learning!)</div>
                <div>• Design Systems</div>
                <div>• Git & GitHub</div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Section */}
        <section className="mb-16 bg-gray-50 -mx-6 md:-mx-8 px-6 md:px-8 py-12 rounded-2xl">
          <H2 className="mb-8">Beyond Design</H2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <H4 className="mb-4">Currently Learning</H4>
              <BodyText className="mb-6">
                I'm diving deep into React and Next.js to better understand how my designs
                come to life in code. This portfolio is actually my learning project!
              </BodyText>

              <H4 className="mb-4">Recent Reads</H4>
              <BodyText>
                • "Atomic Design" by Brad Frost
              </BodyText>
              <BodyText>
                • "Don't Make Me Think" by Steve Krug
              </BodyText>
              <BodyText>
                • "The Design of Everyday Things" by Don Norman
              </BodyText>
            </div>

            <div>
              <H4 className="mb-4">Fun Facts</H4>
              <div className="text-base text-gray-600 leading-relaxed space-y-3">
                <div>☕ I've tried coffee from over 20 different countries</div>
                <div>🏔️ I love hiking and have climbed [mountain name]</div>
                <div>📚 I read about 2 books per month</div>
                <div>🎮 I design board games as a hobby</div>
                <div>🌱 I'm growing my own herb garden</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center py-12">
          <H2 className="mb-6">Let's Work Together</H2>
          <BodyLarge className="mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations.
            Whether you have a project in mind or just want to chat about design, I'd love to hear from you.
          </BodyLarge>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <LinkText
              href="mailto:hello@yourname.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-[var(--portfolio-blue)] text-white rounded-lg hover:bg-[var(--portfolio-blue-dark)] transition-colors no-underline"
            >
              Send me an email
            </LinkText>
            <LinkText
              href="https://linkedin.com/in/yourname"
              external
              className="inline-flex items-center justify-center px-6 py-3 border border-[var(--portfolio-blue)] text-[var(--portfolio-blue)] rounded-lg hover:bg-[var(--portfolio-blue)] hover:text-white transition-colors no-underline"
            >
              Connect on LinkedIn
            </LinkText>
          </div>
        </section>
      </div>
    </div>
  );
}