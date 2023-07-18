const User = ({user, onRemove}) => {
  const {id, name, description} = user;
  const handleRemove = (id) => {
    // console.log(id);
    onRemove(id);
  };
  return (
    <div className='p-3 mb-4 shadow bg-slate-100'>
      <h1 className='mb-2 text-2xl font-semibold'>{name}</h1>
      <p className=''>{description}</p>
      <div className='mt-4'>
        <button onClick={() => handleRemove(id)} className='py-[5px] text-red-500 hover:bg-red-400 border border-red-400 hover:text-white transition-all duration-500  rounded-sm px-7 '>
          Remove
        </button>
      </div>
    </div>
  );
};

export default User;
