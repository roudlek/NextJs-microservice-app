const people = [
  {
    name: 'Calvin Hawkins',
    email: 'calvin.hawkins@example.com',
    image:
      'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Kristen Ramos',
    email: 'kristen.ramos@example.com',
    image: 'https://images.freeimages.com/variants/59tZ1h89y8fuRnBcqUuUjEWo/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d',

  },
  {
    name: 'Ted Fox',
    email: 'ted.fox@example.com',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

import Navbar from "components/Navbar/Navbar"
import Image from "next/image"

export default function Listofpeople(){
  return (
    <>
    <Navbar/>
    <h1 className="text-3xl font-bold underline">Hello, Next.js with Tailwinds!</h1>
    <ul className="divide-y divide-gray-200 ">
      {people.map((person) => (
        <li key={person.email} className="py-4 flex">
          <Image 
            src={person.image}
            width={144}
            height={144}
            alt="my name"
          />
          {/* <img className="h-10 w-10 rounded-full" src={person.image} alt="" /> */}
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{person.name}</p>
            <p className="text-sm text-gray-500">{person.email}</p>
          </div>
        </li>
      ))}
    </ul>
    </>  
    )
}