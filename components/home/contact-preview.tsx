"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/ui/section-header";
import { fadeIn } from "@/lib/motion";

export function ContactPreview() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
	subject:"",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await toast.promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
			subject: formState.subject,
            from_name: formState.name,
            from_email: formState.email,
            message: formState.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        ),
        {
          loading: "Sending message...",
          success: "Message sent successfully!",
          error: "Failed to send message.",
        },
      );

      setFormState({
		subject: "",
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4">
        <SectionHeader
          title="Get In Touch"
          description="Interested in working together or have a question? Feel free to reach out!"
          className="text-center"
        />

        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-md mx-auto mt-10"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
			<div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formState.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formState.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formState.message}
                onChange={handleChange}
                required
                className="min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              {!loading && <Send className="ml-2 h-4 w-4" />}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
