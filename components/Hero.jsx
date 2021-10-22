import Button from "./Button";
const Hero = () => {
  return (
    <section className="relative py-6 px-8">
      <div className="absolute top-0 left-0 z-10 animate-fade-left delay-1000">
        <img src="/images/bg-hero.png" alt="background hero" />
      </div>
      <div className="relative z-20 container flex flex-col md:flex-row items-center">
        <div className="block flex-1 animate-fade-left">
          <img src="/images/hero.png" alt="hero" />
        </div>
        <div className="w-full md:w-5/12 mt-12 ">
          <h5 className="font-ibm-serif text-md md:text-xl font-semibold text-secondary animate-fade-bottom">
            Astrid Shofi Dzihni R
          </h5>
          <h2 className="text-4xl md:text-6xl font-ibm-serif font-bold leading-normal md:leading-relaxed mb-3 md:mb-8 animate-fade-bottom">
            Data Engineer Based in
            <span className="text-primary"> Jakarta</span>
          </h2>
          <p className="text-sm md:text-lg font-light leading-normal md:leading-loose mb-12 animate-fade-bottom">
            To be a Data Engineer is so amazing. I can help everyone build their
            bussiness, it such happines for me. So, let me to help you
          </p>
          {/* <div className="w-4 h-4 bg-blue-800 animate-bounce"></div> */}
          <Button className="animate-button">My Journey</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
