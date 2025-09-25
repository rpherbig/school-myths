export const myths = [
  {
    id: 1,
    category: "Biology",
    myth: "Different parts of your tongue taste different flavors",
    fact: "Taste buds that detect sweet, sour, salty, bitter, and umami are distributed all over your tongue, not in specific zones.",
    details: "The 'tongue map' was based on a mistranslation of German research from 1901. While some areas may be slightly more sensitive to certain tastes, all taste buds can detect all basic flavors.",
    taughtDuring: { start: 1950, end: 2005 }, // Peak teaching period in most curricula
    references: [
      {
        title: "Taste Maps",
        source: "Scientific American",
        url: "https://www.scientificamerican.com/article/the-taste-map-all-wrong/"
      },
      {
        title: "The neurobiological basis of taste",
        source: "Nature Reviews Neuroscience",
        url: "https://www.nature.com/articles/nrn1489"
      }
    ]
  },
  {
    id: 2,
    category: "Physics",
    myth: "Lightning never strikes the same place twice",
    fact: "Lightning frequently strikes the same location multiple times, especially tall structures.",
    details: "The Empire State Building is struck by lightning about 25 times per year. Lightning follows the path of least resistance, which often leads to the same high points repeatedly.",
    taughtDuring: { start: 1960, end: 2010 }, // Common folk wisdom taught broadly
    references: [
      {
        title: "Lightning Myths and Facts",
        source: "National Weather Service",
        url: "https://www.weather.gov/safety/lightning-myths"
      },
      {
        title: "Empire State Building Lightning Rod",
        source: "TimeandDate.com",
        url: "https://www.timeanddate.com/news/astronomy/empire-state-building-lightning-rod"
      }
    ]
  },
  {
    id: 3,
    category: "History",
    myth: "People in medieval times thought the Earth was flat",
    fact: "Educated people in medieval Europe knew the Earth was round.",
    details: "Ancient Greeks calculated Earth's circumference around 240 BCE. Medieval scholars, navigators, and educated people understood Earth's spherical shape. The 'flat Earth' belief is largely a modern misconception about medieval knowledge.",
    taughtDuring: { start: 1940, end: 1990 }, // Traditional textbook narrative, mostly corrected by 1990s
    references: [
      {
        title: "The Myth of the Flat Earth",
        source: "History Today",
        url: "https://www.historytoday.com/archive/myth-flat-earth"
      },
      {
        title: "Inventing the Flat Earth",
        source: "Praeger Publishers",
        url: "https://books.google.com/books?id=DdS6n3kBb0MC"
      }
    ]
  },
  {
    id: 4,
    category: "Biology",
    myth: "You only use 10% of your brain",
    fact: "You use virtually all of your brain, even during simple tasks.",
    details: "Brain imaging shows activity throughout the brain even during rest. Damage to almost any area of the brain causes noticeable effects. This myth likely persists because it suggests untapped potential.",
    taughtDuring: { start: 1970, end: 2000 }, // Popular in self-help era and some psychology texts
    references: [
      {
        title: "Do People Only Use 10 Percent of Their Brains?",
        source: "Scientific American",
        url: "https://www.scientificamerican.com/article/do-people-only-use-10-percent-of-their-brains/"
      },
      {
        title: "Neuroimaging and the 'Ten Percent Myth'",
        source: "NeuroImage",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S1053811920304821"
      }
    ]
  },
  {
    id: 5,
    category: "Physics",
    myth: "Different colored flames are always hotter or cooler",
    fact: "Flame color depends on the chemical composition and available oxygen, not just temperature.",
    details: "While blue flames are often hotter than yellow ones in gas burners, adding certain chemicals can create colored flames at various temperatures. Copper creates green flames, sodium creates yellow-orange flames, regardless of temperature.",
    taughtDuring: { start: 1980, end: 2015 }, // Simplified chemistry teaching
    references: [
      {
        title: "Flame Colors: The Science Behind the Spectrum",
        source: "Chemistry World",
        url: "https://www.chemistryworld.com/news/flame-colours/3008091.article"
      },
      {
        title: "Flame Test Colors",
        source: "ThoughtCo",
        url: "https://www.thoughtco.com/flame-test-colors-photo-gallery-4053133"
      }
    ]
  },
  {
    id: 6,
    category: "Biology",
    myth: "Hair and fingernails continue growing after death",
    fact: "Hair and nails don't actually grow after death; the skin shrinks as it dehydrates.",
    details: "Cell growth requires energy and nutrients that stop flowing after death. The appearance of growth comes from skin dehydration and shrinkage, making existing hair and nails more prominent.",
    taughtDuring: { start: 1970, end: 2010 }, // Common in biology classes and popular culture
    references: [
      {
        title: "Do Hair and Nails Continue to Grow After Death?",
        source: "Live Science",
        url: "https://www.livescience.com/32014-do-hair-and-nails-keep-growing-after-death.html"
      },
      {
        title: "Forensic Pathology Reviews",
        source: "Humana Press",
        url: "https://link.springer.com/book/10.1007/978-1-59745-110-9"
      }
    ]
  },
  {
    id: 7,
    category: "Astronomy",
    myth: "You can see the Great Wall of China from space with the naked eye",
    fact: "The Great Wall is not visible from space with the naked eye.",
    details: "While satellites can photograph the wall, it's not visible to astronauts without aid. Many other human-made structures are actually more visible from space, like city lights and large airports.",
    taughtDuring: { start: 1960, end: 2000 }, // Space age enthusiasm, corrected by actual astronauts
    references: [
      {
        title: "Great Wall of China Not Visible from Space",
        source: "NASA",
        url: "https://www.nasa.gov/vision/space/workinginspace/great_wall.html"
      },
      {
        title: "Astronaut Chris Hadfield debunks Great Wall myth",
        source: "BBC News",
        url: "https://www.bbc.com/news/world-22003586"
      }
    ]
  },
  {
    id: 8,
    category: "History",
    myth: "Napoleon was unusually short for his time",
    fact: "Napoleon was average height for 18th-century French men at about 5'7\".",
    details: "The confusion arose from differences between French and English measurement systems. French measurements made him appear shorter when converted. He was actually slightly taller than the average man of his era.",
    taughtDuring: { start: 1920, end: 2000 }, // Long-standing historical misconception
    references: [
      {
        title: "Napoleon's Height: The Long and Short of It",
        source: "History Today",
        url: "https://www.historytoday.com/history-matters/napoleons-height-long-and-short-it"
      },
      {
        title: "The Height of Napoleon",
        source: "Smithsonian Magazine",
        url: "https://www.smithsonianmag.com/history/napoleon-complex-105391946/"
      }
    ]
  }
];

export const categories = ["All", "Biology", "Physics", "History", "Astronomy"];