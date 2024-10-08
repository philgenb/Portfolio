'use client';

export default function Navbar() {
    const handleNavClick = (targetId) => {
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    };

    return <div className="w-full  px-8">
        <nav className="px-4 py-8 flex justify-between items-center">
            <p className="font-black text-md tracking-wider hidden sm:block">Phil Gengenbach</p>
            <div className="flex items-center space-x-10 text-nav font-black ml-auto">
                <a onClick={() => handleNavClick('recentProjects')} className="hover:underline cursor-pointer">Projects</a>
                <a onClick={() => handleNavClick('aboutme')} className="hover:underline cursor-pointer">About me</a>
                <a onClick={() => handleNavClick('aboutme')} className="hover:underline cursor-pointer">Contact</a>
            </div>
        </nav>
    </div>
}