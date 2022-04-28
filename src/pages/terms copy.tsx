import Footer from "../components/Footer";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";

export default function Terms() {
  return (
    <div>
      <Meta
        title="Cal.com | Terms of Service"
        url="https://cal.com/terms"
        img="https://cal.com/og-image.png"
        description="The legal stuff you agree to when you use our services."
      />

      <Navbar />
      <main className="bg-grid overflow-x-hidden px-4 sm:mt-24">
        <div className="py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl space-y-2 lg:max-w-none">
              <h2 className="font-cal mt-1 mb-8 text-4xl text-gray-900 sm:text-5xl lg:text-6xl">
                Terms of Service
              </h2>
            </div>
          </div>
        </div>
        <div className="prose mx-auto max-w-7xl md:px-7">
          <div className="bg-white md:px-8">
            Effective date: 04/14/2021
            
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
