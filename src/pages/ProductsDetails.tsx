import { useParams } from 'react-router-dom'
import Navbar from './Navbar'

const ProductsDetails = () => {
    const {id}=useParams()

  return (
    <div>
      <Navbar/>
      Products Details {id}
    </div>
  )
}

export default ProductsDetails
