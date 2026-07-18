"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    // Hàm tạo style cho Link: Nền trắng khi active, chữ trắng khi hover
    const getLinkStyle = (href: string) => {
        const isActive = pathname === href;
        return `px-4 py-1.5 text-[13px] font-bold uppercase transition-all duration-200 ${isActive
                ? "bg-white text-black rounded-sm"
                : "text-white hover:text-white/60"
            }`;
    };

    return (
        <nav className="bg-[#000000] text-white sticky top-0 z-50 px-6 lg:px-10 py-5 font-sans ">
            <div className="flex items-center justify-between max-w-full mx-auto">

                <Link href="/" className="group">
                    <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                            <Image
                                src="/logo.png"
                                alt="Logo studio"
                                width={48}
                                height={48}
                                priority
                                className="object-contain"
                            />
                        </div>
                        <span className="font-bold text-3xl uppercase tracking-wide hover:text-white/70 transition-colors duration-300">
                            DỰNG PHIM CƯỚI TODAY
                        </span>
                    </div>
                </Link>

                <div className="hidden md:flex gap-1 items-center">
                    <Link href="/" className={getLinkStyle("/")}>Trang chủ</Link>
                    <Link href="/about" className={getLinkStyle("/about")}>Về chúng tôi</Link>
                    <Link href="/services" className={getLinkStyle("/services")}>Dịch vụ</Link>
                    <Link href="/products" className={getLinkStyle("/products")}>Sản phẩm</Link>
                    <Link href="/team" className={getLinkStyle("/team")}>Đội Ngũ</Link>
                    <Link href="/contact" className={getLinkStyle("/contact")}>Liên Hệ</Link>
                </div>

                {/* Mobile Button */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Menu mobile */}
            {open && (
                <div className="flex flex-col mt-4 pb-6 gap-2 md:hidden border-t border-white/10 pt-6 animate-in slide-in-from-top">
                    <Link href="/" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-white/60">Trang chủ</Link>
                    <Link href="/about" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-white/60">Về chúng tôi</Link>
                    <Link href="/services" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-white/60">Dịch vụ</Link>
                    <Link href="/products" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-white/60">Sản phẩm</Link>
                    <Link href="/team" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-white/60">Đội Ngũ</Link>
                    <Link href="/contact" onClick={() => setOpen(false)} className="px-4 py-3 text-sm font-bold uppercase text-white hover:text-white/60">Liên Hệ</Link>
                </div>
            )}
        </nav>
    );
}