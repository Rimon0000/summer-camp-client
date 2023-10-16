import { useQuery } from "@tanstack/react-query";
import PopularClassesCard from "./PopularClassesCard";

const PopularClasses = () => {
  const { refetch, data: popularClasses = [] } = useQuery({
    queryKey: ["popularClasses"],

    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-rimon0000.vercel.app/popularClasses");
      return res.json();
    },
  });

  return (
    <div>
          <div className='mx-auto text-center my-8'>
            <h2 className='text-3xl font-semibold uppercase py-2'>
              Our Popular Classes
            </h2>
            <p>Find Your Game With Real Champions Academy.</p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 my-5 mx-auto text-center lg:mx-10'>
            {popularClasses.map((cls, index) => (
              <PopularClassesCard key={index} cls={cls}></PopularClassesCard>
            ))}
          </div>
    </div>
  );
};

export default PopularClasses;
