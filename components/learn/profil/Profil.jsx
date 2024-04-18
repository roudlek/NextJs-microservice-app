import Avatar from "./avatar/Avatar";
import AvatarCard from "./avatarCard/AvatarCard";
import AvatarDescription from "./avatarDescription/AvatarDescription";
import InterestsCard from "./avatarInterests/AvatarInterestsCard";

export default function Profil() {

// hooks here 


  return (
    <>
      <AvatarCard>
        {/* To put an object in jsx, we use {{ object here}} json*/}
        <Avatar 
          size={100}
          person={{
            name: "Katsuko Saruhashi",
            age: 58,
          }}
        />
        <AvatarDescription
          props={{
            hobbie: ["drawing", "gardening"],
            sport: ["Swimming", "Chess"],
          }}
        />
        {/* using props you give is not a very good idea, as it can lead to conflicts and not detected by ide */}
        <InterestsCard />
      </AvatarCard>
    </>
  );
}
