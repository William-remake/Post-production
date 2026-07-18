import React from 'react';
import { FacebookFilled, MailOutlined, PhoneOutlined } from '@ant-design/icons';

export default function Footer() {
    return (
        <footer className="bg-[#000000] text-[#ffffff] py-16 px-6 lg:px-20 font-sans border-t border-[#ffffff]/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Cột 1: Logo/Studio Name */}
                <div className="space-y-4">
                    <h2 className="text-[#ffffff] font-bold text-lg uppercase tracking-wide">
                        DỰNG PHIM CƯỚI
                    </h2>
                    <p className="text-gray-400 text-xs leading-relaxed max-w-62.5 uppercase font-medium tracking-wider">
                        Studio hậu kỳ, studio cưới, đội quay cưới, freelancer và wedding planner có nhu cầu thuê ngoài dịch vụ hậu kỳ.
                    </p>
                </div>

                {/* Cột 2: Contact */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg uppercase tracking-wide text-[#ffffff]">Liên Hệ</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=panumasdigital@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <MailOutlined className="text-xs" /> Email
                            </a>
                        </li>

                        {/* Số điện thoại */}
                        <li>
                            <a
                                href="tel:0967283950"
                                className="hover:text-white transition-colors flex items-center gap-2"
                            >
                                <PhoneOutlined className="text-xs" /> Hotline: 0967.283.950
                            </a>
                        </li>

                        <li className="hover:text-white transition-colors cursor-default">Số 657/16 đường Phú Lợi, Khu phố 9, phường Phú Lợi, Thành phố Hồ Chí Minh</li>
                    </ul>
                </div>

                {/* Cột 3: About us & Socials */}
                <div className="space-y-4">
                    <h3 className="font-bold text-lg uppercase tracking-wide text-[#ffffff]">vỀ CHÚNG TÔI</h3>
                    <div className="flex gap-4 text-2xl">
                        <a
                            href="https://www.facebook.com/share/18NkZm2qKJ/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#ffffff] hover:text-gray-400 transition-all duration-300 hover:scale-110"
                        >
                            <FacebookFilled />
                        </a>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#ffffff]/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[12px] text-[#ffffff] uppercase tracking-widest">
                    Copyright © 2026 DUNG PHIM CUOI TODAY. Made by William. All rights reserved.
                </p>
            </div>
        </footer>
    );
}