import { aboutData } from "./data";

export default function AboutUs() {
  const { headline, bodyCopy } = aboutData;

  return (
    <section className="grid w-full grid-rows-3">
      <div className="bg-black bg-[url(../public/images/image-about-dark.jpg)] bg-cover bg-no-repeat" />
      <div className="px-8 py-12">
        <h2 className="text-[0.9rem] font-bold uppercase tracking-[0.5rem]">
          {headline}
        </h2>
        <p className="mt-4 text-rh-dark-gray">{bodyCopy}</p>
      </div>
      <div className="bg-black bg-[url(../public/images/image-about-light.jpg)] bg-cover bg-no-repeat" />
    </section>
  );
}
