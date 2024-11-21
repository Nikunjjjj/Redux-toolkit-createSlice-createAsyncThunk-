import { useDispatch, useSelector } from "react-redux";
import { removeuser } from "../store/userslice";


const DisplayUser = () => {

  const dispatch = useDispatch();
  
  const {data, isLoading, isError} = useSelector((state) => state.user);


  const handleDelete = (id) => {
    dispatch(removeuser(id));
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-100 rounded-t-lg">
        <h2 className="text-xl font-bold text-gray-800">Users</h2>
      </div>
      <div className="p-4">
        {isLoading && <p>Loading...</p>}
        {isError && <p>Error: {console.error(isError)}</p>}
        {data &&
          <ul className="space-y-2">
            {data.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center bg-gray-50 rounded-lg p-3"
              >
                <span className="text-2xl font-medium text-gray-800">
                  {item.title}
                </span>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="text-white p-2 rounded-md bg-red-500 font-medium focus:outline-none"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};

export default DisplayUser;
