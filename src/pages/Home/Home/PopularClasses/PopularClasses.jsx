import { useQuery } from "@tanstack/react-query";
import PopularClassesCard from "./PopularClassesCard";
import { Typewriter } from "react-simple-typewriter";


const PopularClasses = () => {
  const { refetch, data: popularClasses = [] } = useQuery({
    queryKey: ["popularClasses"],

    queryFn: async () => {
      const res = await fetch("https://summer-camp-server-rimon0000.vercel.app/popularClasses");
      return res.json();
    },
  });

  return (
    <div className="my-20">
          <div className='mx-auto text-center my-8 space-y-1'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              <Typewriter
                cursor
                cursorStyle="|"
                typeSpeed={70}
                delaySpeed={1000}
                words={["Our Top-Rated Courses", "Our Popular Classes"]}
                className="font-heading "
              ></Typewriter>
            </h2>
            <p className="text-sm w-full md:w-3/4 lg:w-9/12 mx-auto text-slate-600">Unlock your potential with Real Champions Academy. Our expert coaches and personalized programs will help you elevate your game and reach new heights. Train like a champion and achieve your goals!</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {popularClasses.map((cls, index) => (
              <PopularClassesCard key={index} cls={cls}></PopularClassesCard>
            ))}
          </div>
    </div>
  );
};

export default PopularClasses;
