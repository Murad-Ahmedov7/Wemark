import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Founder from "@/components/Founder/Founder";
import Program from "@/components/Program/Program";

async function getXSchoolData() {
  const res = await fetch("https://admin.wemark.pro/api/tasks-xschool/", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("API-dən məlumat çəkilərkən xəta baş verdi");
  }

  return res.json();
}

export default async function Home() {
  const data = await getXSchoolData();

  return (
    <main>
      <Header />
      <Banner title={data.banner_title} image={data.banner_image} />
      <About
        title={data.about_title}
        description={data.about_description}
        images={data.about_images}
      />
      <Founder founders={data.founders} />
      <Program programs={data.programs} />
    </main>
  );
}
