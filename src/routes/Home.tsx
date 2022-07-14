import '../App.scss'
const HomeRoute: React.FC<{}> = ({ }) => {

  return(
    <section className="w-11/12 mx-auto py-10">
      <div className='grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1'>
        <div className='py-4 bg-nav text-yellow-500 px-3 rounded-md cursor-pointer'>details1</div>
        <div  className='py-4 bg-nav text-yellow-500 px-3 rounded-md cursor-pointer'>details2</div>
        <div  className='py-4 bg-nav text-yellow-500 px-3 rounded-md cursor-pointer'>details3</div>
      </div>
      </section>
  );
}

export default HomeRoute;