import { comments } from "@/lib/data";

export default function Comments() {
  return (
    <section id="comments" className="bg-slate-100 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-4xl font-black tracking-tight text-slate-950">
            Comment section
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Share your thoughts about the collection, ask about a custom finish,
            or tell us which boomerang belongs in the next drop.
          </p>

          <form className="mt-8 rounded-4xl bg-white p-5 shadow-xl shadow-slate-900/10">
            <label className="text-sm font-bold text-slate-800" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-900/10"
              placeholder="Your name"
            />
            <label
              className="mt-4 block text-sm font-bold text-slate-800"
              htmlFor="comment">
              Comment
            </label>
            <textarea
              id="comment"
              rows={5}
              className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-900/10"
              placeholder="Penny for Your Thoughts"
            />
            <button className="mt-4 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700">
              Post comment
            </button>
          </form>
        </div>

        <div className="grid gap-4 content-start">
          {comments.map((comment, i) => (
            <article
              key={i}
              className="rounded-4xl bg-white p-6 shadow-lg shadow-slate-900/10 ring-1 ring-slate-900/5">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">
                  {comment.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-black text-slate-950">{comment.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                    Verified customer
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                “{comment.text}”
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
