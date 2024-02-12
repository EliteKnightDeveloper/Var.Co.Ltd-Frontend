import Typograph from '@/components/Typograph/Typograph';

const Custom404 = () => {
  return (
    <div className='flex flex-row items-center justify-center h-screen bg-banner'>
      <Typograph
        content={'Coming Soon...'}
        style='text-accent xl:text-9xl lg:text-5xl md:text-4xl sm:text-3xl max-sm:text-3xl'
      />
    </div>
  );
};

export default Custom404;
