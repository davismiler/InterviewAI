// app/loading.tsx
import Loader from '@/components/Loader';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-20 flex items-center  justify-center">
          <div className="  rounded-lg flex flex-col items-center">
            <div className=" border-t-transparent rounded-full z-20 "></div>
             <Loader /> 
          </div>
        </div>
  );
}
