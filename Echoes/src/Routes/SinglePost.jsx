import Image from"./../Components/Image"
import { Link } from "react-router-dom"
import PostMenuActions from "./../Components/PostMenuActions"
import Search from "../Components/Search"
const SinglePost = () => {
  return (
    // outer wrapper
    <div className="flex flex-col gap-8">
      {/* details titles images wrapper*/}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">

          {/* title */}
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>

          {/* details */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-teal-700">John Doe</Link>
            <span>on</span>
            <Link className="text-teal-700">Web Design</Link>
            <span>2 Days ago</span>
          </div>
          {/* description */}
          <p className="text-gray-500 font-bold">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quidem nesciunt modi eos repellat molestiae provident optio
            in nisi pariatur! Similique amet libero ut quibusdam quod
            labore accusamus quia nesciunt quos.
          </p>
        </div>

        {/* image */}
        <div className="hidden lg:block w-2/5">
          <Image src='postImg.jpeg' w='600' className='rounded-3xl'/>
        </div>

      </div>

      {/* content */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* text */}
        <div className="lg:text-md flex flex-col gap-6 text-justify">
          {/* para1 */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, alias! Consectetur quos minus sapiente laborum dolorum veritatis dolorem debitis rerum odit, nihil mollitia repellat error nisi ut excepturi quod! Corporis.
            Repellat aliquam officiis aut maiores accusantium eos qui unde consectetur quaerat esse culpa doloremque, ad explicabo distinctio ratione velit enim dolore architecto, atque animi? Accusamus aliquid quam perspiciatis laboriosam aperiam.
            Quibusdam fuga veniam mollitia maxime perferendis distinctio laborum, nam incidunt necessitatibus saepe nobis vero magni similique molestiae perspiciatis rem ipsam magnam pariatur id? Quidem iste exercitationem similique, doloremque consectetur veritatis?
            Nihil quia porro voluptatibus debitis commodi sunt placeat pariatur, in ipsam voluptas unde, aut minima cupiditate facere nobis sit voluptatem? Hic repellendus temporibus dolor accusamus voluptatum rem suscipit qui quis.
            A delectus dicta iure et odio esse nostrum, animi ex vel provident quos enim mollitia non beatae odit totam est magnam sit voluptatum incidunt consectetur reiciendis distinctio maiores velit? Culpa.
          </p>
          {/* para2 */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ut eaque et rerum sunt facilis impedit laudantium aperiam, non mollitia saepe voluptatibus adipisci expedita earum magni numquam accusamus necessitatibus maxime.
            Veritatis error illum iusto quod, unde blanditiis et assumenda rerum saepe esse incidunt quae cupiditate quibusdam est debitis perferendis animi corporis mollitia tenetur? Expedita magnam unde culpa maxime laborum qui.
            Suscipit corrupti blanditiis reprehenderit ad molestiae ullam repudiandae quae minus a expedita provident nobis, dolorem ducimus dolores, magnam totam! Nobis tempora placeat voluptatem ullam nam perspiciatis architecto exercitationem. At, nesciunt!
            Minus, voluptate eligendi eaque deserunt reprehenderit aliquid, mollitia, non voluptatem laborum perferendis animi rem accusamus velit hic quia asperiores qui officia ex iste recusandae in rerum. Ipsa repellendus dolores cupiditate.
            Ipsum asperiores aut laudantium veritatis totam cumque velit impedit error voluptatibus a eaque blanditiis illum sapiente minus fugiat porro unde officiis adipisci, quasi voluptates odio optio quos. Dolore, iste impedit!
          </p>
          {/* para3 */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ut eaque et rerum sunt facilis impedit laudantium aperiam, non mollitia saepe voluptatibus adipisci expedita earum magni numquam accusamus necessitatibus maxime.
            Veritatis error illum iusto quod, unde blanditiis et assumenda rerum saepe esse incidunt quae cupiditate quibusdam est debitis perferendis animi corporis mollitia tenetur? Expedita magnam unde culpa maxime laborum qui.
            Suscipit corrupti blanditiis reprehenderit ad molestiae ullam repudiandae quae minus a expedita provident nobis, dolorem ducimus dolores, magnam totam! Nobis tempora placeat voluptatem ullam nam perspiciatis architecto exercitationem. At, nesciunt!
            Minus, voluptate eligendi eaque deserunt reprehenderit aliquid, mollitia, non voluptatem laborum perferendis animi rem accusamus velit hic quia asperiores qui officia ex iste recusandae in rerum. Ipsa repellendus dolores cupiditate.
            Ipsum asperiores aut laudantium veritatis totam cumque velit impedit error voluptatibus a eaque blanditiis illum sapiente minus fugiat porro unde officiis adipisci, quasi voluptates odio optio quos. Dolore, iste impedit!
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          {/* author details */}
          <h1 className="mb-4 font-bold text-gray-900">Author</h1>
          <div className="flex flex-col gap-4">
          <div className="flex items-center gap-8">
            <Image src='userImg.jpeg' className='w-12 h-12 rounded-full object-cover' w='48' h='48'/>
            <Link className="text-teal-700">John Doe</Link>
          </div>
          <p className="text-gray-600 text-sm">Lorem ipsum, dolor sit amet</p>
          <div className="flex gap-2">
            <Link>
              <Image src='facebook.svg'/>
            </Link>
            <Link>
              <Image src='instagram.svg'/>
            </Link>
          </div>
        </div>
        <PostMenuActions/>
        <h1 className="text-gray-900 font-bold mt-8 mb-4">Categories</h1>
        <div className="flex flex-col gap-2 text-sm text-teal-700">
        <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
        </div>
        <h1 className="text-gray-900 font-bold mt-8 mb-4">Search</h1>
        <Search/>
        </div>
      </div>
    </div>
  )
}

export default SinglePost
