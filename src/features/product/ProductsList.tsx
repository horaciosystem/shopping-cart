import React from "react";
import useSWR from "swr";
import { ProductItemType } from "src/lib/types";
import { makeRequest } from "src/lib/api";
import { Link } from "react-router-dom";

interface Props {}

const ProductsList: React.FC<Props> = () => {
  const { data, error } = useSWR("products", () =>
    makeRequest<ProductItemType[]>("products")
  );

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {!data ? (
        <span>Loading...</span>
      ) : (
        data.map(it => (
          <Link key={it.id} to={`/products/${it.id}`}>
            <li className="flex flex-col shadow py-2 px-3 rounded">
              <div className="text-gray-700 font-semibold">{it.name}</div>
              <div className="text-gray-600">{it.brand}</div>
              <span className="font-semibold">R$ {it.price}</span>
            </li>
          </Link>
        ))
      )}
    </div>
  );
};

export default ProductsList;
