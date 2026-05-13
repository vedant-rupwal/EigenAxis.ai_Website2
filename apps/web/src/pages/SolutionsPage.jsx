import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Server, Smartphone, Globe, Stethoscope, Scale, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function SolutionsPage() {
  const features = [
    {
      number: '001',
      title: 'On-Premise Enterprise Licensing',
      description: 'Deploy EigenAxis.ai models entirely within your infrastructure. Perpetual licensing model with no recurring cloud costs. Complete control over model updates, fine-tuning, and deployment architecture. Ideal for organizations with strict data residency requirements.',
      icon: Server
    },
    {
      number: '002',
      title: 'Mobile-Ready SLMs',
      description: 'Optimized decoder-only architecture runs efficiently on mobile devices and edge hardware. Enable AI capabilities in field operations, remote locations, and offline scenarios. Reduce latency and bandwidth requirements while maintaining model performance.',
      icon: Smartphone
    },
    {
      number: '003',
      title: 'Multilingual Indian Context',
      description: 'Native support for Indian languages and cultural context. Models trained on domain-specific Indian datasets for superior accuracy in local business scenarios. Understand regional terminology, legal frameworks, and industry-specific jargon.',
      icon: Globe
    }
  ];

  const useCases = [
    {
      industry: 'Healthcare',
      description: 'Clinical documentation, medical coding, patient record analysis, and diagnostic support. HIPAA-compliant deployment ensures patient data never leaves hospital infrastructure.',
      applications: ['Clinical Notes Generation', 'ICD-10 Coding Automation', 'Medical Literature Search', 'Patient Query Handling'],
      image: 'https://images.unsplash.com/photo-1580281657702-257584239a55',
      imageAlt: 'Modern healthcare facility with medical professionals using digital technology'
    },
    {
      industry: 'Legal',
      description: 'Contract analysis, legal research, case law summarization, and compliance documentation. Maintain attorney-client privilege with on-premise deployment.',
      applications: ['Contract Review & Drafting', 'Case Law Research', 'Compliance Documentation', 'Legal Brief Summarization'],
      image: 'https://images.unsplash.com/photo-1553342302-da68ffb063cb',
      imageAlt: 'Professional legal office with law books and modern workspace'
    },
    {
      industry: 'MSMEs',
      description: 'Business document processing, customer support automation, inventory management, and financial analysis. Affordable AI capabilities without enterprise-scale infrastructure.',
      applications: ['Invoice Processing', 'Customer Support Chatbots', 'Inventory Forecasting', 'Financial Report Analysis'],
      image: 'https://images.unsplash.com/photo-1562600484-c6ef0ffe27a2',
      imageAlt: 'Small business workspace with modern technology and collaborative environment'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - EigenAxis.ai</title>
        <meta name="description" content="Core technology, features, and industry-specific AI solutions from EigenAxis.ai" />
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
                className="max-w-4xl"
              >
                <span className="section-label">[04_Technology]</span>
                <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6" style={{letterSpacing: '-0.02em'}}>
                  Core Technology & Architecture
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  EigenAxis.ai leverages a MoE-ready decoder-only transformer architecture optimized for enterprise deployment. Our models achieve domain-specific excellence through focused training on industry datasets, eliminating the computational overhead of general-purpose LLMs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The decoder-only design enables efficient inference on standard hardware while maintaining the flexibility to scale through Mixture of Experts routing. This architecture choice delivers superior performance-per-watt, making our SLMs viable for mobile and edge deployment scenarios.
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
                <h2 className="text-3xl md:text-4xl font-bold">
                  Enterprise Features
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <feature.icon className="h-8 w-8 text-primary" />
                          <span className="text-2xl font-bold text-primary/30 font-mono">
                            {feature.number}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
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
                <span className="section-label">[05_Industries]</span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  Domain-Specific Deployment
                </h2>
              </motion.div>

              <div className="space-y-16">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.industry}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                        <div className="flex items-center gap-3 mb-4">
                          {useCase.industry === 'Healthcare' && <Stethoscope className="h-6 w-6 text-primary" />}
                          {useCase.industry === 'Legal' && <Scale className="h-6 w-6 text-primary" />}
                          {useCase.industry === 'MSMEs' && <Building2 className="h-6 w-6 text-primary" />}
                          <h3 className="text-2xl font-bold">{useCase.industry}</h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                          {useCase.description}
                        </p>
                        <div>
                          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-3 block">
                            Key Applications
                          </span>
                          <ul className="space-y-2">
                            {useCase.applications.map((app) => (
                              <li key={app} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span className="text-muted-foreground">{app}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                        <img 
                          src={useCase.image} 
                          alt={useCase.imageAlt}
                          className="rounded-2xl shadow-lg w-full"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default SolutionsPage;