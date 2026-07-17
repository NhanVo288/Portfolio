"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { fadeIn, staggerContainer } from "@/lib/motion";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
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
    <div className="py-16 md:py-24">
      <div className="container">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeIn("down", 0.2)}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div variants={fadeIn("right", 0.3)}>
              <Card className="card-gradient h-full">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-primary mr-3" />
                      <p className="text-muted-foreground">+84 355 77 1884</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-primary mr-3" />
                      <p className="text-muted-foreground">
                        vnhan2808@gmail.com
                      </p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-primary mr-3" />
                      <p className="text-muted-foreground">TPHCM, VietNam</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn("left", 0.3)}>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
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
        </motion.div>
      </div>
    </div>
  );
}
