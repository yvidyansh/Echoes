import Image from "./Image"
import { Link } from "react-router-dom"
const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 px-4 sm:px-8 md:px-16">
        {/* image */}
        <div className="md:hidden xl:block sm:pr-4  xl:w-1/3">
            <Image src='postImg.jpeg' className='rounded-2xl object-cover'/>
        </div>
        {/* details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to='/test' className='font-semibold text-4xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Link>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>Written By</span>
                <Link className='text-teal-700'>John Doe</Link>
                <span>on</span>
                <Link className='text-teal-700'>Web Design</Link>
                <span>2 Days ago</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               At consectetur quaerat unde hic, repudiandae quidem nis.
               Accusamus ad hic vitae nostrum facere consectetur ipsum.</p>
            <Link to='test' className='text-gray-800 text-sm underline'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem
