import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Monitor, Smartphone, Tablet } from "lucide-react";

import Button from "@/components/ui/Button";
import SectionContainer from "@/components/ui/SectionContainer";
import lenoirPreview from "@/projects/Lenoir/assets/maison-lenoir-hero.jpg";

import { fadeLeft, fadeRight } from "@/lib/animations";
import { heroContent} from "../../content";

import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [previewDevice, setPreviewDevice] = useState<"Desktop" | "Tablet" | "Mobile">("Desktop");

  const deviceOptions = [
    { label: "Desktop" as const, Icon: Monitor },
    { label: "Tablet" as const, Icon: Tablet },
    { label: "Mobile" as const, Icon: Smartphone },
  ];
  return (
    <section className="min-h-screen flex items-center bg-background text-primary-text py-12 lg:py-0">
      <SectionContainer
  className="
    max-w-[1500px]
    flex
    flex-col
    lg:flex-row
    items-center

    gap-24

    max-[1020px]:text-center
    max-[1020px]:gap-16
  "
>
        {/* LEFT */}

        <motion.div
          {...fadeLeft}
          className="
  w-full
  lg:w-[48%]

  max-[1020px]:flex
  max-[1020px]:flex-col
  max-[1020px]:items-center
"
        >
          <p className="text-sm uppercase tracking-[0.3em] notranslate text-[#4F8EF7]">
            {heroContent.badge}
          </p>

          <h1
            className="
              mt-5
              text-5xl
              max-[1020px]:text-center
              lg:text-[5.2rem]
              font-semibold
              leading-[0.95]
              tracking-tight
              whitespace-pre-line
            "
          >
            {heroContent.title}
          </h1>

          <p
            className="
              mt-10
              max-w-2xl
              max-[1020px]:mx-auto
              text-xl
              leading-relaxed
              text-secondary-text
            "
          >
            {heroContent.description}
          </p>

          <div
  className="
    mt-10
    max-[1020px]:flex
    max-[1020px]:justify-center
  "
>
            <Button
  variant="primary"
  withArrow
  onClick={() => navigate("/contact")}
>
  {heroContent.button}
</Button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          {...fadeRight}
          className="w-full lg:w-[55%] lg:pt-8 max-[1020px]:max-w-[760px] max-[639px]:hidden"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B0F14] p-3 shadow-[0_30px_80px_rgba(0,0,0,.35)] transition-transform duration-300 hover:-translate-y-1 sm:p-4">
            <div className="flex items-center justify-between px-1 pb-3 sm:px-2">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6259]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffc344]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#32c86e]" />
              </div>
              <span className="text-[10px] uppercase tracking-[0.12em] text-secondary-text sm:text-xs">
                Live preview
              </span>
            </div>

            <div className={`overflow-hidden rounded-xl bg-[#f1eee7] text-[#252522] transition-all duration-500 ${previewDevice === "Mobile" ? "mx-auto w-[54%] min-w-[210px] max-w-[280px] rounded-[1.5rem] border-[5px] border-[#222832]" : previewDevice === "Tablet" ? "mx-auto w-[82%] max-w-[560px] rounded-2xl" : "w-full rounded-xl"}`}>
              <div className={`flex items-center justify-between border-b border-black/10 ${previewDevice === "Mobile" ? "px-3 py-3" : "px-4 py-3 sm:px-5 sm:py-4"}`}>
                <span className={`${previewDevice === "Mobile" ? "text-[10px]" : "text-xs sm:text-sm"} font-semibold tracking-wide`}>MAISON LENOIR</span>
                {previewDevice === "Mobile" ? (
                  <span className="flex h-6 w-6 flex-col items-center justify-center gap-1 rounded-full bg-black/5" aria-label="Open menu">
                    <span className="h-px w-3 bg-current" />
                    <span className="h-px w-3 bg-current" />
                  </span>
                ) : (
                  <div className={`flex uppercase tracking-wide text-black/60 ${previewDevice === "Tablet" ? "gap-3 text-[9px]" : "gap-3 text-[9px] sm:gap-5 sm:text-[10px]"}`}>
                    <span>Home</span><span>Products</span><span>Find us</span>
                  </div>
                )}
              </div>

              <div className={`${previewDevice === "Mobile" ? "p-3" : previewDevice === "Tablet" ? "p-4" : "p-4 sm:p-6"}`}>
                <h2 className={`${previewDevice === "Mobile" ? "text-base" : previewDevice === "Tablet" ? "text-2xl" : "text-xl sm:text-3xl"} font-medium leading-tight tracking-tight`}>Good bread, simply.</h2>
                <p className={`mt-2 text-black/60 ${previewDevice === "Mobile" ? "text-[9px] leading-4" : previewDevice === "Tablet" ? "text-xs" : "text-[11px] sm:text-sm"}`}>Fresh bread, pastries and a place in the neighbourhood.</p>
                <div className={`mt-4 overflow-hidden rounded-lg bg-[#d8d1c4] ${previewDevice === "Mobile" ? "h-28" : previewDevice === "Tablet" ? "h-36" : "h-40 sm:h-52"}`}>
                  <img src={lenoirPreview} alt="Maison Lenoir bakery concept preview" className="h-full w-full object-cover" />
                </div>
                {previewDevice === "Desktop" && (
                  <div className="mt-4 grid grid-cols-3 border-y border-black/15 py-3">
                    <div className="pr-3">
                      <span className="block text-[8px] uppercase tracking-[0.14em] text-black/45">01 / Bread</span>
                      <span className="mt-1 block text-[10px] font-medium">Slow-fermented</span>
                    </div>
                    <div className="border-l border-black/10 px-3">
                      <span className="block text-[8px] uppercase tracking-[0.14em] text-black/45">02 / Pastry</span>
                      <span className="mt-1 block text-[10px] font-medium">Made by hand</span>
                    </div>
                    <div className="border-l border-black/10 pl-3">
                      <span className="block text-[8px] uppercase tracking-[0.14em] text-black/45">03 / Coffee</span>
                      <span className="mt-1 block text-[10px] font-medium">Ready from 7</span>
                    </div>
                  </div>
                )}
                <a href="/lenoir" className={`mt-3 flex items-center justify-between font-semibold uppercase tracking-wide ${previewDevice === "Mobile" ? "text-[8px]" : "text-[10px] sm:text-xs"}`}>
                  Explore the bakery <ArrowUpRight size={previewDevice === "Mobile" ? 12 : 15} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between px-1 text-[10px] uppercase tracking-wide text-secondary-text sm:px-2 sm:text-xs">
              <span>Responsive design</span>
              <span className="rounded-full bg-emerald-500/10 px-2 py-1 font-medium normal-case tracking-normal text-emerald-400">{previewDevice}</span>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-2">
              {deviceOptions.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  aria-pressed={previewDevice === label}
                  onClick={() => setPreviewDevice(label)}
                  className={`flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg border px-2 py-2 text-[10px] transition-colors sm:min-h-14 sm:text-xs ${previewDevice === label ? "border-[#4F8EF7]/40 bg-[#4F8EF7]/10 text-primary-text" : "border-white/5 bg-white/[0.04] text-secondary-text hover:bg-white/[0.08]"}`}
                >
                  <Icon size={15} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
