export default function Navbar() {
  return (
    <nav className="glass p-4 fixed w-full top-0 z-50">
      <ul className="flex justify-center space-x-6">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
