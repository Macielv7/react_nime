import { Link } from "react-router-dom"

export default function Index() {
    return(
        <main className="tudo">
            <h1>PROJETO</h1>
            <ul>
                <li>  <Link to='/Anime'> anime </Link>  </li>
            </ul>
        </main>
    )
}