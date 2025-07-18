const FeaturesSection = () => {
  return (
    <section
      className="w-full py-24 px-6 flex flex-col items-center justify-center text-center"
      style={{ backgroundColor: "#000000ff", color: "#fff3f3ff" }}
      id="features"
    >
      <div className="max-w-5xl">
        <h2 className="text-5xl font-extrabold mb-4">
          Command Line: Power in Your Hands 🚀
        </h2>
        <p className="text-xl mb-10">
          Understand, Use, and Master the Terminal
        </p>

        <div className="text-md sm:text-lg leading-relaxed mb-16">
          A CLI (Command Line Interface) is a text-based interface used to run
          programs, manage files, and perform complex tasks efficiently. <br /><br />
          Instead of navigating through menus, you type commands — which is faster,
          scriptable, and highly powerful for developers. <br /><br />
          For example,{" "}
          <code className="bg-white bg-opacity-10 px-2 py-1 rounded text-sm">
            git init
          </code>{" "}
          starts a new Git repository. <br /><br />
          Mastering the CLI boosts productivity and gives you direct control over
          tools like Git, npm, Docker, and more.
        </div>

        <div className="grid md:grid-cols-3 gap-10 w-full">
          <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white text-center">
            <h3 className="text-2xl font-semibold mb-2">⚡ Instant Scaffolding</h3>
            <p>
              Generate full project boilerplates in seconds using one simple command.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white text-center">
            <h3 className="text-2xl font-semibold mb-2">📦 Prebuilt Templates</h3>
            <p>
              Start fast with ready-to-use templates for React, Next.js, Tailwind CSS, and more.
            </p>
          </div>

          <div className="bg-white bg-opacity-10 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white text-center">
            <h3 className="text-2xl font-semibold mb-2">💡 Developer Friendly</h3>
            <p>
              Avoid boilerplate setups. Just type, run, and start coding with zero config.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
