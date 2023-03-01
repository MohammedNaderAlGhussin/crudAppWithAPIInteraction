import TableRow from "./TableRow";

const Table = (props) => {
  const { products, onDeleteHandler } = props;
  return (
    <table className="w-full min-w-[680px] ">
      <thead className="bg-white border-b font-bold">
        <tr>
          <th scope="col" className="thead-th">
            ID
          </th>
           <th scope="col" className="thead-th">
            Title
          </th>
          <th scope="col" className="thead-th">
            Description
          </th>
          <th scope="col" className="thead-th">
            Price
          </th>
          <th scope="col" className="thead-th">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <TableRow
              key={product.id}
              product={product}
              deleteBtn={onDeleteHandler}
            />
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
