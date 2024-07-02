const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  )
}

Header.defaultProps ={
    tilte: 'Task Tracker',
}

export default Header
