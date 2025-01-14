import { Outlet } from 'react-router-dom';

const App = () => {


  return (
    <div className='flex justify-center bg-white dark:bg-[#265753] text-stone-900 dark:text-white'>
      <div className='lg:w-[70%] w-full h-screen md:h-auto'>
        <div className='h-auto'>
          <Outlet />
        </div>
     </div>
    </div>
  );
};

export default App;
