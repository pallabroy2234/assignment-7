/* eslint-disable react/prop-types */
import User from "./User";
const Users = ({users, onRemove}) => {
  return (
    <section className='w-full h-[300px] overflow-y-auto md:mt-10'>
      <div className=''>
        {users.map((user) => {
          return <User key={user.id} user={user} onRemove={onRemove} />;
        })}
      </div>
    </section>
  );
};

export default Users;
