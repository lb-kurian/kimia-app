'use client'

import { useState, useEffect } from 'react'

interface Quote {
  text: string;
  author: string;
}

const quotes: Quote[] = [
  { text: "Content is fire, social media is gasoline.", author: "Jay Baer" },
  { text: "Social media is about the people, not about your business.", author: "Matt Goulart" },
  { text: "Marketing is no longer about the stuff that you make, but about the stories you tell.", author: "Seth Godin" },
  { text: "The best marketing doesn't feel like marketing.", author: "Tom Fishburne" },
  { text: "Social media is changing the way we communicate and the way we are perceived.", author: "Amy Jo Martin" },
]

export function QuoteMatching() {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)
  const [options, setOptions] = useState<string[]>([])
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    return quotes[randomIndex]
  }

  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]
    }
    return array
  }

  const newQuote = () => {
    const quote = getRandomQuote()
    setCurrentQuote(quote)
    setSelectedAuthor(null)
    setIsCorrect(null)

    const allAuthors = quotes.map(q => q.author)
    const quoteOptions = shuffleArray([...new Set([quote.author, ...allAuthors.slice(0, 3)])])
    setOptions(quoteOptions)
  }

  useEffect(() => {
    newQuote()
  }, [])

  const handleAuthorSelect = (author: string) => {
    setSelectedAuthor(author)
    setIsCorrect(author === currentQuote?.author)
  }

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-center mb-4">Match the Quote</h2>
      <div className="space-y-4">
        {currentQuote && (
          <div className="text-center">
            <p className="text-lg italic mb-4">"{currentQuote.text}"</p>
            <div className="grid grid-cols-2 gap-2">
              {options.map((author, index) => (
                <button
                  key={index}
                  onClick={() => handleAuthorSelect(author)}
                  className={`w-full py-2 px-4 rounded ${
                    selectedAuthor === author
                      ? isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {author}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="mt-6 text-center">
        <button
          onClick={newQuote}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
          </svg>
          New Quote
        </button>
      </div>
    </div>
  )
}

