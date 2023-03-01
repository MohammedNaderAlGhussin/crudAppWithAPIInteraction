import { Link } from "react-router-dom";

const TableRow = (props) => {
  const { product, deleteBtn } = props;
  return (
    <tr className="bg-white border-b" key={product.id}>
      <td className="tbody-td">{product.id}</td>
      <td className="tbody-td">{product.title}</td>
      <td className="tbody-td">
        {product.description && product.description.slice(0, 15)}
        ...
      </td>
      <td className="tbody-td">{product.price}$</td>
      <td className="tbody-td flex gap-1">
        <button
          onClick={() => deleteBtn(product.id)}
          className="bg-red-500 hover:bg-red-900 action-btn"
          type=""
        >
          Delete
        </button>
        <Link
          className="bg-blue-500 hover:bg-blue-900 action-btn"
          type=""
          to={`/view-product/${product.id}`}
        >
          View
        </Link>
        <Link
          to={`/edit-product/${product.id}`}
          className="bg-gray-600 hover:bg-gray-900 action-btn"
          type=""
        >
          Edit
        </Link>
      </td>
    </tr>
  );
};

export default TableRow;
