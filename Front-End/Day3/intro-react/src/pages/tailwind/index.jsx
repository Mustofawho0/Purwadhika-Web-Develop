export default function TestTailwind() {
  return (
    <>
      <h1 className="text-7xl text-red-600">Test Tailwind CSS</h1>
      <div className="flex justify-center items-center bg-gray-100 h-[300px]">
        <div className="bg-blue-300 w-[100px] h-[100px] hover: bg-red-300 flex justify-center items-center">
          Box-01
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-blue-300 h-[100px] flex justify-center items-center">
          Box-01
        </div>
        <div className="bg-blue-300 h-[100px] flex justify-center items-center">
          Box-02
        </div>
        <div className="bg-blue-300 h-[100px] flex justify-center items-center">
          Box-03
        </div>
        <div className="bg-blue-300 h-[100px] flex justify-center items-center">
          Box-04
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-xl text-green-500 lg:text-red-500">Responsive</h1>
      </div>
    </>
  );
}
