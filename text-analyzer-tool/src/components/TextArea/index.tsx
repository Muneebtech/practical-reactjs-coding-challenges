import './index.scss'
type props = {
  setTextValue: (word: string) => void
}
const TextArea = ({ setTextValue }: props) => {
  return (
    <textarea
      className="text-area"
      onChange={(e) => setTextValue(e.target.value)}
      placeholder="Paste your text here..."
    />
  )
}

export default TextArea
