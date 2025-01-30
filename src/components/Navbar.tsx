export default function Navbar(){
    return (
        <nav className="bg-gray-400 p-4">
            <div className = "container mx-auto flex justify-between">
                <span className="text-xl font-bold">My Portfolio</span>
                <div className="space-x-4">
                    <a href="/" className="hover:text-cyan-400">Home</a>
                    <a href="/about" className="hover:text-cyan-400">About</a>
                    <a href="/contact" className="hover:text-cyan-400">Contact</a>
                    <a href="/blog" className="hover:text-cyan-400">Blog</a>
                </div>
            </div>
        </nav>
    );
}