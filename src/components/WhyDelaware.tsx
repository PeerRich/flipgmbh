import Script from "next/script";
import { CheckCircleIcon } from "@heroicons/react/solid";
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
    "From idea to IPO, no reincorporation required (GmbH's can't go public)"
  ];
export default function WhyDelaware(){
    return <section
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
            <div
              data-tf-widget="vMbXSG98"
              data-tf-iframe-props="title=FlipGmbH"
              data-tf-medium="snippet"
              style={{ width: "100%", height: "600px" }}
            />
            <Script src="//embed.typeform.com/next/embed.js" />
          </div>
        </div>
      </div>
    </div>
  </section>
}