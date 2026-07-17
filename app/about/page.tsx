'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDownCircle } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn, staggerContainer } from '@/lib/motion';

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
        >
          <motion.div
            variants={fadeIn('right', 0.3)}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold">About Me</h1>

            <p className="text-lg text-muted-foreground">
              I'm <strong>Vo Huu Nhan</strong>, a Software Developer from Ho Chi
              Minh City, Vietnam. I enjoy building modern, responsive, and
              scalable web applications using React.js, Next.js, TypeScript,
              Node.js, and Express.js.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">My Journey</h2>

              <p className="text-muted-foreground">
                During my Frontend Developer internship at SR GROUP LTD, I worked
                closely with designers, backend developers, and QA engineers to
                build production-ready web applications, integrate RESTful APIs,
                convert Figma designs into pixel-perfect interfaces, and
                implement multilingual support for international users.
              </p>

              <p className="text-muted-foreground">
                Outside of work, I enjoy building personal projects that help me
                explore modern technologies. My portfolio includes a real-time
                chat platform with Socket.IO, a full-featured e-commerce system,
                and a production-grade movie streaming application built with
                Next.js and Cloudflare Workers.
              </p>

              <p className="text-muted-foreground">
                I'm passionate about writing clean, maintainable code,
                continuously learning new technologies, and creating software
                that delivers great user experiences.
              </p>
            </div>

            <Button asChild>
              <a href="/cv.pdf" download>
                Download CV
                <ArrowDownCircle className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            className="relative h-[500px]"
          >
            {/* <Image
              src="/images/profile.jpg"
              alt="Vo Huu Nhan"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width:768px) 100vw,50vw"
            /> */}
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={fadeIn('up', 0.1)}>
            <Card className="card-gradient h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Education
                </h3>

                <p className="text-muted-foreground">
                  Engineer of Information Technology, SaiGon University
                  (2021–2026). TOEIC 685 (Listening & Reading).
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.2)}>
            <Card className="card-gradient h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Experience
                </h3>

                <p className="text-muted-foreground">
                  Frontend Developer Intern at SR GROUP LTD, developing
                  production-ready React applications, integrating REST APIs,
                  and collaborating within Agile teams.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeIn('up', 0.3)}>
            <Card className="card-gradient h-full">
              <CardContent className="p-6">
                <h3 className="mb-4 text-xl font-semibold">
                  Technical Skills
                </h3>

                <p className="text-muted-foreground">
                  React.js, Next.js, TypeScript, JavaScript, Node.js,
                  Express.js, MongoDB, PostgreSQL, Redux Toolkit, Zustand,
                  TanStack Query, Tailwind CSS, Material UI, Git, REST APIs.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}