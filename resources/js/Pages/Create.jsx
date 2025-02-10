import { useForm } from "@inertiajs/react"

export default function Create() {
    const {data, setData, post, processing, errors} = useForm({
        'title': '',
        'content': ''
    })
    function submit(e) {
        e.preventDefault()
        post('/posts');
    }
    return (
        <>
        <h1 className="title">Create a New Post</h1>

        <div className="w-1/2 mx-auto">
            <form onSubmit={submit}>
                <div className="form-group">
                    <label>Title</label>
                    <input value={data.title} onChange={(e) => setData('title', e.target.value)} type="text" className={errors.title && '!ring-red-500'} />
                    {errors.title && <span className="text-red-500 text-sm italic">{errors.title}</span>}
                </div>

                <div className="form-group">
                    <label>Content</label>
                    <textarea value={data.content} onChange={(e) => setData('content', e.target.value)} className={errors.content && '!ring-red-500'} rows={10}></textarea>
                    {errors.content && <span className="text-red-500 text-sm italic">{errors.content}</span>}
                </div>

                <button disabled={processing} type="submit" className="primary-btn mt-4">Create Post</button>
            </form>
        </div>
        </>
    )
}
