
export default function ChitchatButton(){
    return(
        <div class="m-10 p-10 max-w-sm mx-auto bg-white rounded-xl shadow-2xl flex items-center space-x-4">
                <div class="flex-shrink-0">
                    <img class="h-12 w-12" src="/favicon.ico" alt="ChitChat Logo"></img>
                </div>
            <div>
            <div class="text-3xl font-medium text-black">ChitChat</div>
                <p class="text-gray-500">You have a new message!</p>
            </div>
        </div>
    )
}