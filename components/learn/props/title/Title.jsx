// import { checkPropTypes } from "prop-types"

export default function Title({text}){
    return(
        <>
            <h1 className="text-white text-5xl">{text ? text : "default Title"}</h1>
        </>
    )

}
// Title.propTypes = {
//     text: checkPropTypes.string.isRequired
//   }