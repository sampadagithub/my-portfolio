import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
    const link = [
        {
            id: 1,
            label: (
                <>
                     LinkedIn <FaLinkedin size={25} />
                </>
            ),
            href: 'https://linkedin.com',
            style: 'rounded-br-md'
        },
        {
            id: 2,
            label: (
                <>
                   Mail <HiOutlineMail size={25} />
                </>
            ),
            href: 'mailto:foo@gmail.com',
            style: ''
        },
        {
            id: 3,
            label: (
                <>
                     Resume <BsFillPersonLinesFill size={25} />
                </>
            ),
            href: '/SAMPADA_RESUME.pdf',
            style: 'rounded-br-md',
            download: true,
        }
    ];

    return (
        <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
            <ul>
                {link.map(({ id, label, href, style = '', download }) => (
                    <li key={id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}>
                        <a href={href} className="flex justify-between items-center w-full text-white" download={download} target='_blank' rel="noreferrer">
                            {label} 
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SocialLink;
