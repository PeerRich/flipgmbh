import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-stone-50">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 px-6 xl:px-8"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <Link href="/">
            <a className="flex font-cal items-center justify-between w-full lg:w-auto">
              🇩🇪 🇺🇸 FlipGmbH
            </a>
          </Link>
        </div>
        {/* TODO: dashboard coming soon. help wanted
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <a
            href="#"
            className="py-2 px-6 bg-stone-100 border border-transparent rounded-md text-base font-medium text-stone-900 hover:bg-stone-200"
          >
            Login
          </a>
        </div>
         */}
      </nav>
    </div>
  );
}
