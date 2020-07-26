import React from "react";
import useSWR from "swr";
import { ProductItemType } from "src/lib/types";
import { makeRequest } from "src/lib/api";
import { Link } from "react-router-dom";
import { Text } from "src/common/Text/Text";

interface Props {}

const ProductsList: React.FC<Props> = () => {
  const { data } = useSWR(
    "products",
    () => makeRequest<ProductItemType[]>("products"),
    { suspense: true }
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {data?.map((it) => (
        <Link key={it.id} to={`/products/${it.id}`}>
          <li className="flex flex-col shadow py-2 px-3 rounded space-y-1">
            <Text size="md" className="font-semibold">
              {it.name}
            </Text>
            <div className="text-gray-600">{it.brand}</div>
            <span className="font-semibold">R$ {it.price}</span>
          </li>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
