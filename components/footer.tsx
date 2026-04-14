import Link from "next/link"
import { Instagram, MapPin, Phone, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Maplewood Kitchen</h3>
            <p className="text-background/70 max-w-md leading-relaxed">
              A casual American brunch spot serving fresh, warm meals to Nashville&apos;s neighborhood since 2018.
            </p>
            <a
              href="https://instagram.com/maplewoodkitchen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-background/70 hover:text-background transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>@maplewoodkitchen</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/menu" className="text-background/70 hover:text-background transition-colors">
                  Our Menu
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://www.opentable.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  Reservations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>412 Maplewood Ave<br />Nashville, TN</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5 shrink-0" />
                <span>(615) 555-0182</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Clock className="h-5 w-5 shrink-0" />
                <span>Tue - Sun, 8am - 3pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            &copy; {new Date().getFullYear()} Maplewood Kitchen. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Made with care in Nashville
          </p>
        </div>
      </div>
    </footer>
  )
}
