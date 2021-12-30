import { InputGroup, FormControl } from "react-bootstrap"
import { BsSearch } from "react-icons/bs"
const Searchbar = () => {
    return (
        <>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1"><BsSearch /></InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                    placeholder="Search products"
                    aria-label="Search products"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    )
}

export default Searchbar