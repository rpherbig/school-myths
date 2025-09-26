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
  },
  {
    id: 9,
    category: "Biology",
    myth: "The Food Guide Pyramid shows the healthiest way to eat",
    fact: "The Food Pyramid was criticized for industry influence and unclear guidance, and was replaced by MyPlate in 2011.",
    details: "The USDA's 1992 Food Guide Pyramid was influenced by food industry lobbying, leading to potentially misleading recommendations. Critics noted that fat recommendations were problematic, protein groups lacked meaningful differentiation, and dairy sections were oversized. The pyramid's design made serving sizes unclear and some choices linked to heart disease were technically permitted.",
    taughtDuring: { start: 1992, end: 2011 }, // Official USDA guidance period
    references: [
      {
        title: "Food Pyramid (Nutrition)",
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Food_pyramid_(nutrition)"
      },
      {
        title: "MyPlate Replaces the Food Pyramid",
        source: "USDA",
        url: "https://www.usda.gov/media/blog/2011/06/02/myplate-replaces-food-pyramid"
      }
    ]
  },
  {
    id: 10,
    category: "Geography",
    myth: "There are four named oceans on Earth",
    fact: "There are now five officially recognized oceans, including the Southern Ocean around Antarctica.",
    details: "For decades, geography textbooks taught that Earth had four oceans: Atlantic, Pacific, Indian, and Arctic. The U.S. Board on Geographic Names proposed the Southern Ocean in 2000, defined as waters from Antarctica's coast to 60 degrees South latitude. National Geographic officially recognized it as the fifth ocean on June 8, 2021, defining it by the Antarctic Circumpolar Current. This recognition aims to draw attention to the unique ecosystem and conservation needs of Antarctic waters.",
    taughtDuring: { start: 1950, end: 2020 }, // When 4-ocean model was standard in education
    references: [
      {
        title: "How many oceans are there?",
        source: "NOAA Ocean Service",
        url: "https://oceanservice.noaa.gov/facts/howmanyoceans.html"
      },
      {
        title: "There's a new ocean now—can you name all 5?",
        source: "National Geographic",
        url: "https://www.nationalgeographic.com/environment/article/theres-a-new-ocean-now-can-you-name-all-five-southern-ocean"
      }
    ]
  },
  {
    id: 11,
    category: "History",
    myth: "Rosa Parks refused to give up her bus seat because she was tired",
    fact: "Rosa Parks was a trained civil rights activist who made a deliberate act of resistance, not a spontaneous decision due to fatigue.",
    details: "This oversimplified narrative is commonly taught in schools but ignores Parks' extensive background as an NAACP activist since 1943. She herself said: 'The only tired I was, was tired of giving in.' Parks had been investigating racial injustices and attending civil rights meetings for years. Her December 1, 1955 refusal was a calculated act of civil disobedience, not an impulsive moment of physical exhaustion.",
    taughtDuring: { start: 1960, end: 2010 }, // Simplified narrative commonly taught
    references: [
      {
        title: "Rosa Parks",
        source: "Biography.com",
        url: "https://www.biography.com/activists/rosa-parks"
      },
      {
        title: "Rosa Parks",
        source: "National Archives",
        url: "https://www.archives.gov/education/lessons/rosa-parks"
      }
    ]
  },
  {
    id: 12,
    category: "Biology",
    myth: "Lemmings commit mass suicide by jumping off cliffs",
    fact: "Lemmings do not commit suicide. This myth was created by a fraudulent 1958 Disney documentary that pushed lemmings off cliffs for dramatic effect.",
    details: "The lemming suicide myth originated from Disney's 'White Wilderness' documentary, where filmmakers deliberately pushed dozens of lemmings off a cliff while filming. In reality, lemmings migrate when populations grow too large, and some may accidentally drown while swimming across water obstacles during dispersal. Their behavior is mass migration, not suicide. The myth persists as a metaphor for blindly following crowds toward disaster.",
    taughtDuring: { start: 1958, end: 2000 }, // From Disney film through nature education
    references: [
      {
        title: "Do Lemmings Really Commit Mass Suicide?",
        source: "Britannica",
        url: "https://www.britannica.com/story/do-lemmings-really-commit-mass-suicide"
      },
      {
        title: "Lemming Suicide Myth",
        source: "Alaska Department of Fish and Game",
        url: "https://www.adfg.alaska.gov/index.cfm?adfg=wildlifenews.view_article&articles_id=56"
      }
    ]
  },
  {
    id: 13,
    category: "Biology",
    myth: "Everyone has a specific learning style (visual, auditory, kinesthetic)",
    fact: "Learning styles have little scientific support. Research shows no academic benefit from matching teaching methods to supposed learning preferences.",
    details: "Despite being a pervasive belief in education, scientific research finds no evidence that people learn better when instruction matches their preferred 'learning style.' Studies show that 70% of students don't even use study strategies matching their self-reported style, and those who do show no academic benefit. More effective universal strategies include spaced practice, self-testing, and experiencing material in multiple ways. The learning styles myth persists because it makes people feel unique and avoids more effortful learning techniques.",
    taughtDuring: { start: 1980, end: 2020 }, // Peak popularity in teacher training and education
    references: [
      {
        title: "The Problem with Learning Styles",
        source: "Scientific American",
        url: "https://www.scientificamerican.com/article/the-problem-with-learning-styles/"
      },
      {
        title: "Learning Styles: Myth or Reality?",
        source: "American Psychological Association",
        url: "https://www.apa.org/news/press/releases/2019/05/learning-styles-myth"
      }
    ]
  },
  {
    id: 14,
    category: "Biology",
    myth: "Humans only have five senses",
    fact: "Humans have more than five senses, with scientists identifying 9 or more distinct sensory systems.",
    details: "The traditional 'five senses' model taught in schools oversimplifies human sensory perception. Beyond sight, hearing, taste, smell, and touch, humans have additional senses including proprioception (body position awareness), balance (vestibular sense), temperature detection, and pain sensation. Some researchers argue for even more, identifying up to 20 different sensory systems based on distinct receptor types and neural pathways.",
    taughtDuring: { start: 1930, end: 2020 }, // Traditional elementary education
    references: [
      {
        title: "How many senses do we have?",
        source: "Johns Hopkins University Press",
        url: "https://www.press.jhu.edu/newsroom/how-many-senses-do-we-have"
      },
      {
        title: "The Twenty senses",
        source: "University of Utah Genetics",
        url: "https://learn.genetics.utah.edu/content/senses/twentysenses/"
      }
    ]
  },
  {
    id: 15,
    category: "History",
    myth: "Accused women were burned at the stake during the Salem Witch Trials",
    fact: "No one was burned at the stake during the Salem Witch Trials. All 19 victims were executed by hanging.",
    details: "This common misconception likely stems from confusion with European witch trials, where burning was more common. In Salem, witchcraft was treated as a felony under colonial law, not heresy under church law. The 19 executed victims were hanged at Gallows Hill, and one man, Giles Corey, was pressed to death with stones for refusing to enter a plea. Burning at the stake was used in Europe for heresy cases, but American colonial law used hanging for witchcraft convictions.",
    taughtDuring: { start: 1950, end: 2010 }, // Common historical misconception
    references: [
      {
        title: "Were Witches Burned at the Stake During the Salem Witch Trials?",
        source: "History.com",
        url: "https://www.history.com/articles/were-witches-burned-at-the-stake-during-the-salem-witch-trials"
      },
      {
        title: "TAMUC History Professor Busts Myths About the Salem Witch Trials",
        source: "Texas A&M University",
        url: "https://www.etamu.edu/tamuc-history-professor-busts-myths-about-the-salem-witch-trials/"
      }
    ]
  }
];

export const categories = ["All", "Biology", "Physics", "History", "Astronomy", "Geography"];