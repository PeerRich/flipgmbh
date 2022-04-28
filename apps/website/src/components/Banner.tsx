import { XIcon } from '@heroicons/react/outline'

export default function Banner() {
  return (
    <div className="relative bg-green-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <p className="font-medium text-white">
            <span className="md:hidden">FlipGmbH is open source!</span>
            <span className="hidden md:inline">FlipGmbH is open source! Contribute to help German founders</span>
            <span className="block sm:ml-2 sm:inline-block">
              <a href="https://github.com/peerrich/flipgmbh" target="_blank" rel="noreferrer" className="text-white font-bold underline">
                {' '}
                Visit GitHub <span aria-hidden="true">&rarr;</span>
              </a>
            </span>
          </p>
        </div>
       
      </div>
    </div>
  )
}
