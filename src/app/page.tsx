import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="relative flex flex-col h-screen items-center -mt-10 text-center justify-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border bg-white px-7 py-2 border-gray-300">
          <p className="text-sm font-semibold text-gray-700">Powered by AI</p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Your Goto <span className="text-green-600">Healthcare</span>{" "}
          assistant.
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Nura allows you to have conversations about any healthcare. Simply
          upload your file and start asking questions right away.
        </p>
        <Link
          href="/dashboard"
          className="mt-4 rounded-full flex items-center bg-green-500 text-white py-2 px-7 "
        >
          Get started <ArrowRight className="ml-1.5 h-5 w-5" />
        </Link>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl  "
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="opacity-30 sm:w-[80rem] relative left-[calc(50%-11rem)] bottom-0 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#4cb45a] to-[#5eff7c]"
          />
        </div>
      </MaxWidthWrapper>

      {/* Feature section  */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-gray-900 sm:text-5xl">
              Start asking queries in minutes
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Getting healthcare insights has never been easier.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-600">
                For you
              </span>
              <span className="text-xl font-semibold">
                Get insights personalized to you.
              </span>
              <span className="mt-2 text-zinc-700">
                You can adjust your settings to fine-tune your personalization
                and get the most out of your experience.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-600">
                Accessebility
              </span>
              <span className="text-xl font-semibold">
                Access Nura from any browser.
              </span>
              <span className="mt-2 text-zinc-700">
                No installations required. Sign up and start asking queries all
                from your browser.
              </span>
            </div>
          </li>
          <li className="md:flex-1">
            <div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-green-600">GPT</span>
              <span className="text-xl font-semibold">Built using GPT</span>
              <span className="mt-2 text-zinc-700">
                Uses GPT 3.5 from OpenAI to repsond in natural language.
              </span>
            </div>
          </li>
        </ol>
      </div>
    </>
  );
}
