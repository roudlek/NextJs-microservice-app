export default function LongCard() {
  return (
    <div class="max-w-md mx-auto my-6 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img
            class="h-48 w-full object-cover md:h-full md:w-48"
            src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80"
            alt="Man looking at item at a store"
          ></img>
        </div>
        <div class="p-8">
          <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <a
            href="#"
            class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Finding customers for your new business
          </a>
          <p class="mt-2 text-gray-500">Hello everyone, سلام عليكم</p>
        </div>
      </div>
    </div>
  );
}
