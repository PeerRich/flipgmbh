const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-orange-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-orange-500 lg:border-none">
            <div className="flex items-center">
              <a href="#">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-10 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white"
                  alt=""
                />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-orange-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block bg-orange-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-orange-600 hover:bg-orange-50"
              >
                Sign up
              </a>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-orange-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  