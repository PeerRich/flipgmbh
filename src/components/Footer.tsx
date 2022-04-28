import Link from "next/link";

const footerNavigation = {
  partners: [
    { name: "Orrick", href: "https://www.orrick.com/" },
    { name: "Rebank", href: "https://rebanknow.com/" },
    { name: "Stripe Atlas", href: "https://stripe.com/atlas" },
    { name: "Mercury Bank", href: "https://mercury.com/" },
  ],
  resources: [
    { name: "Source Code", href: "https://github.com/peerrich/flipgmbh" },
    { name: "Announcement", href: "https://twitter.com/peer_rich/status/1519278333481074693" },
  ],
  legal: [
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex text-white font-cal items-center justify-between w-full lg:w-auto">
              🇩🇪 🇺🇸 FlipGmbH
            </div>
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
                      <Link href={item.href}>
                        <a className="text-base text-stone-400 hover:text-stone-300">
                          {item.name}
                        </a>
                      </Link>
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
                      <Link href={item.href}>
                        <a className="text-base text-stone-400 hover:text-stone-300">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-stone-200 tracking-wider uppercase">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href}>
                        <a className="text-base text-stone-400 hover:text-stone-300">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-700 pt-8">
          <p className="text-base text-stone-400 xl:text-center">
            &copy; 2022 FlipGmbH. All rights reserved. Made outside of Germany
            🇩🇪
          </p>
        </div>
      </div>
    </footer>
  );
}
