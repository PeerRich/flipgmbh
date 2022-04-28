export default function Options() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                1
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                Alternative 1: Flip an existing GmbH
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              We help you get the right documents in place to flip an existing
              GmbH. A "flip" means a Delware C-Corp becomes the new holding company and the GmbH turns into a wholly owned subsidiary.
            </dd>
          </div>
          <div>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                2
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                Alternative 2: "Synthetic flip" an existing GmbH
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              When a GmbH valuation is too high already, companies can
              undergo a "deferred share exchange agreement", which is an
              agreement between the GmbH and the Delaware C-Corp to defer the
              flip to the point of liquidation (sale or IPO).
            </dd>
          </div>
          <div>
            <dt>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                3
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                Alternative 3: Reincorporation
              </p>
            </dt>
            <dd className="mt-2 text-base text-gray-500">
              When no valuable IP has been created and no investors have joined the GmbH, founders can choose to shutdown the German corporation and reincorporate in Delaware as a C-Corp
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
