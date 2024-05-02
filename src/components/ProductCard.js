import { Link } from "react-router-dom";


export const ProductCard = ({product}) => {
    const {id, name , overview, image_local} = product;
    
    return (
      <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <Link to={`/products/${id}`} className="relative" >
              <img className="rounded-t-lg w-full h-64" src={image_local} alt={name} />
          </Link>
          <div className="p-5">
              <Link to={`/products/${id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
          </div>
      </div>
    )
  }