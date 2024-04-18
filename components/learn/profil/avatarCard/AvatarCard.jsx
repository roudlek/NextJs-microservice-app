export default function AvatarCard({children}){

    // this allow you to add components inside component 
    return(
        <>
        <div className="bg-primary-darkCyan p-10 mx-auto w-fit my-10 rounded-lg shadow-2xl">
            {children}
        </div>

        </>
    )
}