
import "./Navbar.css"
import { useGlobalContext } from "../DataContext"
import { useState } from "react"

const Searchbar = () => {
    const { handleSearch, searchInput } = useGlobalContext()

    const [input, setInput] = useState("")

    return (
        <>
            {/* <form>
                <input onSubmit={handleSearch}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </form> */}
        </>
    )
}

export default Searchbar