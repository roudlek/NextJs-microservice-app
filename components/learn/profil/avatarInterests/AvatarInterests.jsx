export default function AvatarInterestsAndActivities({interests="none", activities="none"}){

    return(
        <>
            <div className="font-bold text-lg mb-2">Interests:</div>        
            <div className="text-gray-800">{interests}</div>        
            
            <div className="font-bold text-lg mb-2">Activities:</div>        
            <div className="text-gray-800">{activities}</div>        
        </>
    )
}