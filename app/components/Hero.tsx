export default function Hero() {
  return (
    <>
      <section className="min-h-screen relative border-b border-melon/30 flex items-center justify-center py-16 xl:py-24 px-6">
        <div className="w-full max-w-5xl px-6 md:px-10">
          <div
            className="
              flex flex-col xl:flex-row      
              items-center justify-center 
              gap-12 xl:gap-16                
              text-center xl:text-left        
            "
          >
            {/* Avatar */}
            <div className="w-44 md:w-76 xl:w-90 shrink-0">
              <img src="/avatar.png" alt="Giada" className="w-full h-auto" />
            </div>

            {/* Text */}
            <div className="max-w-xl flex flex-col items-center xl:items-start">
              <h4 className="font-display text-melon text-2xl md:text-4xl lg:text-4xl mb-1 xl:mb-4">
                Hi! I'm Giada,
              </h4>
              <h1 className="font-display text-white font-bold text-5xl md:text-8xl lg:text-9xl mb-1 xl:mb-4">
                frontend <br />
                developer
              </h1>
              <p className="font-mono text-off-white mt-1 max-w-xl">
                ready to dive into the world of frontend development. After a
                couple of bootcamps and a lot of hours spent coding, I'm eager
                to apply my skills in creating responsive and intuitive web
                applications.
              </p>
            </div>
          </div>

          {/* Scroll Comp */}
          <div className="mt-14 xl:mt-34 flex justify-center">
            <div className="relative w-35 h-35 flex items-center justify-center">
              <img
                src="/scroll_component.png"
                alt=""
                className="animate-[spin_20s_linear_infinite]"
              />
              <img
                src="/arrow_down.svg"
                alt=""
                className="absolute inset-0 m-auto w-4 h-4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
