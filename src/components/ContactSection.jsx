import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { faXing } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out! I'll get back to you soon.",
          variant: "default",
        });
      })
      .catch((error) => {
        console.log(error.text);
        toast({
          title: "Error!",
          description:
            "There was an error sending your message. Please try again.",
          variant: "default",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <section id="contact" className="relative py-24 px-4 bg-secondary/30 ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to commaborate? Feel free to reach out.
          I'm always open to discussing new opportunities and ideas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl front-semibold mb-6">
              Contact Information
            </h3>
            <div className="space-y-6 flex flex-col justify-self-center items-start">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary"></Mail>
                </div>
                <div>
                  <h4 className="font-medium text-left"> Email</h4>
                  <a
                    href="mailto:contact@bahaeddineaissa.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@bahaeddineaissa.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary"></Phone>
                </div>
                <div>
                  <h4 className="font-medium text-left"> Phone</h4>
                  <a
                    href="tel:+4917624419513"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +49 17624419513
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary"></MapPin>
                </div>
                <div>
                  <h4 className="font-medium text-left"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Munich, BY, Germany
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me </h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/bahaeddine-aissa-04831b229"
                  target="_blank"
                >
                  <Linkedin />
                </a>
                <a
                  href="https://www.xing.com/profile/Bahaeddine_Aissa"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faXing} className="fa-2x" />
                </a>
              </div>
            </div>
          </div>
          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden",
                    "focus:ring-2 focus:ring-primary"
                  )}
                  placeholder="Bahaeddine Aissa..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden",
                    "focus:ring-2 focus:ring-primary"
                  )}
                  placeholder="email@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden",
                    "focus:ring-2 focus:ring-primary resize-none"
                  )}
                  placeholder="Hello, I would like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send size={16} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
