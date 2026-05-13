import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About - EigenAxis.ai</title>
        <meta name="description" content="Learn about EigenAxis.ai's mission, vision, and leadership in building sovereign AI solutions for Indian enterprises" />
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
                <span className="section-label">[06_About]</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{ letterSpacing: '-0.02em' }}>
                  Engineering the Art of Intelligence
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  EigenAxis.ai was founded on the principle that enterprise AI should enhance capabilities without compromising data sovereignty. We build Small Language Models that deliver domain-specific intelligence while respecting the privacy and security requirements of Indian enterprises.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="section-label">[07_Mission_Vision]</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-12">
                  Our Purpose
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Target className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold">Mission</h3>
                      </div>
                      <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                        To deliver secure, cost-efficient, and domain-specific AI solutions that empower Indian enterprises to harness artificial intelligence without sacrificing data privacy or operational independence.
                      </blockquote>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <Eye className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold">Vision</h3>
                      </div>
                      <blockquote className="text-lg text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6">
                        To build India's sovereign, privacy-first AI ecosystem where enterprises of all sizes can deploy cutting-edge language models on their own infrastructure, free from cloud dependencies and data exposure risks.
                      </blockquote>
                    </CardContent>
                  </Card>
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
                <span className="section-label">[08_Leadership]</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Meet Our Leadership
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <Card className="shadow-lg">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-1">
                        <div className="aspect-square rounded-xl bg-gradient-to-br from-primary to-accent mb-4"></div>
                        <h3 className="text-2xl font-bold mb-1">Mayank Arora</h3>
                        <p className="text-muted-foreground">Founder & CEO</p>
                      </div>

                      <div className="md:col-span-2">
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          Mayank Arora brings over 20 years of deep technical expertise in telecommunications, AI, and enterprise software architecture. His career spans leadership roles at major technology companies where he drove innovation in network optimization, machine learning systems, and large-scale distributed computing.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          With a B.Tech in Electronics and Communication Engineering and an Executive Master's in Software Engineering, Mayank combines technical depth with leadership skills. He holds 8 patents in 5G network optimization.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                          At EigenAxis.ai, Mayank's vision is to democratize enterprise AI by making sophisticated language models accessible to Indian businesses without compromising on data sovereignty. His technical leadership ensures that EigenAxis.ai's SLMs deliver production-grade performance while maintaining the privacy and security standards that enterprises demand.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Building the future of sovereign AI
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    EigenAxis.ai is headquartered in Hyderabad, India's emerging AI hub. Our team combines expertise in machine learning, enterprise software, and domain-specific applications to deliver AI solutions that respect data sovereignty while pushing the boundaries of what's possible with Small Language Models.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that the next generation of enterprise AI will be built on principles of privacy, efficiency, and domain specialization. Join us in creating that future.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1634832803311-f5fa2006b579"
                    alt="Abstract blue and gray geometric patterns representing AI innovation"
                    className="rounded-2xl shadow-lg w-full"
                  />
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

export default AboutPage;