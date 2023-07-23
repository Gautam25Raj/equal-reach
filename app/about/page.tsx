import ComponentCard from "@/components/ComponentCard";
import InfoCard from "@/components/InfoCard";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import AboutHeader from "@/components/layout/header/AboutHeader";

export default function Home() {
  return (
    <main className="col-span-10 border-l border-gray-200 xl:border-x">
      <div className="h-[90vh] md:h-screen no-scrollbar no-scrollbar::-webkit-scrollbar overflow-y-auto">
        <PageHeader title="About" isRefresh={false} />

        <AboutHeader />
        <InfoCard
          title={"Who We Are?"}
          para={
            "we are dedicated to creating a world where every individual is treated with dignity, respect, and equality. Our mission is to promote social equality, challenge systemic biases, and empower individuals to contribute towards building a more just and inclusive society."
          }
        />
        <InfoCard
          title={"What we do?"}
          para={
            "we are dedicated to driving tangible change and promoting social equality in our communities. Through a combination of educational initiatives, advocacy campaigns, and community engagement, we actively work towards creating a more just and inclusive society."
          }
        />

        <ComponentCard />
        <Footer />
      </div>
    </main>
  );
}
