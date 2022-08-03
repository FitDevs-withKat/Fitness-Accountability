export default function Heading() {
  return (
    <>
      <section className="flex flex-col my-8  gap-4 xl:gap-0 xl:flex-row xl:justify-between xl:items-center">
          <div className="lg:w-1/3">
              <h1 className="text-4xl font-bold mb-2">Fitness-Accountability</h1>
              <p className="text-lg">#FitDevs was created because we want to empower developers to explore, maintain, and inspire fitness in our collective lives.</p>
          </div>
          <div>
              <div className="flex flex-col w-[40%] md:w-full md:flex-row gap-4">
                  <a 
                    href="https://discord.com/invite/AY8sgsAk5H" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-primary">
                      Join Us On Discord
                  </a>

                  <a 
                    href="https://twitter.com/search?q=%23fitdevs&src=typed_query&f=live" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-secondary">
                      Check Out #fitdev
                  </a>

                  <a 
                    href="https://github.com/FitDevs-withKat" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="btn-secondary">
                      Build With Us
                  </a>
              </div>
          </div>
      </section>
    </>
  );
}
