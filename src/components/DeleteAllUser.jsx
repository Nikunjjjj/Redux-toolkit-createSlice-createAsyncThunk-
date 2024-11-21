import {  deleteusers } from "../store/userslice";
import { useDispatch } from "react-redux";

const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearUser = () => {
    dispatch(deleteusers());
  };
  
  return (
    <div className="mt-4">
      <button
        onClick={() => clearUser()}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Clear Users
      </button>
    </div>
  );
};

export default DeleteAllUser;
