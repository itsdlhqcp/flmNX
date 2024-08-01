
// import Shimmer from './Shimmer';
// import SkeletonElement from './SkeletonElement'

// const  SkeletonCard =() =>  {

//   return (
   
//     <div className="skeleton-wrapper">

//         <div className="skeleton-story">
//             <SkeletonElement type="thumbnail"/>
//             <SkeletonElement type="Title"/>
//             <SkeletonElement type="text"/>
//             <SkeletonElement type="text"/>
//             <SkeletonElement type="text"/>
//         </div>
//         <Shimmer/>
//     </div>
    
//   )
// }

// export default SkeletonCard



import Shimmer from './Shimmer';
import SkeletonElement from './SkeletonElement';

const SkeletonCard = () => {
  return (
    <div className="relative flex p-2 max-w-screen-xl w-full mt-2 space-x-3 bg-stone-300 rounded-t-lg border-4 border-stone-200 border-x-stone-500 ...">
      {/* Left */}
      <div className="w-[100%] h-[200px] flex justify-center items-center">
        <SkeletonElement type="thumbnail" />
      </div>
      {/* Right */}
      <div className="flex flex-col w-[100%]">
        <div>
          <div >
            <SkeletonElement type="Title" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="text" />
            <SkeletonElement type="cat" /> 
          </div>
          <Shimmer />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
