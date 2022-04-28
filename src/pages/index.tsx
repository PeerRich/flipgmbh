import "cal-sans";
import Script from "next/script";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OurApproach from "../components/OurApproach";
import WhyDelaware from "../components/WhyDelaware";

export default function Index() {
  return (
    <div className="bg-white">
      <Banner />
      <Header />
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
        <WhyDelaware />
        <OurApproach />
      </main>
      <Footer />
    </div>
  );
}
