import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loader } from "lucide-react";

export default function Store() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      const response = await axios.get(`/api/stores/${id}/products`);
      setProducts(response.data);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-4">Store</h1>
      {loading ? (
        <div className="flex justify-center items-center">
          <Loader height={80} width={80} />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <h2 className="text-2xl font-bold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
