import PublicLayout from 'components/Home/PublicLayout';
import { ReactNode } from 'react';

const Home = () => {
  return (
    <div>
      <h1 className='text-white'>Hola Mundo</h1>
    </div>
  );
};

Home.getLayout = function getLayout (page: ReactNode) {
  return (
    <>
      <PublicLayout>
        {page}
      </PublicLayout>
    </>
  );
};

export default Home;
