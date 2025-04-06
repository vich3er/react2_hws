import './App.css'

function App() {

    const coursesTitleArray: string[] = [
        'JavaScript Complex',
        'Java Complex',
        'Python Complex',
        'QA Complex',
        'Fullstack',
        'Frontend'
    ];
  return (
      <>
          {coursesTitleArray.map((title) => <p className={'font-bold text-red-600 p-1'}>{title}</p>)}
      </>
  )
}

export default App
