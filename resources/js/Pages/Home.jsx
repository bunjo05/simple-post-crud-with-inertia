import { Link, usePage } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy"
import { useState } from "react";

export default function Home({posts}) {
    const route = useRoute()
    const {flash} = usePage().props

    const [flashMsg, setFlashMsg] = useState(flash.message)

    setTimeout(() => {
        setFlashMsg(null)
    }, 2000);
    // console.log(usePage());
    // console.log(posts)
    return (
        <>
            <h1 className="title">Hello {name}</h1>
        {flashMsg && <div className="bg-green-500 text-center italic text-white px-4 py-2 rounded-lg mx-auto ">{flashMsg}</div>}
            <div>
                {posts.data.map((post) => (
                    <div key={post.id} className="p-4 border-b">
                        <div className="text-sm text-gray-500">
                            <span>Post created on: </span>
                            <span>
                                {new Date(post.created_at).toLocaleTimeString()}
                            </span>
                        </div>
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.content}</p>
                        {/* <Link href={`/posts/${post.id}`} className="text-link">Read More...</Link> */}
                        <Link href={route('posts.show', post)} className="text-link">Read More...</Link>
                    </div>
                ))}
            </div>
            <div className="py-12 px-4">
               {posts.links.map((link) => (
                link.url ?
                <Link className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''}`} key={link.label} href={link.url} dangerouslySetInnerHTML={{ __html: link.label }}/>
                :
                <span key={link.label} dangerouslySetInnerHTML={{ __html: link.label }} className="p-1 mx-1 text-slate-300"></span>
               ))}
            </div>
        </>
    );
}
