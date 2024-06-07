export const BlogSkeleton = () => {
  return (
    <div className="w-600 flex items-center justify-between border-b border-gray-200 cursor-pointer animate-pulse mt-8">
      <div className="h-60 flex flex-col justify-between">
        <div className="w-470">
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-300"></div>
            <div className="w-24 h-6 bg-gray-300 rounded"></div>
            <div className="w-20 h-6 bg-gray-300 rounded"></div>
            <div className="w-16 h-6 bg-gray-300 rounded"></div>
          </div>
          <div className="h-36 mt-4">
            <div className="w-full h-8 bg-gray-300 rounded"></div>
            <div className="w-full h-6 bg-gray-300 rounded mt-2"></div>
            <div className="w-full h-6 bg-gray-300 rounded mt-2"></div>
          </div>
        </div>
        <div className="flex justify-between w-470 mb-5 items-center">
          <div className="flex gap-2">
            <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-12 h-6 bg-gray-300 rounded-full"></div>
          </div>
          <div className="flex gap-3">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-28 h-28 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};
