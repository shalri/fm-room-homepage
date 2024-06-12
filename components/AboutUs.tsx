import { aboutData } from "./data";

export default function AboutUs() {
  const { headline, bodyCopy } = aboutData;

  return (
    <section className="sm:h-full">
      <div className="grid w-full grid-rows-3 sm:h-full sm:grid-cols-3 sm:grid-rows-1">
        <div className="bg-black bg-[url(../public/images/image-about-dark.jpg)] bg-cover bg-no-repeat sm:h-full" />
        <div className="px-8 py-12 sm:flex sm:min-h-[33dvh] sm:flex-col sm:justify-center">
          <h2 className="text-[0.9rem] font-bold uppercase tracking-[0.5rem]">
            {headline}
          </h2>
          <p className="mt-4 text-rh-dark-gray">{bodyCopy}</p>
        </div>
        <div className="bg-black bg-[url(../public/images/image-about-light.jpg)] bg-cover bg-no-repeat" />
      </div>
    </section>
  );
}
