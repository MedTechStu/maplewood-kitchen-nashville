"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const menuCategories = [
  {
    title: "Brunch",
    description: "Served all day, every day",
    items: [
      {
        name: "Buttermilk Pancakes",
        description: "Fluffy stacks served with maple syrup, whipped butter & seasonal berries",
        price: "$12"
      },
      {
        name: "Avocado Toast",
        description: "Smashed avocado on thick-cut sourdough with poached eggs, cherry tomatoes & microgreens",
        price: "$14"
      },
      {
        name: "Eggs Benedict",
        description: "Poached eggs on English muffin with Canadian bacon, hollandaise & breakfast potatoes",
        price: "$15"
      },
      {
        name: "Chicken & Waffles",
        description: "Crispy fried chicken breast on Belgian waffles with hot honey & pickled jalapeños",
        price: "$16"
      },
      {
        name: "Blueberry French Toast",
        description: "Brioche French toast with fresh blueberry compote, mascarpone & powdered sugar",
        price: "$13"
      },
      {
        name: "Granola Bowl",
        description: "House-made granola with Greek yogurt, seasonal fruits, honey & chia seeds",
        price: "$10"
      }
    ]
  },
  {
    title: "Lunch",
    description: "Available 11am - 3pm",
    items: [
      {
        name: "BLT Club",
        description: "Triple-decker with thick-cut bacon, lettuce, tomato, avocado & herb aioli on toasted sourdough",
        price: "$13"
      },
      {
        name: "Grilled Cheese & Tomato Soup",
        description: "Four-cheese grilled sandwich with a bowl of our house-made roasted tomato soup",
        price: "$11"
      }
    ]
  },
  {
    title: "Drinks",
    description: "Refreshments & libations",
    items: [
      {
        name: "Fresh Lemonade",
        description: "House-squeezed lemonade with mint, served over ice",
        price: "$5"
      },
      {
        name: "Cold Brew Coffee",
        description: "Smooth, slow-steeped cold brew from local Nashville roasters",
        price: "$6"
      },
      {
        name: "Mimosa",
        description: "Fresh-squeezed orange juice with sparkling wine",
        price: "$9"
      }
    ]
  }
]

export default function MenuPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen pt-28 pb-16">
        {/* Header */}
        <section className="px-4 md:px-8 mb-12">
          <motion.div 
            className="mx-auto max-w-7xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our Menu
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Fresh ingredients, made with love. Our menu celebrates the best of American brunch with a Nashville twist.
            </p>
          </motion.div>
        </section>

        {/* Menu Categories */}
        <section className="px-4 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {menuCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className={`rounded-[24px] bg-card p-6 md:p-8 border border-border/50 ${
                    category.title === "Brunch" ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>

                  <div className={`grid gap-6 ${category.title === "Brunch" ? "md:grid-cols-2" : "grid-cols-1"}`}>
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                        className="group"
                      >
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                          <span className="text-primary font-bold shrink-0">{item.price}</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Note */}
        <section className="px-4 md:px-8 mt-12">
          <motion.div 
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="rounded-[24px] bg-secondary p-6 md:p-8 text-center">
              <p className="text-secondary-foreground font-medium">
                Please inform your server of any allergies or dietary restrictions.
              </p>
              <p className="text-secondary-foreground/70 text-sm mt-2">
                Consuming raw or undercooked meats, poultry, seafood, or eggs may increase your risk of foodborne illness.
              </p>
            </div>
          </motion.div>
        </section>

        {/* CTA */}
        <section className="px-4 md:px-8 mt-12">
          <motion.div 
            className="mx-auto max-w-7xl text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to dig in?
            </h3>
            <a
              href="https://www.opentable.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-accent transition-colors"
            >
              Reserve a Table
            </a>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  )
}
