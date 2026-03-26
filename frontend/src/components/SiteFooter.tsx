export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <div
      id="site-footer"
      className="relative z-10 shrink-0 border-t border-black/10 bg-white px-5 py-2.5 md:px-10"
    >
      <p className="text-center font-sans text-[10px] text-zinc-800 md:text-xs">
        © {year} Grant Foster. All rights reserved.
      </p>
    </div>
  );
}
