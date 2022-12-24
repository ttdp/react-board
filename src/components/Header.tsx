interface IProps {
  title: string
}

function Header({ title }: IProps) {
  return (
    <header className="flex items-center px-4 py-2">
      <h1 className="text-xl text-white font-bold mx-auto drop-shadow-xl">
        {title}
      </h1>
    </header>
  )
}

export default Header