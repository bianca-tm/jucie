import Head from "next/head";

export default function Home() {
  return (
    <div className="full-container bg-gradient-to-bl from-slate-300 via-slate-300 to-slate-300 ">
      <Head>
        <title>jucie!</title>
        <link rel="icon" href="assets/pear.png" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main class="flex justify-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl m-5 animate-[wiggle_1s_ease-in-out_infinite]">
          jucie
        </h1>
        <p className="description ">so you wanna learn about fruits?</p>
        <button
          type="button"
          id="randomFruit"
          class="inline-flex items-center cursor-pointer rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-5 animate-bounce"
        >
          get jiggy
        </button>
      </main>
    </div>
  );

  const fruits = [
    { name: "Apple", fact: "Apples float in water because they are 25% air!" },
    { name: "Banana", fact: "Bananas are berries, but strawberries are not!" },
    { name: "Cherry", fact: "Cherries are related to roses!" },
    { name: "Grape", fact: "Grapes explode when you microwave them!" },
    { name: "Orange", fact: "Oranges are a hybrid of pomelo and mandarin." },
    { name: "Watermelon", fact: "Watermelons are 92% water!" },
  ];

  function randomizeFruit(fruitDisplay) {
    const randomFruit = fruits[Math.floor(Math.random() * fruits.length)];
    fruitDisplay.textContent = randomFruit.name;
    fruitDisplay.setAttribute("data-fact", randomFruit.fact);
  }

  function showFact(fruitDisplay, factDisplay, popup, overlay) {
    const fact = fruitDisplay.getAttribute("data-fact");
    if (fact) {
      factDisplay.textContent = fact;
      popup.style.display = "block";
      overlay.style.display = "block";
    }
  }

  function closePopup(popup, overlay) {
    popup.style.display = "none";
    overlay.style.display = "none";
  }

  function addEventListeners(
    randomFruit,
    fruitDisplay,
    factDisplay,
    popup,
    overlay,
    closePopupButton
  ) {
    randomFruit.addEventListener("click", () =>
      randomizeFruit(fruitDisplay)
    );

    fruitDisplay.addEventListener("click", () =>
      showFact(fruitDisplay, factDisplay, popup, overlay)
    );

    closePopupButton.addEventListener("click", () =>
      closePopup(popup, overlay)
    );

    overlay.addEventListener("click", () => closePopup(popup, overlay));
  }
}
