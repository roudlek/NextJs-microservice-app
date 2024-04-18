// using props
export default function AvatarDescription({ props }) {
  let { hobbie, sport } = props;
  return (
    <>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-60 mx-auto mt-20 text-center">
        <div className="bg-gray-100 p-4 rounded-md shadow-md">
          <div className="font-bold text-lg mb-2">Hobbies:</div>
          {hobbie.map((oneHobbie) => {
            return <div className="text-gray-800">{oneHobbie}</div>;
          })}

          <div className="mt-4 font-bold text-lg mb-2">Favorite Sport:</div>
          {sport.map((oneSport) => {
            return <div className="text-gray-800">{oneSport}</div>;
          })}
        </div>
      </div>
    </>
  );
}
