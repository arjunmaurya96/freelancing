/*
  BLOG — centred heading, three cards: photo on top, dark navy body with
  title and a meta row. Links go to internal /blog/… routes.
*/

import { Link } from 'react-router';
import { blog } from '@/data/homeContent';
import { photo, photoSrcSet, hideOnError } from '@/data/images';
import Icon from '@/assets/icons/Icon';

export default function BlogSection() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="blog-title">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <h2 id="blog-title" className="font-sans text-[clamp(1.6rem,3.2vw,1.9rem)] font-semibold tracking-normal !text-navy">
            {blog.titleAccent} {blog.titleRest}
          </h2>
          <p className="mt-4 text-charcoal">{blog.description}</p>
        </div>

        <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post, i) => (
            <li key={post.to} data-reveal style={{ '--d': `${i * 100}ms` }} className={i === 2 ? 'md:col-span-2 lg:col-span-1' : ''}>
              <Link to={post.to} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-navy transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgb(14_11_53/0.7)]">
                <div className="relative aspect-[16/11] overflow-hidden bg-gradient-to-br from-[#1d3c7a] to-navy">
                  <img
                    src={photo(post.image.id, 720, 495)}
                    srcSet={photoSrcSet(post.image.id, [400, 600, 800], 495 / 720)}
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                    width="720"
                    height="495"
                    alt={post.image.alt}
                    loading="lazy"
                    decoding="async"
                    onError={hideOnError}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex-1 font-sans text-[1.05rem] font-bold leading-snug tracking-normal !text-white">{post.title}</h3>
                  <p className="mt-4 flex items-center gap-3 text-xs font-semibold text-white/85">
                    <span className="flex items-center gap-1.5">
                      <span className="grid size-5 place-items-center rounded-full bg-white text-[9px] font-bold text-navy">C</span>
                      Conversions
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="layers" className="size-3.5 text-brand" />
                      {post.tag}
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1 text-brand">
                      Read More
                      <Icon name="arrow" className="size-3.5 transition-transform group-hover:translate-x-1" strokeWidth={2.4} />
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
