import { useQuery } from "@tanstack/react-query";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const { refetch, data: popularClasses = [] } = useQuery({
    queryKey: ["popularClasses"],

    queryFn: async () => {
      const res = await fetch("http://localhost:5000/popularClasses");
      return res.json();
    },
  });

  return (
    <div>
           <h2 className='text-4xl font-bold text-center'>Our Popular Classes</h2>
            <p className='font-semibold text-center m-2 pb-5'>Find Your Game With Real Champions Academy</p>
      <div className=' '>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-[1140px] mx-auto p-10'>
          {popularClasses.map((cls, index) => (
            <PopularClassesCard key={index} cls={cls}></PopularClassesCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularClasses;
