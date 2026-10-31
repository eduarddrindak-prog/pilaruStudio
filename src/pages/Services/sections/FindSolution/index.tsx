import { motion } from "framer-motion";

import SectionContainer from "@/components/ui/SectionContainer";
import Button from "@/components/ui/Button";

import { fadeLeft } from "@/lib/animations";

import {
  Rocket,
  TrendingUp,
  Building2,
} from "lucide-react";

export default function FindSolution() {
  return (
    <section className="py-section bg-background">
      <SectionContainer
        className="
          max-w-[1500px]
          flex
          flex-col
        "
      >
        <motion.div
          {...fadeLeft}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] notranslate text-[#4F8EF7]">
            Find Your Solution
          </p>

          <h2
  className="
    mt-5
    max-w-4xl
    text-5xl
    lg:text-7xl
    font-semibold
    leading-[1]
    tracking-tight
  "
>
            Not sure which
            <br />
            website you need?
          </h2>

          <p
            className="
  mt-10
  max-w-3xl
  text-xl
  leading-9
  text-secondary-text
"
          >
            Every business is different. Answer a few simple questions and
            we'll recommend the website solution that best matches your goals,
            budget and stage of growth.
          </p>
        </motion.div>
        <div className="mt-20 grid gap-6 lg:grid-cols-3 max-[767px]:hidden">
  <div
    className="
      rounded-3xl
      border border-white/8
      bg-white/[0.015]
      p-8
      shadow-[0_30px_80px_rgba(0,0,0,.35)]
      backdrop-blur-[2px]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#4F8EF7]/30
    "
  >
    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F8EF7]/10">
  <Rocket className="h-7 w-7 notranslate text-[#4F8EF7]" />
</div>

<p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] notranslate text-[#4F8EF7]">
  For Startups
</p>

    <h3 className="text-2xl font-semibold">
      Just Starting
    </h3>

    <p className="mt-4 text-secondary-text leading-7">
      Perfect for startups and personal brands that need a
      professional online presence quickly.
    </p>

    <Button variant="secondary" size="sm" className="mt-8">
  Learn more
  <span>→</span>
</Button>
  </div>

  <div
    className="
      rounded-3xl
      border border-white/8
      bg-white/[0.015]
      p-8
      shadow-[0_30px_80px_rgba(0,0,0,.35)]
      backdrop-blur-[2px]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#4F8EF7]/30
    "
  >
    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F8EF7]/10">
  <TrendingUp className="h-7 w-7 notranslate text-[#4F8EF7]" />
</div>

<p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] notranslate text-[#4F8EF7]">
  For Business
</p>

    <h3 className="text-2xl font-semibold">
      Growing Business
    </h3>

    <p className="mt-4 text-secondary-text leading-7">
      Need more leads, stronger branding and better conversion?
      This option is built for scaling companies.
    </p>
    <Button variant="secondary" size="sm" className="mt-8">
  Learn more
  <span>→</span>
</Button>
  </div>

  <div
    className="
      rounded-3xl
      border border-white/8
      bg-white/[0.015]
      p-8
      shadow-[0_30px_80px_rgba(0,0,0,.35)]
      backdrop-blur-[2px]
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#4F8EF7]/30
    "
  >
    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4F8EF7]/10">
  <Building2 className="h-7 w-7 notranslate text-[#4F8EF7]" />

  
</div>

<p className="mb-3 text-xs font-medium uppercase tracking-[0.25em] notranslate text-[#4F8EF7]">
  For Enterprise
</p>

    <h3 className="text-2xl font-semibold">
      Established Company
    </h3>

    <p className="mt-4 text-secondary-text leading-7">
      Enterprise-grade websites designed for larger businesses,
      advanced features and long-term growth.
    </p>
    <Button variant="secondary" size="sm" className="mt-8">
  Learn more
  <span>→</span>
</Button>
</div>
        </div>

        <div className="mt-12 hidden divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/[0.02] px-5 max-[767px]:block">
          <article className="py-5 first:pt-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">Just Starting</h3>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#4F8EF7]">For Startups</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-secondary-text">
              Perfect for startups and personal brands that need a professional online presence quickly.
            </p>
          </article>

          <article className="py-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">Growing Business</h3>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#4F8EF7]">For Business</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-secondary-text">
              Need more leads, stronger branding and better conversion? This option is built for scaling companies.
            </p>
          </article>

          <article className="py-5">
            <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
              <h3 className="text-lg font-semibold">Established Company</h3>
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#4F8EF7]">For Enterprise</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-secondary-text">
              Enterprise-grade websites designed for larger businesses, advanced features and long-term growth.
            </p>
          </article>
        </div>

<div
  className="
    group
    relative
    mt-24
    overflow-hidden
    rounded-[36px]
    border border-white/8
    bg-gradient-to-r
    from-[#111827]
    to-[#0E162A]
    p-10
    lg:p-14

    shadow-[0_30px_80px_rgba(0,0,0,.35)]

    transition-all
    duration-500

    hover:-translate-y-1
    hover:border-[#4F8EF7]/35
    hover:shadow-[0_0_70px_rgba(79,142,247,.08)]
  "
>
  <div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-0
    h-56
    w-[600px]
    -translate-x-1/2

    rounded-full

    bg-[#4F8EF7]/10
    blur-[140px]

    opacity-0
    transition-opacity
    duration-500

    group-hover:opacity-100
  "
/>
  <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
    <div className="max-w-2xl">
      <p
  className="
    text-sm
    uppercase
    tracking-[0.3em]
    notranslate text-[#4F8EF7]

    transition-all
    duration-300

    group-hover:tracking-[0.4em]
  "
>
        Free Consultation
      </p>

      <h3
  className="
    mt-4
    text-4xl
    lg:text-5xl
    font-semibold
    leading-tight

    transition-all
    duration-300

    group-hover:-translate-y-1
  "
>
        Still not sure?
        <br />
        Let's find the perfect solution together.
      </h3>

      <p
  className="
    mt-6
    text-lg
    leading-8
    text-secondary-text

    transition-colors
    duration-300

    group-hover:text-primary-text
  "
>
        In a free 30-minute consultation we'll understand your goals,
        recommend the best type of website and answer all your questions.
      </p>
    </div>

    <div
  className="
    transition-transform
    duration-300

    group-hover:scale-[1.04]
  "
>
  <Button
  href="/contact"
  size="lg"
  rounded="full"
  withArrow
  className="max-[767px]:px-5 max-[767px]:py-3 max-[767px]:text-sm"
>
  Book Free Consultation
</Button>
</div>
  </div>
</div>
      </SectionContainer>
    </section>
  );
}
