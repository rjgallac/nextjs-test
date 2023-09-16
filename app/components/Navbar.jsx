import Link from 'next/link'


const Navbar = () =>{
    return (
        <header>
          <nav>
            <ul className="flex pl-24 pr-24 pt-12">
              <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/">home</Link>
              </li>
              <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/services"> Services</Link>
              </li>
              <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/about"> About</Link>
              </li>
              <li className="mr-6">
                <Link className="text-blue-500 hover:text-blue-800" href="/blog"> Blog</Link>
              </li>
            </ul>
          </nav>
        </header>
    )
}

export default Navbar;