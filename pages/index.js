import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  // State
  const [currentFruit, setCurrentFruit] = useState({ emoji: "", name: "" });
  const [currentFact, setCurrentFact] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // TODO: Implement dark mode
  // const [darkMode, setDarkMode] = useState(false);
  const [showFruit, setShowFruit] = useState(false);

  // Fruit data with emojis and related facts
  const fruitData = [
    {
      name: 'apple',
      emoji: '🍎',
      facts: [
        'Apples float in water because they are 25% air.',
        'There are over 7,500 varieties of apples grown around the world.',
        'Apple trees take 4-5 years to produce their first fruit.',
        'The science of apple growing is called pomology.',
        'Apples are a member of the rose family.',
      ]
    },
    {
      name: 'banana',
      emoji: '🍌',
      facts: [
        'Bananas are technically berries, while strawberries aren\'t.',
        'Bananas are naturally slightly radioactive due to their potassium content.',
        'Wild bananas contain large hard seeds and very little flesh.',
        'Bananas grow on plants that are actually giant herbs, not trees.',
        'A cluster of bananas is called a "hand" and a single banana is called a "finger".',
      ]
    },
    {
      name: 'orange',
      emoji: '🍊',
      facts: [
        'Oranges were historically a symbol of wealth and luxury.',
        'Brazil produces more oranges than any other country in the world.',
        'The name orange comes from the Sanskrit word for "orange tree".',
        'Oranges were first grown in ancient China.',
        'Orange trees can live and bear fruit for up to 100 years.',
      ]
    },
    {
      name: 'watermelon',
      emoji: '🍉',
      facts: [
        'Watermelons are 92% water.',
        'Early explorers used watermelons as canteens to carry water.',
        'Watermelons originated in Africa over 5,000 years ago.',
        'The world record for watermelon weight is 350.5 pounds.',
        'In Japan, cubic watermelons are grown in box-shaped molds as expensive ornaments.',
      ]
    },
    {
      name: 'strawberry',
      emoji: '🍓',
      facts: [
        'Strawberries are the only fruit with seeds on the outside.',
        'On average, there are 200 seeds on a strawberry.',
        'Strawberries aren\'t true berries, botanically speaking.',
        'Strawberry plants are perennials that can bear fruit up to 5 years.',
        'Medieval stonemasons carved strawberry designs on altars and church pillars.',
      ]
    },
    {
      name: 'grape',
      emoji: '🍇',
      facts: [
        'Grapes explode when you put them in the microwave.',
        'There are over 8,000 varieties of grapes worldwide.',
        'Grapes are berries that grow on deciduous woody vines.',
        'About 71% of world grape production is used for wine.',
        'Grapes come in white, black, red, blue, green, and purple varieties.',
      ]
    },
    {
      name: 'pineapple',
      emoji: '🍍',
      facts: [
        'The average pineapple takes almost 2 years to grow.',
        'Pineapples are not a single fruit but a group of berries fused together.',
        'A pineapple plant can only produce one pineapple at a time.',
        'The name comes from European explorers who thought they resembled pine cones.',
        'You can grow a pineapple plant by twisting the top off and planting it.',
      ]
    },
    {
      name: 'kiwi',
      emoji: '🥝',
      facts: [
        'Kiwi fruits contain more vitamin C than oranges.',
        'Kiwi fruits are also known as Chinese gooseberries.',
        'The kiwi fruit is named after the kiwi bird of New Zealand.',
        'Kiwi plants can produce up to 50 years, though commercial farms replace them sooner.',
        'You can eat the skin of kiwi fruits, which contains additional nutrients.',
      ]
    },
    {
      name: 'avocado',
      emoji: '🥑',
      facts: [
        'Avocados have the highest protein content of any fruit.',
        'Avocado trees can produce up to 500 fruits per year.',
        'The word "avocado" comes from the Aztec word "ahuacatl" which means testicle.',
        'An avocado has more potassium than a banana.',
        'Avocado trees need another avocado tree nearby to produce fruit.',
      ]
    },
    {
      name: 'cherry',
      emoji: '🍒',
      facts: [
        'Cherries belong to the rose family.',
        'A single cherry tree can produce about 7,000 cherries.',
        'Michigan grows about 75% of tart cherries in the United States.',
        'The word cherry comes from the Turkish town of Cerasus.',
        'There are more than 1,000 varieties of cherries in the United States.',
      ]
    },
    {
      name: 'peach',
      emoji: '🍑',
      facts: [
        'Peaches originated in China over 8,000 years ago.',
        'China produces over 50% of the world\'s peaches.',
        'A medium peach contains only about 40 calories.',
        'The peach is a member of the rose family.',
        'The world\'s largest peach cobbler is made every year in Georgia.',
      ]
    },
    {
      name: 'lemon',
      emoji: '🍋',
      facts: [
        'Lemons contain more sugar than strawberries.',
        'Lemon trees can produce up to 600 pounds of lemons per year.',
        'Lemons were used to prevent scurvy in sailors during the 1700s.',
        'You can get more juice from a warm lemon than a cold one.',
        'California and Arizona produce 95% of the entire U.S. lemon crop.',
      ]
    },
    {
      name: 'blueberry',
      emoji: '❔',
      facts: [
        'Blueberries can improve memory function.',
        'Blueberries are one of the few naturally blue foods.',
        'A blueberry bush can live up to 50 years.',
        'Maine produces more wild blueberries than anywhere else in the world.',
        'Native Americans called blueberries "star berries" due to the star shape on the berry\'s crown.',
      ]
    },
    {
      name: 'coconut',
      emoji: '🥥',
      facts: [
        'Coconuts are technically seeds, not nuts.',
        'Coconut water was used as IV fluid in emergencies during World War II.',
        'Coconut palms are known as the "tree of life" for their many uses.',
        'A coconut can float in water and travel to different lands.',
        'The name comes from Spanish/Portuguese "coco" meaning "skull" or "head".',
      ]
    },
    {
      name: 'mango',
      emoji: '🥭',
      facts: [
        'Mangoes can be ripened faster by placing them in a paper bag.',
        'Mangoes are the national fruit of India, Pakistan, and the Philippines.',
        'There are over 500 varieties of mangoes.',
        'Mango trees can grow up to 100 feet tall.',
        'A mango tree can produce fruit for over 300 years.',
      ]
    },
    {
      name: 'pear',
      emoji: '🍐',
      facts: [
        'Pears ripen from the inside out.',
        'There are over 3,000 varieties of pears worldwide.',
        'Pear wood is used to make high-quality woodwind instruments.',
        'China produces about 68% of the world\'s pears.',
        'The average pear tree produces fruit for over 50 years.',
      ]
    }
  ];

  // Helper to get a random fact for a fruit
  const getRandomFactForFruit = (fruitName) => {
    const fruit = fruitData.find(f => f.name === fruitName);
    if (!fruit) return "Did you know? Fruits are an important part of a healthy diet!";
    return fruit.facts[Math.floor(Math.random() * fruit.facts.length)];
  };

  // Get a random fruit and fact
  const fetchRandomFruitWithFact = () => {
    setIsLoading(true);
    setError(null);
    try {
      const randomFruitIndex = Math.floor(Math.random() * fruitData.length);
      const selectedFruit = fruitData[randomFruitIndex];
      const fact = getRandomFactForFruit(selectedFruit.name);
      setCurrentFruit({ emoji: selectedFruit.emoji, name: selectedFruit.name });
      setCurrentFact(fact);
    } catch (error) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

    // Get a random fruit and fact
  const fetchRandomFactForFruit = () => {
  setIsLoading(true);
  setError(null);
  try {
    const fruit = fruitData.find(f => f.name === currentFruit.name);
    if (!fruit) throw new Error("Fruit not found.");
    // Exclude the current fact
    const otherFacts = fruit.facts.filter(fact => fact !== currentFact);
    // If all facts have been shown, allow repeats
    const fact = otherFacts.length > 0
      ? otherFacts[Math.floor(Math.random() * otherFacts.length)]
      : fruit.facts[Math.floor(Math.random() * fruit.facts.length)];
    setCurrentFact(fact);
  } catch (error) {
    setError('Something went wrong. Please try again.');
  } finally {
    setIsLoading(false);
  }
};

  // Dark mode preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setDarkMode(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Initialize with random fruit and fact, but only when showFruit is TRUE
  useEffect(() => {
    if (showFruit) {
      fetchRandomFruitWithFact();
    }
    // eslint-disable-next-line
  }, [showFruit]);

  return (
    <div className="full-container bg-gradient-to-bl from-slate-300 via-slate-300 to-slate-300 ">
      <Head>
        <title>jucie!</title>
        <link rel="icon" href="assets/pear.png" />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl m-5 animate-[wiggle_1s_ease-in-out_infinite]">
          jucie
        </h1>
        <p className="description">so you wanna learn about fruits?</p>
        {!showFruit && (
          <button
            type="button"
            id="getStarted"
            className="inline-flex items-center cursor-pointer rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-5 animate-bounce"
            onClick={() => setShowFruit(true)}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "get jiggy"}
          </button>
        )}
        {showFruit && (
          <>
            {error && <div className="text-red-500">{error}</div>}
            {currentFruit.name && (
              <div className="mt-4 text-center">
                <div className="text-6xl">{currentFruit.emoji}</div>
                <div className="text-xl font-semibold capitalize">{currentFruit.name}</div>
                <div className="mt-2 text-gray-700">{currentFact}</div>
                <button
                  type="button"
                  id="randomFruit"
                  className="inline-flex items-center cursor-pointer rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-5 animate-bounce"
                  onClick={fetchRandomFruitWithFact}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "new fruit"}
                </button>
                <button
                  type="button"
                  id="randomFact"
                  className="inline-flex items-center cursor-pointer rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 m-5 animate-bounce"
                  onClick={fetchRandomFactForFruit}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "new fact"}
                </button>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
