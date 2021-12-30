import { Image } from "react-bootstrap"
import { useState, useEffect } from "react"
import { useParams } from "react-router"

const Productdetails = () => {
    const { id } = useParams()

    const [productDetails, setProductDetails] = useState([])
    useEffect(() => {
        fetchProductDetails()
    }, [])
    const fetchProductDetails = async () => {
        try {
            const response = await fetch("https://hw-m6d5.herokuapp.com/products/" + id)
            if (response.ok) {
                const info = await response.json()
                setProductDetails(info)
            } throw new Error("Failed to get products!")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Image src={productDetails.image_url} />
        </>
    )
}
export default Productdetails