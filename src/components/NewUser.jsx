import {useState} from "react";
import {v4 as uuidv4} from "uuid";
const NewUser = ({onNewUser}) => {
  const [newUser, setNewUser] = useState({
    id: "",
    name: "",
    description: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    setNewUser((prev) => {
      return {
        ...prev,
        [name]: e.target.value,
        id: uuidv4(),
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewUser(newUser);
  };
  return (
    <div className='w-full'>
      <form action='' onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label htmlFor='name' className='block mb-2 text-2xl font-semibold'>
            Name:
          </label>
          <input className='w-full px-3 py-2 border border-purple-500 rounded-sm shadow-sm focus:outline-none' type='text' placeholder='Enter name' name='name' id='name' onChange={handleChange} />
        </div>
        <div className='mb-5'>
          <label className='block mb-2 text-2xl font-semibold' htmlFor='description'>
            Description:
          </label>
          <textarea className='w-full px-3 py-2 border border-purple-500 rounded-sm resize-none focus:outline-none' name='description' id='description' rows='8' placeholder='Enter description' onChange={handleChange}></textarea>
        </div>
        <div>
          <button type='submit' className='px-6 py-2 text-white transition-all duration-500 bg-purple-500 border border-purple-500 rounded-sm shadow-sm shadow-purple-500 hover:bg-transparent hover:text-black hover:shadow-none'>
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
