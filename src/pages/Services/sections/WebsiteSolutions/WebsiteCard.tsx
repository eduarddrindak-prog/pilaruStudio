import { ArrowRight } from "lucide-react";

interface Props {
  website: {
    badge: string;
    title: string;
    description: string;
    bestFor: string;
    idealFor: string[];
    complexity: number;
    duration: string;
    price: string;
  };
}

export default function WebsiteCard({ website }: Props) {
  return (
    <article
      className="
        group
        relative
        overflow-hidden

        flex
        min-h-[760px]
        max-[1020px]:min-h-0
        flex-col

        rounded-3xl
        border
        border-border

        bg-surface
        backdrop-blur-[2px]

        p-8
        max-[639px]:p-6

        transition-all
        duration-300

        hover:-translate-y-1.5
        hover:border-[#4F8EF7]/50
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0
            h-56
            w-56
            -translate-x-1/2
            rounded-full
            bg-[#4F8EF7]/5
            blur-3xl
          "
        />
      </div>

      {/* Top Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          origin-left
          scale-x-0
          bg-[#4F8EF7]
          transition-transform
          duration-300
          group-hover:scale-x-100
        "
      />

      {/* Badge */}
      <div className="max-[639px]:hidden">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-border
bg-surface
            px-3
            py-1.5

            text-[10px]
            max-[639px]:text-[9px]
            font-medium
            uppercase
            tracking-[0.22em]

            text-secondary-text

            transition-transform
            duration-300

            group-hover:scale-105
          "
        >
          {website.badge}
        </span>
      </div>

      {/* Title */}
      <h3
        className="
          mt-6
          text-3xl
          max-[639px]:text-2xl
          font-semibold
          tracking-tight

          transition-transform
          duration-300

          group-hover:translate-x-0.5
        "
      >
        {website.title}
      </h3>

      <p
  className="
    mt-5
    leading-7
    max-[639px]:mt-4
    max-[639px]:text-sm
    max-[639px]:leading-6
    text-secondary-text
  "
>
  {website.description}
</p>

<div
  className="
    my-8
    h-px
    origin-left
    scale-x-0
    bg-border
    transition-transform
    duration-300
    group-hover:scale-x-100
    max-[639px]:my-6

  "
/>

<div className="max-[1020px]:hidden">
  <p
    className="
      text-xs
      uppercase
      tracking-[0.18em]
      text-secondary-text
    "
  >
    Best for
  </p>

  <p
    className="
      mt-3
      text-lg
      font-medium
    "
  >
    {website.bestFor}
  </p>
</div>

<div
  className="
    my-8
    h-px
    origin-left
    scale-x-0
    bg-border
    transition-transform
    duration-300
    group-hover:scale-x-100

    max-[1020px]:hidden
  "
/>

<div
  className="
    max-[1020px]:flex
    max-[1020px]:flex-col
  "
>
  <p
    className="
      text-xs
      uppercase
      tracking-[0.18em]
      text-secondary-text
    "
  >
    Ideal for
  </p>

  <ul
  className="
    mt-4
    space-y-3

    max-[1020px]:mt-5
    max-[1020px]:flex
    max-[1020px]:flex-wrap
    max-[1020px]:gap-x-10
    max-[1020px]:gap-y-3
    max-[1020px]:space-y-0
    max-[639px]:grid
    max-[639px]:grid-cols-2
    max-[639px]:gap-x-4
    max-[639px]:gap-y-3
  "
>
    {website.idealFor.map((item) => (
      <li
        key={item}
        className="
          flex
          items-center
          gap-3
          text-sm
          max-[639px]:text-[13px]
          text-secondary-text
          transition-colors
          duration-300
          group-hover:text-primary-text
        "
      >
        <span className="notranslate text-[#4F8EF7]">✓</span>

        {item}
      </li>
    ))}
  </ul>
</div>

<div
  className="
    hidden

    max-[1020px]:block
    max-[1020px]:my-6
    max-[1020px]:h-px
    max-[639px]:hidden

    bg-border

    origin-left
    scale-x-0
    transition-transform
    duration-300
    delay-100

    group-hover:scale-x-100
  "
/>

<div
  className="
    mt-8
    grid
    grid-cols-2
    gap-8
    max-[639px]:hidden
  "
>
  <div>
    <p
      className="
        text-xs
        uppercase
        tracking-[0.18em]
        text-secondary-text
      "
    >
      Delivery
    </p>

    <p className="mt-2 text-lg font-medium">
      {website.duration}
    </p>
  </div>

  <div>
    <p
      className="
        text-xs
        uppercase
        tracking-[0.18em]
        text-secondary-text
      "
    >
      Complexity
    </p>

    <div className="mt-4 flex gap-2">
      {[1,2,3].map((dot)=>(
        <div
          key={dot}
          className={`h-3 w-3 rounded-full ${
            dot <= website.complexity
              ? "bg-[#4F8EF7]"
              : "bg-border"
          }`}
        />
      ))}
    </div>
  </div>
</div>

<div
  className="
    my-6
    h-px
    origin-left
    scale-x-0
    bg-border
    transition-transform
    duration-300
    delay-150
    group-hover:scale-x-100
    max-[639px]:hidden
  "
/>



      {/* Placeholder */}
      <div className="mt-auto">
        <div
  className="
    my-6

    flex
    items-center
    justify-between

    max-[1020px]:mt-10
  "
>
          <div>
            <p className="text-sm text-secondary-text max-[639px]:hidden">
              Starting from
            </p>

            <p
              className="
                mt-2
                text-3xl
                max-[639px]:text-2xl
                font-semibold

                transition-colors
                duration-300

                group-hover:text-primary-text
              "
            >
              {website.price}
            </p>
          </div>

          <div
            className="
              flex
              items-center
              gap-2

              text-sm
              max-[639px]:text-xs
              font-medium

              transition-all
              duration-300
            "
          >
            Explore Solution

            <ArrowRight
              className="
                h-4
                w-4

                transition-all
                duration-300

                group-hover:translate-x-1
                group-hover:-rotate-12
              "
            />
          </div>
        </div>
      </div>
    </article>
  );
}
