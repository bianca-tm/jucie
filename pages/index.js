import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>jucie!</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>

      <main>
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl m-5">jucie</h1>
        <p className="description ">
          so you wanna learn about fruits?
        </p>
        <div class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-5">get jiggy</div>
      </main>
    </div>
  )
}
