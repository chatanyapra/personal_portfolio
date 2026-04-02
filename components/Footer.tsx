import Image from "next/image";
import "./Footer.css";

const Footer = () => {
    const footerImage3 = "/assets/images/violet-ball-blur.png";
    const gmailImage = "/assets/IconsImage/gmail.png";

    return (
        <div className='w-full m-auto max-w-400 min-h-60 relative flex max-md:flex-col justify-between items-center px-10 max-sm:px-5 max-md:mt-16 max-md:pb-14 mb-20'>
            <Image
                src={footerImage3}
                alt="Decorative violet blur effect for Chatanya Pratap's portfolio footer"
                width={144}
                height={144}
                className='absolute -bottom-10 right-10 w-36 -z-10'
            />

            <div className=' max-sm:w-full max-sm:text-center  '>
                <div className='text-3xl max-sm:text-2xl'>
                    Thanks for visiting!
                </div>
                <div className='text-base font-extralight max-sm:text-sm light-gray-text'>
                    ©2025 Designs by Chatanya Pratap.
                </div>
            </div>

            <div className="text-xl flex flex-col max-md:text-sm max-sm:pb-10 max-md:mb-3">
                <span>
                    connect with me via Mail?
                </span>
                <a href='mailto:pratapchatanya@gmail.com' className="text-blue-400 flex items-center cursor-pointer animate-pulse hover:text-blue-700 transition-colors duration-500">
                    {/* Corrected Image 3: Added width and height for icon */}
                    <Image
                        src={gmailImage}
                        width={32}
                        height={32}
                        className="w-8 h-8 bg-gray-300 rounded-md mr-2"
                        alt="Gmail icon"
                    />
                    pratapchatanya@gmail.com
                </a>
            </div>

            <div className='absolute -bottom-2 max-sm:w-full right-4 flex max-sm:flex-col  text-4xl'>
                <ul className="example-2">
                    <li className="icon-content">
                        <a
                            href="https://www.linkedin.com/in/chatanya-pratap-ab410a277/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Chatanya Pratap LinkedIn Profile"
                            title="Connect with Chatanya Pratap on LinkedIn"
                            data-social="linkedin"
                        >
                            <div className="filled"></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-linkedin"
                                viewBox="0 0 16 16"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                        <div className="tooltip">LinkedIn</div>
                    </li>
                    <li className="icon-content">
                        <a href="https://github.com/chatanyapra" target="_blank" rel="noopener noreferrer" aria-label="Chatanya Pratap GitHub Profile" title="View Chatanya Pratap projects on GitHub" data-social="github">
                            <div className="filled"></div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-github"
                                viewBox="0 0 16 16"
                                xmlSpace="preserve"
                            >
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                        <div className="tooltip">GitHub</div>
                    </li>
                    {/* <li className="icon-content"></li> */}
                </ul>

            </div>
        </div>
    );
};

export default Footer;