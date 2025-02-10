import { useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({post}) {
    const {delete: destroy} = useForm();
    const route = useRoute();

    function submit(e){
        e.preventDefault();
        destroy(route('posts.destroy', post));
    }
    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-gray-500">
                                <span>Post created on: </span>
                                <span>
                                    {new Date(post.created_at).toLocaleTimeString()}
                                </span>
                            </div>
                            <h2 className="font-bold">{post.title}</h2>
                            <p>{post.content}</p>

                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={submit}>
                        <button className="bg-red-500 rounded-md text-sm px-5 py-2 text-white">Delete</button>
                    </form>
                </div>
            </div>
        </>
    );
}
