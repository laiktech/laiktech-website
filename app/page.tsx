import { ContactUs } from "./components/contact-us";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { OurProcess } from "./components/our-process";
import { OurServices } from "./components/our-services";
import { OurValues } from "./components/our-values";
import { OurTechnologies } from "./components/out-technologies";

export const bannerHeight = "lg";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex min-h-screen items-center justify-center bg-background">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between sm:items-start">
          <OurValues />
          <OurServices />
          <OurProcess />
        </main>
      </div>
      <ContactUs />
      <Footer />
    </>
  );
}
