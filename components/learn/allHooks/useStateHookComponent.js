const { useState } = require("react");


function UseStateHookComponent() {
    const [likes, setLikes] = useState(765);
    const [isClicked, setIsClick] = useState(false);

    function addOneLike() {
        if (isClicked === false) {
            setLikes(likes + 1);
            setIsClick(true);
        } else {
            setLikes(likes - 1);
            setIsClick(false);
        }
    }

    return (
        <>
            <button className="w-20 bg-red-700 rounded ml-56" onClick={addOneLike}>
                likes: {likes}
            </button>
        </>
    );
}

export default UseStateHookComponent;



