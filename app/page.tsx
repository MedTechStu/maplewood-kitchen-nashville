"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Clock, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        {/* Hero Bento Grid Section */}
        <section className="pt-28 pb-16 px-4 md:px-8">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Large Hero Tile */}
              <motion.div 
                variants={fadeInUp}
                className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-[24px] bg-primary min-h-[400px] md:min-h-[500px]"
              >
                <Image
                  src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=1200&q=80"
                  alt="Delicious brunch spread at Maplewood Kitchen"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-background mb-4 leading-tight text-balance">
                    Fresh & Warm,<br />Every Morning
                  </h1>
                  <p className="text-background/80 text-lg md:text-xl mb-6 max-w-lg">
                    Nashville&apos;s favorite neighborhood brunch spot
                  </p>
                  <a
                    href="https://www.opentable.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-colors text-lg"
                  >
                    Reserve a Table
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>

              {/* Hours Tile */}
              <motion.div 
                variants={fadeInUp}
                className="rounded-[24px] bg-card p-6 md:p-8 flex flex-col justify-center border border-border/50"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hours</span>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">
                  Tue - Sun
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground mt-1">
                  8am - 3pm
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Closed Mondays
                </p>
              </motion.div>

              {/* Location Tile */}
              <motion.div 
                variants={fadeInUp}
                className="rounded-[24px] bg-secondary p-6 md:p-8 flex flex-col justify-center"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-foreground/10">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground/70 uppercase tracking-wider">Location</span>
                </div>
                <p className="text-xl md:text-2xl font-bold text-secondary-foreground">
                  412 Maplewood Ave
                </p>
                <p className="text-lg text-secondary-foreground/80 mt-1">
                  Nashville, TN
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  Get Directions
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Featured Section */}
        <section className="py-16 px-4 md:px-8 bg-muted">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Start Your Day Right
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From classic buttermilk pancakes to modern avocado toast, our menu celebrates the best of American brunch.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Buttermilk Pancakes",
                  description: "Fluffy stacks served with maple syrup & seasonal berries",
                  price: "$12",
                  image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80"
                },
                {
                  title: "Avocado Toast",
                  description: "Smashed avocado on sourdough with poached eggs",
                  price: "$14",
                  image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=600&q=80"
                },
                {
                  title: "Chicken & Waffles",
                  description: "Crispy fried chicken on Belgian waffles with hot honey",
                  price: "$16",
                  image: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=600&q=80"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group rounded-[24px] bg-card overflow-hidden border border-border/50 hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <span className="text-primary font-bold">{item.price}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/menu"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-colors"
              >
                View Full Menu
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* About Preview */}
        <section className="py-16 px-4 md:px-8">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                  alt="Chef preparing food in kitchen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="md:pl-8">
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Story</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  A Nashville Neighborhood Spot
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Since 2018, Maplewood Kitchen has been serving up fresh, warm meals to our Nashville community. 
                  Founded by Sarah Chen, our mission is simple: create a welcoming space where great food brings people together.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors"
                >
                  Read Our Story
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-primary">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready for Brunch?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join us for a meal that feels like home. Reserve your table today or walk in and say hello.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.opentable.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-card text-foreground rounded-full font-medium hover:bg-card/90 transition-colors"
              >
                Reserve a Table
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent text-primary-foreground border-2 border-primary-foreground/30 rounded-full font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
