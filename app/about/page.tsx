"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const values = [
  {
    title: "Fresh Ingredients",
    description: "We source locally whenever possible, partnering with Tennessee farms and producers to bring you the freshest flavors."
  },
  {
    title: "Warm Hospitality",
    description: "Every guest is family. We believe great food tastes even better when served with genuine warmth and care."
  },
  {
    title: "Community First",
    description: "Maplewood Kitchen is more than a restaurant—it's a gathering place for our Nashville neighborhood."
  }
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-28 pb-16">
        {/* Hero */}
        <section className="px-4 md:px-8 mb-16">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
                  Fresh & Warm Since 2018
                </h1>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Maplewood Kitchen was born from a simple dream: to create a place where Nashville&apos;s community 
                  could gather over incredible food and genuine hospitality. What started as a small corner café 
                  has grown into one of the neighborhood&apos;s most beloved brunch destinations.
                </p>
              </div>
              <div className="relative h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                  alt="Maplewood Kitchen interior"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Owner Section */}
        <section className="px-4 md:px-8 py-16 bg-muted">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Meet The Owner</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Sarah Chen
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Sarah Chen grew up in a family where food was the center of everything. Sunday brunches 
                    were sacred, and the kitchen was always filled with laughter, stories, and the aroma of 
                    something delicious cooking.
                  </p>
                  <p>
                    After years working in Nashville&apos;s culinary scene, Sarah decided to bring her vision 
                    of the perfect brunch spot to life. In 2018, she opened the doors to Maplewood Kitchen 
                    with a simple mission: serve fresh, warm meals in a space that feels like home.
                  </p>
                  <p>
                    &ldquo;Every dish we serve carries a piece of my family&apos;s tradition,&rdquo; Sarah says. 
                    &ldquo;When guests leave feeling nourished and happy, that&apos;s when I know we&apos;ve done our job.&rdquo;
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px] rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Sarah Chen, owner of Maplewood Kitchen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="px-4 md:px-8 py-16">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What We Stand For
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our values guide everything we do, from the ingredients we source to the way we greet every guest.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-[24px] bg-card p-8 border border-border/50 text-center"
                >
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Image Grid */}
        <section className="px-4 md:px-8 py-16 bg-muted">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80",
                "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80",
                "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&q=80",
                "https://images.unsplash.com/photo-1493770348161-369560ae357d?w=400&q=80"
              ].map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square rounded-[24px] overflow-hidden"
                >
                  <Image
                    src={src}
                    alt="Maplewood Kitchen food and atmosphere"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 py-16">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Come Say Hello
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We&apos;d love to welcome you to Maplewood Kitchen. Stop by for brunch, or reach out to learn more about private events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-colors"
              >
                Reserve a Table
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-muted text-foreground rounded-full font-medium hover:bg-muted/80 transition-colors"
              >
                Contact Us
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
