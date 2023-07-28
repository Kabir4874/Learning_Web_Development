const Button = ({ text }) => {
  return (
    <button className=" w-fit bg-primary-color py-3 px-6 rounded-full uppercase text-white text-sm font-bold hover:text-primary-color hover:bg-white transition-all ease-in-out duration-300">
      {text}
    </button>
  );
};

export default Button;
