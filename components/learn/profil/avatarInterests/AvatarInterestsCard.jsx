import AvatarInterestsAndActivities from "./AvatarInterests";

export default function InterestsCard(){

    return(
        <>
      <div className="bg-gray-200 p-4 rounded-lg shadow-md w-60 mx-auto mt-20 text-center">
        <div className="bg-gray-100 p-4 rounded-md shadow-md">

                <AvatarInterestsAndActivities interests="eating" activities="chess" />

            </div>
            </div>
        </>
    )
}