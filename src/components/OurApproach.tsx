import Script from "next/script";

export default function OurApproach() {
  return (
    <section>
      <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="block sm:grid grid-cols-2 sm:space-x-8">
          <div>
            <h2 className="text-3xl mt-10 font-extrabold text-stone-900">
              Our approach
            </h2>

            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              We first assess your situation. Every GmbH is different and we
              need to collect some information about your company to provide the
              best support.
            </p>
            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              After we've qualified your eligibility, we'll contact you to
              collect all necessary documents (incorporation documents, KYC,
              etc.)
            </p>
            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              Lastly, we will connect you with a lawyer to discuss the final
              steps of the flip.
            </p>

            <p className="mt-6 text-lg text-stone-500 max-w-3xl">
              Inspired by <a className="text-blue-500 underline" href="https://richventures.com/posts/how-i-would-start-my-next-startup-in-germany-without-a-gmbh">
              https://richventures.com/posts/how-i-would-start-my-next-startup-in-germany-without-a-gmbh
              </a>
            </p>
            
          </div>
          <blockquote className="twitter-tweet">
            <p lang="en" dir="ltr">
              inspired by{" "}
              <a href="https://twitter.com/levelsio?ref_src=twsrc%5Etfw">
                @levelsio
              </a>
              &#39; rebase which helps remote workers move to Portugal and given
              my painful experience moving a German GmbH to Delaware I&#39;ve
              started{" "}
              <a href="https://t.co/6Rao4Sx0BG">https://t.co/6Rao4Sx0BG</a>,
              which will help any German Entrepreneur flip or start a Delaware
              C-Corp correctly.
            </p>
            &mdash; Peer Richelsen 🗓🍊 (@peer_rich){" "}
            <a href="https://twitter.com/peer_rich/status/1519278333481074693?ref_src=twsrc%5Etfw">
              April 27, 2022
            </a>
          </blockquote>{" "}
          <Script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </div>
      </div>
    </section>
  );
}
