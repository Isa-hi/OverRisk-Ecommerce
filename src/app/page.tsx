import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TShirt from "@/components/TShirt";
import FeatureWithCheckIcon from "@/components/landingPage/FeatureWithCheckIcon";
import UserCircleImg from "@/components/landingPage/UserCircleImg";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <div className=" bg-slate-300">
      <section>
        <MaxWidthWrapper
          className="pb-24 pt-10 lg:grid lg:grid-cols-3
          sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52"
        >
          <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
            <div
              className="relative mx-auto text-center lg:text-left
            flex flex-col items-center lg:items-start"
            >
              <div
                className="absolute w-28 left-0 -top-20 hidden 
              lg:block"
              >
                <img
                  src="/overrisk_logo.png"
                  alt="OverRisk logo"
                  className="w-full"
                />
              </div>
              <h1
                className="relative w-fit tracking-tight text-balance
              mt-16 font-bold !leading-tight text-5xl
              md:text-6xl lg:text-7xl"
              >
                La mejor{" "}
                <span className="bg-orange-600 px-2 text-white">
                  ropa darkwork
                </span>{" "}
                en México
              </h1>
              <p
                className="mt-8 text-lg text-center text-balance
              lg:pr-10 max-w-prose lg:text-left md:text-wrap"
              >
                <span className="font-semibold">Toma el riesgo</span> de ser tú
                mismo con nuestra ropa. OverRisk te ofrece la mejor calidad en
                ropa darkwork en México.
              </p>

              <ul
                className="mt-8 space-y-2 text-left font-medium flex flex-col
              items-center sm:items-start"
              >
                <div className="space-y-2">
                  <FeatureWithCheckIcon
                    text="Material de alta calidad y durabilidad"
                    checkColor="text-green-600"
                  />
                  <FeatureWithCheckIcon
                    text="Diseños personalizados y exclusivos"
                    checkColor="text-green-600"
                  />
                  <FeatureWithCheckIcon
                    text="Envíos a todo México"
                    checkColor="text-green-600"
                  />
                </div>
              </ul>

              <div className="mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5">
                <div className="flex -space-x-4">
                  <UserCircleImg src="/users/user-1.png" />
                  <UserCircleImg src="/users/user-2.png" />
                  <UserCircleImg src="/users/user-3.png" />
                  <UserCircleImg src="/users/user-4.png" />
                  <UserCircleImg src="/users/user-5.png" />                  
                </div>

                <div
                  className="flex flex-col justify-between items-center
                sm:items-start"
                >
                  <div className="flex gap-0 5">
                    <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                    <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                    <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                    <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                    <Star className="w-5 h-5 text-orange-600 fill-orange-600" />
                  </div>
                  <p>
                    <span className="font-semibold">+100</span> clientes
                    satisfechos 😀
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-span-full lg:col-span-1 w-full flex justify-center
          px-8 sm:px-16 mt-32 lg:mx-0 lg:mt-20 h-fit"
          >
            <div className="relative md:max-w-xl">
              <img
                src="/tu_diseño_personalizado.png"
                alt=""
                className="absolute w-45 lg:w-58 left-56 -top-36 select-none hidden 
              sm:block lg:hidden xl:block z-50"
              />
              <TShirt 
                imgSrc="/tshirt_landingPage.png"
                className="w-80 lg:w-96"
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
