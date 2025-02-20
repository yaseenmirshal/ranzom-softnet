export default function About() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-800 to-zinc-500 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">About Us</h2>

        <div className="bg-gray-900 p-10 rounded-2xl shadow-lg border border-orange-400">
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">Elevating Your Digital Future</h3>
          <p className="text-gray-300 leading-relaxed">
            Ranzom Technologies is a forward-thinking software company dedicated to providing innovative solutions that drive digital transformation.
            We specialize in AI, front-end development, and custom software tailored to your business needs.
            Our mission is to empower businesses with technology that’s both robust and user-friendly.
          </p>
        </div>

        <div className="bg-gray-900 p-10 rounded-2xl shadow-lg border border-orange-400 mt-8">
          <h3 className="text-3xl font-semibold text-orange-400 mb-4">From Vision to Reality</h3>
          <p className="text-gray-300 leading-relaxed">
            Founded with a vision to revolutionize the tech industry, Ranzom Technologies started as a small team with big ambitions.
            Through dedication and innovation, we have grown into a trusted partner for businesses worldwide,
            pushing the boundaries of what’s possible in the world of software.
          </p>
        </div>
      </div>
    </section>
  );
}
