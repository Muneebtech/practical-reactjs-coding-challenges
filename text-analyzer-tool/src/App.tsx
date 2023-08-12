import { useEffect, useState } from 'react'
import './App.scss'
import BottomResultBox from './components/BottomResultBox'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ResultBox from './components/ResultBox'
import TextArea from './components/TextArea'
import { pronouns } from './data/pronouns'

const App = () => {
  const [TextValue, setTextValue] = useState<string>('')
  const [Data, setData] = useState<Array<{ title: string; value: string | number }>>([])
  const [bottomData, setBottomData] = useState<Array<{ title: string; value: string | number }>>([])
  const calculateData = (text: string) => {
    const words = text.split(' ').filter((word) => word !== '')
    const sentences = (text.match(/[.!?]/g) || []).length
    const paragraphs = text.split('\n')?.filter((para) => para.trim() !== '')?.length
    const averageReadingTime = calculateReadingTime(words.length)
    const characters = text.length
    const longestWord = findLongestWord(words)
    const pronounsCount = countPronouns(text)

    const array = [
      {
        title: 'Words',
        value: words.length,
      },
      {
        title: 'Characters',
        value: characters,
      },
      {
        title: 'Sentences',
        value: sentences,
      },
      {
        title: 'Paragraphs ',
        value: paragraphs,
      },
      {
        title: 'Pronouns',
        value: pronounsCount,
      },
    ]
    const array2 = [
      {
        title: 'Average Reading Time:',
        value: averageReadingTime,
      },
      {
        title: 'Longest word:',
        value: longestWord.join(', '),
      },
    ]
    setBottomData(array2)
    setData(array)
  }

  const findLongestWord = (words: string[]): string[] => {
    const max = Math.max(...words.map((word) => word.length))
    return words.filter((word) => word.length === max)
  }
  const calculateReadingTime = (words: number) => {
    const wordsPerMinute = 200
    const readingTimeMins = words / wordsPerMinute
    return readingTimeMins.toFixed(2)
  }

  const countPronouns = (para: string): number => {
    const words = para.toLowerCase().match(/\b\w+\b/g) || []
    const count = words.filter((word) => pronouns.includes(word)).length
    return count
  }

  useEffect(() => {
    calculateData(TextValue)
  }, [TextValue])

  return (
    <>
      <Navbar />
      <div className="small-container">
        <div className="main-app">
          <ResultBox data={Data} />
          <TextArea setTextValue={setTextValue} />
          <BottomResultBox data={bottomData} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
