export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}) {
  return (
    <section className="ornament-bg pt-36 pb-20 md:pt-44 md:pb-28 border-b border-border">
      <div className="container-lux text-center anim-fadeup">
        <div className="gold-divider mb-5"><span className="eyebrow">{eyebrow}</span></div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] text-cocoa max-w-4xl mx-auto">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
