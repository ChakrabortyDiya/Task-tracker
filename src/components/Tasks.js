const tasks=[
    {
        id:1,
        text: 'Doctors appointment',
        day:'Feb 5th at 2:30pm',
        reminder:true,
    },
    {
        id:2,
        text: 'Meeting at School',
        day:'Feb 6th at 1:30pm',
        reminder:true,    
    },
    {
        id:3,
        text: 'Grocery Shopping',
        day:'Feb 5th at 2:30pm',
        reminder:false,
    }
]

const Tasks = () => {
  return (
    <>
      {tasks.map((tasks)=>(
      <h3>{tasks.text}</h3>
      ))}
    </>
  )
}

export default Tasks
