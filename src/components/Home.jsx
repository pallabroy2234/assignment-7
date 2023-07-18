import {useState} from "react";
import Users from "./Users";
import NewUser from "./NewUser";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  const userData = [
    {
      id: 1,
      name: "Pallab",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    // {
    //   id: 2,
    //   name: "Tushar",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    // },
    // {
    //   id: 3,
    //   name: "Refat",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    // },
    // {
    //   id: 4,
    //   name: "Ripon",
    //   description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    // },
  ];

  // eslint-disable-next-line no-unused-vars
  const [users, setUsers] = useState(userData);

  const handleRemove = (id) => {
    setUsers((prev) => {
      const filtered = prev.filter((user) => user.id !== id);
      return filtered;
    });
  };

  const newuser = (newUser) => {
    // setUsers([...users, newUser]);
    setUsers((prev) => {
      return [...prev, newUser];
    });
  };
  return (
    <div>
      <Header />
      <h1 className='text-3xl font-semibold text-center uppercase'>Todo list </h1>
      <div className='container'>
        <div className=' md:h-[80vh] mb-8 sm:mb-0'>
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2 '>
            <NewUser onNewUser={newuser} />
            <Users users={users} onRemove={handleRemove} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
