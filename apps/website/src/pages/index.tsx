import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";

import "cal-sans";

const benefits = [
  "Standard for venture-funded startups",
  "Raise from international investors",
  "No notary requirement to start a company or raise funding",
  "Fundraise with SAFEs",
  "Startup friendly voting structure",
  "Required by Y Combinator, ODX and other accelerators",
  "Compatible with Silicon Valley's tech stack (AngelList, Clerky, etc.)",
  "Paperless fundraising",
  "Delaware Courts have a lot of startup and corporate experience",
  "Real equity grants for employees (no VSOPs)",
  "Simpler captable management",
  "Online incorporation",
  "No public company register (no spam, more privacy)",
];

const footerNavigation = {
  partners: [
    { name: "Orrick", href: "https://www.orrick.com/" },
    { name: "Rebank", href: "https://rebanknow.com/" },
    { name: "Stripe Atlas", href: "https://stripe.com/atlas" },
    { name: "Mercury Bank", href: "https://mercury.com/" },
  ],
  resources: [
    { name: "Source Code", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
  ],
  legal: [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
  ],
};

export default function Example() {
  return (
    <div className="bg-white">
      <Popover as="header" className="relative">
        <div className="bg-stone-50">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex font-cal items-center justify-between w-full lg:w-auto">
                <a href="#">FlipGmbH</a>
                <div className="-mr-2 flex items-center lg:hidden">
                  <Popover.Button className="bg-stone-50 rounded-md p-2 inline-flex items-center justify-center text-stone-400 hover:bg-stone-100 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-black">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              <a
                href="#"
                className="py-2 px-6 bg-stone-100 border border-transparent rounded-md text-base font-medium text-stone-900 hover:bg-stone-200"
              >
                Login
              </a>
            </div>
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top lg:hidden"
          >
            <div className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=teal&shade=500"
                    alt=""
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-stone-400 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="mt-6 px-5">
                  <a
                    href="#"
                    className="block text-center w-full py-2 px-4 border border-transparent rounded-md shadow bg-black text-white font-medium hover:bg-teal-600"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <main className="overflow-hidden">
        <div className="bg-stone-50">
          <div className="py-24 lg:py-32">
            <div className="relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
              <h1 className="text-4xl max-w-3xl font-cal font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
                Start a venture-fundable startup as a German
              </h1>
              <div className="text-md">
                <strong className="mt-6 block text-stone-500 max-w-3xl">
                  "Flip" your existing GmbH to a Delaware C-Corp or start from
                  scratch – correctly.
                </strong>

                <p className="mt-6 text-stone-500 max-w-3xl">
                  FlipGmbH was started by Peer Richelsen, Co-CEO of Cal.com,
                  Inc., to ease the pain of converting a German GmbH to a
                  Delaware C-Corp. Every year, thousands of German entrepreneurs
                  experience the limitations and pains of bureucracy running a
                  German GmbH, especially when the startup is looking to attract
                  international funding.
                </p>
                <p className="mt-6 text-stone-500 max-w-3xl">
                  Find out if you qualify, follow the steps and get connected to
                  a specialised lawfirm that can help with your flip.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section
          className="relative bg-white"
          aria-labelledby="contact-heading"
        >
          <div
            className="absolute w-full h-1/2 bg-stone-50"
            aria-hidden="true"
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <svg
              className="absolute z-0 top-0 right-0 transform -translate-y-16 translate-x-1/2 sm:translate-x-1/4 md:-translate-y-24 lg:-translate-y-72"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-stone-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative bg-white shadow-xl">
              <h2 id="contact-heading" className="sr-only">
                Contact us
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 bg-black sm:px-10 xl:p-12">
                  <div
                    className="absolute inset-0 pointer-events-none sm:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={343}
                      height={388}
                      viewBox="0 0 343 388"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                        fill="url(#linear1)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear1"
                          x1="254.553"
                          y1="107.554"
                          x2="961.66"
                          y2="814.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={359}
                      height={339}
                      viewBox="0 0 359 339"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                        fill="url(#linear2)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear2"
                          x1="192.553"
                          y1="28.553"
                          x2="899.66"
                          y2="735.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      width={160}
                      height={678}
                      viewBox="0 0 160 678"
                      fill="none"
                      preserveAspectRatio="xMidYMid slice"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                        fill="url(#linear3)"
                        fillOpacity=".1"
                      />
                      <defs>
                        <linearGradient
                          id="linear3"
                          x1="192.553"
                          y1="325.553"
                          x2="899.66"
                          y2="1032.66"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset={1} stopColor="#fff" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-white">
                    Why Delaware C-Corp
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {benefits.map((feature) => (
                      <li key={feature} className="flex space-x-3">
                        <CheckCircleIcon
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-stone-900">
                    Find out if you qualify
                  </h3>
                  <form
                    action="#"
                    method="POST"
                    className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-stone-900"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-black focus:border-black border-stone-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-stone-900"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-black focus:border-black border-stone-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-stone-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-black focus:border-black border-stone-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-stone-900"
                        >
                          Phone
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-stone-500"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          className="py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-black focus:border-black border-stone-300 rounded-md"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-stone-900"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          className="py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-black focus:border-black border-stone-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium text-stone-900"
                        >
                          Message
                        </label>
                        <span
                          id="message-max"
                          className="text-sm text-stone-500"
                        >
                          Max. 500 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          className="py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-black focus:border-black border border-stone-300 rounded-md"
                          aria-describedby="message-max"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2 sm:flex sm:justify-end">
                      <button
                        type="submit"
                        className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black sm:w-auto"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="offices-heading">
          <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-stone-900">
              Our approach
            </h2>
            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              We first assess your situation. Every GmbH is different and we
              need to collect some information about your company to provide the
              best support.
            </p>
            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              After we've qualified your eligibility, we'll contact you to collect all necessary documents (incorporation documents, KYC, etc.)
            </p>
            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              Lastly, we will connect you with a lawyer to discuss the final steps of the flip.
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-stone-900" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <p className="text-stone-400 text-base">
                Helping ambitious German founders to do <br />
                the right thing to grow and thrive.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                    partners
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.partners.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-stone-400 hover:text-stone-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                    Resources
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.resources.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-stone-400 hover:text-stone-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                    Company
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.company.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-stone-400 hover:text-stone-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                    Legal
                  </h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {footerNavigation.legal.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-base text-stone-400 hover:text-stone-300"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-stone-700 pt-8">
            <p className="text-base text-stone-400 xl:text-center">
              &copy; 2022 FlipGmbH. All rights reserved. Made outside of Germany 🇩🇪
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
