"use client";

import { useState, useSyncExternalStore, type FormEvent } from "react";
import Link from "next/link";
import {
  ArrowRight,
  //   Instagram,
  //   Facebook,
  //   Youtube,
  Mail01,
} from "@untitledui/icons";

const shopLinks = [
  { label: "Men", href: "/men" },
  { label: "Women", href: "/women" },
  { label: "Kids", href: "/kids" },
  { label: "Home", href: "/home" },
  { label: "Beauty", href: "/beauty" },
  { label: "Bestsellers", href: "/bestsellers" },
];

const helpLinks = [
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
  { label: "Shipping & Delivery", href: "/shipping" },
  { label: "Returns & Exchanges", href: "/returns" },
  { label: "Fit Guide", href: "/fit-guide" },
  { label: "Track Your Order", href: "/track-order" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Story", href: "/our-story" },
  { label: "Careers", href: "/careers" },
];

// const socialLinks = [
//   {
//     label: "Instagram",
//     href: "https://www.instagram.com/",
//     Icon: Instagram,
//   },
//   {
//     label: "Facebook",
//     href: "https://www.facebook.com/",
//     Icon: Facebook,
//   },
//   {
//     label: "YouTube",
//     href: "https://www.youtube.com/",
//     Icon: Youtube,
//   },
// ];

// The year comes from the browser's clock. The server renders without it (no
// "current time" during prerendering, and no mismatch around New Year).
const subscribeToNothing = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const currentYear = useSyncExternalStore(subscribeToNothing, getYear, getServerYear);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this handler to your newsletter API before production.
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="border-t border-gray-200 text-gray-900">
      {/* Newsletter section */}
      <div className="border-b border-gray-200">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 md:items-center lg:px-12 lg:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              The Outfit Edit
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Good style. Great stories.
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              Sign up for new arrivals, style inspiration, and updates from
              Outfit.
            </p>
          </div>

          <div className="w-full md:justify-self-end md:max-w-lg">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <div className="flex h-12 flex-1 items-center gap-3 rounded-lg border border-gray-300 px-4 focus-within:border-gray-950">
                <Mail01
                  className="size-5 shrink-0 text-gray-500"
                  aria-hidden="true"
                />

                <input
                  id="footer-email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setSubscribed(false);
                  }}
                  placeholder="Enter your email"
                  className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gray-950 px-5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Subscribe
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>

            {subscribed ? (
              <p role="status" className="mt-3 text-sm text-green-700">
                Thanks for your interest! Newsletter signup will be completed
                once connected to our service.
              </p>
            ) : (
              <p className="mt-3 text-xs leading-5 text-gray-500">
                By subscribing, you agree to receive emails from Outfit. You can
                unsubscribe anytime.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Footer navigation */}
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-x-6 gap-y-10 px-5 py-12 sm:px-8 md:grid-cols-4 lg:gap-12 lg:px-12 lg:py-16">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link
            href="/"
            aria-label="Outfit home"
            className="inline-block text-2xl font-bold tracking-[0.16em]"
          >
            outfit
          </Link>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-600">
            Style that feels like you. Discover everyday essentials and pieces
            that make every outfit your own.
          </p>

          {/* <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-gray-950 hover:text-gray-950"
              >
                <Icon className="size-5" aria-hidden="true" />
              </a>
            ))}
          </div> */}
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-sm font-semibold">Shop</h3>
          <ul className="mt-4 space-y-3">
            {shopLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer support */}
        <div>
          <h3 className="text-sm font-semibold">Customer Care</h3>
          <ul className="mt-4 space-y-3">
            {helpLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold">Discover Outfit</h3>
          <ul className="mt-4 space-y-3">
            {companyLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-600 transition-colors hover:text-gray-950"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="text-sm font-semibold">Need help?</h3>
            <Link
              href="/contact"
              className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-950"
            >
              Get in touch
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-6 text-sm text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>© {currentYear} Outfit. All rights reserved.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="transition-colors hover:text-gray-950"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-gray-950"
            >
              Terms of Service
            </Link>

            <Link
              href="/cookies"
              className="transition-colors hover:text-gray-950"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
