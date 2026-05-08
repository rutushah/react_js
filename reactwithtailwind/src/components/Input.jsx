export const Input = ({ onClick, type, placeholder }) => {
  return (
    <span
      onClick={onClick}
      className="rounded-xl text-xl px-2 py-2 text-white cursor-pointer" >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-blue-200 outline-none p-2 rounded-xl text-black"
      />
    </span>
  );
};