import './index.scss'
interface props {
  data: Array<{ title: string; value: string | number }>
}
const BottomResultBox = ({data}:props) => {
  const bottomResultBar = [
    {
      title: 'Average Reading Time:',
      value: '-',
    },
    {
      title: 'Longest word:',
      value: '-',
    },
  ]

  return (
    <div className="bottom-result-bar">
      {data?.map(({ title, value }) => (
        <div className="result-box" key={title}>
          <span className="box-title">{title}</span>
          <span className="box-value">{value}</span>
        </div>
      ))}
    </div>
  )
}

export default BottomResultBox
