import Link from "next/link";

interface ProductReelProps {
  title: string;
  subtitle?: string;
  href?: string;
}

export default function ProductReel(props: ProductReelProps) {
  const { title, subtitle, href } = props;

  return (
    <section className="py-12">
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="max-w-2xl px-4 lg:max-w-4xl lg:px-0">
          {title ? (
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {title}
            </h1>
          ) : null}

          {subtitle ? (
            <h1 className="mt-2 font-bold text-muted-foreground">{subtitle}</h1>
          ) : null}

          {href ? (
            <Link href={href}>
              Shop the collection <span aria-hidden="true">&rarr;</span>{" "}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
