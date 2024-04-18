// eslint-disable-next-line react/prop-types
export default function Avatar({ person, size = 100 }) {
    // person and size are available here
  
    return (
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-60 mx-auto text-center">
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <div className="font-bold text-lg mb-2">Person Data:</div>
        <div className="font-bold text-lg mb-2">Name:</div>
        {/* eslint-disable-next-line react/prop-types */}
        <div className="text-gray-800">{person.name}</div>
        <div className="mt-4 font-bold text-lg mb-2">age:</div>
        {/* eslint-disable-next-line react/prop-types */}
        <div className="text-gray-800">{person.age}</div>
        <div className="mt-4 font-bold text-lg mb-2">size:</div>
        <div className="text-gray-800">{size}</div>
        </div>
      </div>
    );
  }
  