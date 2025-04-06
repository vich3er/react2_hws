import './App.css'

function App() {
    const coursesAndDurationArray: {title: string, monthDuration: number}[] = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

  return (
      <>
          {
              coursesAndDurationArray.map((course, i) =>{
                  return (
                       <div  className={'border-blue-400 border-1 p-1 mb-2 pb-2 pt-2  rounded-sm'} key={i}><p className={"inline"}>{course.title}</p> <p className={'inline'}>{course.monthDuration}</p></div>
                  )
              })
          }
      </>
  )
}

export default App
