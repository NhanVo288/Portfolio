'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container px-4">
        <SectionHeader
          title="About Me"
          description="Software Developer passionate about building modern, scalable, and user-friendly web applications."
        />

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative h-[420px] overflow-hidden rounded-lg"
          >
            
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-4 text-2xl font-bold">
              Software Developer
            </h3>

            <p className="mb-4 text-muted-foreground">
              I'm Vo Huu Nhan, a Software Developer from Ho Chi Minh City,
              Vietnam. I enjoy building responsive, high-performance web
              applications using modern technologies such as React.js, Next.js,
              TypeScript, Node.js, and Express.js.
            </p>

            <p className="mb-6 text-muted-foreground">
              During my Frontend Developer internship, I collaborated with
              designers, backend developers, and QA engineers to build
              production-ready features, integrate RESTful APIs, and create
              pixel-perfect user interfaces. I also enjoy exploring full-stack
              development through personal projects including real-time chat,
              e-commerce, and movie streaming platforms.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <Card className="card-gradient">
                <CardContent className="p-4">
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    B.Eng. Information Technology
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-4">
                  <h4 className="font-semibold">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Frontend Developer Intern
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-4">
                  <h4 className="font-semibold">Projects</h4>
                  <p className="text-sm text-muted-foreground">
                    4 Personal Projects
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient">
                <CardContent className="p-4">
                  <h4 className="font-semibold">Tech Stack</h4>
                  <p className="text-sm text-muted-foreground">
                    React • Next.js • Node.js
                  </p>
                </CardContent>
              </Card>
            </div>

            <Button asChild>
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}