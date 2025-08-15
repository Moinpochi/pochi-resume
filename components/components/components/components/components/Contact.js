export default function Contact() {
  return (
    <section id="contact" className="section py-20">
      <div className="glass p-8">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <form action="/api/contact" method="POST" className="space-y-4">
          <input name="name" placeholder="Your Name" className="w-full p-2 text-black" />
          <input name="email" placeholder="Your Email" className="w-full p-2 text-black" />
          <textarea name="message" placeholder="Your Message" className="w-full p-2 text-black" />
          <button type="submit" className="bg-white text-black px-4 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  );
}
