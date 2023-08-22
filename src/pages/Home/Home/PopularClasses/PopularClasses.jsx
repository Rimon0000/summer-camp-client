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
          <div className='mx-auto text-center md:w-4/12 my-8'>
            <h2 className='text-3xl font-semibold uppercase py-3'>
              Our Popular Classes
            </h2>
            <p>Find Your Game With Real Champions Academy.</p>
          </div>
          <div className='grid md:grid-cols-3 gap-5 my-5'>
            {popularClasses.map((cls, index) => (
              <PopularClassesCard key={index} cls={cls}></PopularClassesCard>
            ))}
          </div>
    </div>
  );
};

export default PopularClasses;
