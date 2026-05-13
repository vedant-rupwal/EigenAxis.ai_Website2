import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Brain, Smartphone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function HomePage() {
  const badges = [
    'Privacy-First AI',
    'On-Premise',
    'Decoder-Only Architecture',
    'Mobile-Ready'
  ];

  const benefits = [
    {
      number: '01',
      title: '100% Data Privacy',
      description: 'Your data never leaves your infrastructure. Complete sovereignty over sensitive information with on-premise deployment that ensures zero cloud exposure.',
      icon: Shield
    },
    {
      number: '02',
      title: 'Domain-Specific Intelligence',
      description: 'Purpose-built SLMs trained for your industry context. Achieve superior accuracy in healthcare, legal, and MSME domains without generic model overhead.',
      icon: Brain
    },
    {
      number: '03',
      title: 'Low-Compute & Mobile Ready',
      description: 'Optimized decoder-only architecture runs efficiently on standard hardware and mobile devices. Reduce infrastructure costs while maintaining performance.',
      icon: Smartphone
    }
  ];

  const ThirdBenefitIcon = benefits[2].icon;

  return (
    <>
      <Helmet>
        <title>EigenAxis.ai - Privacy-First Enterprise AI Solutions</title>
        <meta name="description" content="Redefining Enterprise AI with Privacy, Precision, and Control. Secure on-premise SLMs for Indian enterprises." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1665919094872-2fc89eed9e13" 
                alt="Advanced AI technology visualization with neural networks and data processing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex flex-wrap gap-2 mb-6">
                    {badges.map((badge, index) => (
                      <motion.span
                        key={badge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="badge-pill"
                      >
                        {badge}
                      </motion.span>
                    ))}
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{letterSpacing: '-0.02em'}}>
                    Redefining Enterprise AI with Privacy, Precision, and Control
                  </h1>

                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-prose">
                    Deploy secure, domain-specific Small Language Models on your infrastructure. Built for Indian enterprises that demand data sovereignty without compromising on AI capabilities.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]">
                      <Link to="/contact">
                        Request a Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="transition-all duration-200 active:scale-[0.98]">
                      <Link to="/solutions">Explore Solutions</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl"
              >
                <span className="section-label">[01_Challenge]</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                  The Enterprise AI Dilemma: Privacy vs. Capability
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Large Language Models promise transformative capabilities, but at what cost? Cloud-based AI solutions expose sensitive enterprise data to third-party servers, creating compliance nightmares and security vulnerabilities. Meanwhile, running massive models demands prohibitive compute resources and ongoing cloud expenses that strain budgets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  Indian enterprises face an impossible choice: sacrifice data privacy for AI capabilities, or forgo AI innovation to maintain security. This is the fundamental tension holding back enterprise AI adoption.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="section-label">[02_Solution]</span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
                    Sovereign AI built from scratch for Indian Enterprise.
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    EigenAxis.ai delivers purpose-built Small Language Models that run entirely on your infrastructure. Our decoder-only transformer architecture achieves domain-specific excellence without the bloat of general-purpose LLMs.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Deploy on-premise or in your private cloud. Your data never leaves your control. No API calls to external servers. No compliance concerns. Just pure, sovereign AI intelligence tailored to your industry context.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995" 
                    alt="Abstract blue geometric patterns representing secure AI architecture"
                    className="rounded-2xl shadow-lg w-full"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="section-label">[03_Advantages]</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  The EigenAxis.ai Edge
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.slice(0, 2).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-4">
                            <span className="text-6xl font-bold text-primary/20" style={{fontFamily: 'Sora'}}>
                              {benefit.number}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-4">
                                <Icon className="h-6 w-6 text-primary" />
                                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                              </div>
                              <p className="text-muted-foreground leading-relaxed">
                                {benefit.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8"
              >
                <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <span className="text-6xl font-bold text-primary/20" style={{fontFamily: 'Sora'}}>
                        {benefits[2].number}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <ThirdBenefitIcon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-semibold">{benefits[2].title}</h3>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {benefits[2].description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to deploy sovereign AI?
                </h2>
                <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                  Join forward-thinking Indian enterprises building secure, domain-specific AI capabilities.
                </p>
                <Button asChild size="lg" variant="secondary" className="transition-all duration-200 active:scale-[0.98]">
                  <Link to="/contact">Schedule a Consultation</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;