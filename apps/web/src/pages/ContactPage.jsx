import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you within 24 hours."
      });
      
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@eigenaxis.ai',
      href: 'mailto:contact@eigenaxis.ai'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9100345022',
      href: 'tel:+919100345022'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'AB-503, Aparna Cyberzon, Nallagandla, Hyderabad - 500019',
      href: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/company/eigenaxisai',
      href: 'https://linkedin.com/company/eigenaxisai'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - EigenAxis.ai</title>
        <meta name="description" content="Get in touch with EigenAxis.ai for enterprise AI licensing and consultation" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center"
              >
                <span className="section-label">[09_Contact]</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{letterSpacing: '-0.02em'}}>
                  Let's Build a Secure AI Future Together
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Interested in enterprise licensing or deploying domain-specific SLMs on your infrastructure? Our team is ready to discuss how EigenAxis.ai can meet your organization's AI needs while maintaining complete data sovereignty.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="shadow-lg">
                    <CardContent className="p-8">
                      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium mb-2 block">
                            Name <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-sm font-medium mb-2 block">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div>
                          <Label htmlFor="company" className="text-sm font-medium mb-2 block">
                            Company
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            placeholder="Enter your company"
                            value={formData.company}
                            onChange={handleChange}
                            className="text-foreground placeholder:text-muted-foreground"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-sm font-medium mb-2 block">
                            Message <span className="text-destructive">*</span>
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your project or inquiry"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="text-foreground placeholder:text-muted-foreground resize-none"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
                        >
                          {isSubmitting ? (
                            'Sending...'
                          ) : (
                            <>
                              Send Message
                              <Send className="ml-2 h-4 w-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
                    <div className="space-y-6">
                      {contactInfo.map((item) => (
                        <div key={item.label} className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                              <item.icon className="h-5 w-5 text-primary" />
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {item.label}
                            </p>
                            {item.href ? (
                              <a
                                href={item.href}
                                target={item.label === 'LinkedIn' ? '_blank' : undefined}
                                rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                                className="text-foreground hover:text-primary transition-all duration-200"
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-foreground">{item.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-2xl overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1677442135131-4d7c123aef1c" 
                      alt="Abstract blue geometric design representing AI connectivity"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;