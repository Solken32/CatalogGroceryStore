"use client"; 
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

export default function SingleProduct({ product }: { product: Product }){
    const phoneNumber = "946395258";   
    const url = `http://catalogstore/pages/shop/${product.id}`;
    const message = encodeURIComponent(
    `Hola, estoy interesado en el producto "${product.name}". ¿Podrías darme más información?\n${url}`
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;   

    return (
            <section className="overflow-hidden relative pb-20 pt-5 lg:pt-20 xl:pt-15">
                    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-17.5">
                        <div className="lg:max-w-[570px] w-full">
                        <div className="lg:min-h-[512px] rounded-lg shadow-1 bg-gray-2 p-4 sm:p-7.5 relative flex items-center justify-center">
                            <div>
                            
                            <Image
                                src={product.image}
                                alt="products-details"
                                width={400}
                                height={400}
                            />
                            </div>
                        </div>
        
                        {/* ?  &apos;border-blue &apos; :  &apos;border-transparent&apos; */}
                        {/* <div className="flex flex-wrap sm:flex-nowrap gap-4.5 mt-6">
                            
                                <Image
                                width={50}
                                height={50}
                                src={product.image}
                                alt="thumbnail"
                                />
                            
                        </div> */}
                        </div>
        
                        {/* <!-- product content --> */}
                        <div className="max-w-[539px] w-full">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="font-semibold text-xl sm:text-2xl xl:text-custom-3 text-dark">
                            {product.name}
                            </h2>
        
                            <div className="inline-flex font-medium text-custom-sm text-white bg-blue rounded py-0.5 px-2.5">
                            30% OFF
                            </div>
                        </div>
        
                        <div className="flex flex-wrap items-center gap-5.5 mb-4.5">
                            <div className="flex items-center gap-2.5">
                            {/* <!-- stars --> */}
                            <div className="flex items-center gap-1">
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
        
                                <svg
                                className="fill-[#FFA645]"
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g clipPath="url(#clip0_375_9172)">
                                    <path
                                    d="M16.7906 6.72187L11.7 5.93438L9.39377 1.09688C9.22502 0.759375 8.77502 0.759375 8.60627 1.09688L6.30002 5.9625L1.23752 6.72187C0.871891 6.77812 0.731266 7.25625 1.01252 7.50938L4.69689 11.3063L3.82502 16.6219C3.76877 16.9875 4.13439 17.2969 4.47189 17.0719L9.05627 14.5687L13.6125 17.0719C13.9219 17.2406 14.3156 16.9594 14.2313 16.6219L13.3594 11.3063L17.0438 7.50938C17.2688 7.25625 17.1563 6.77812 16.7906 6.72187Z"
                                    fill=""
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_375_9172">
                                    <rect width="18" height="18" fill="white" />
                                    </clipPath>
                                </defs>
                                </svg>
                            </div>
        
                            <span> (5 customer reviews) </span>
                            </div>
        
                            <div className="flex items-center gap-1.5">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clipPath="url(#clip0_375_9221)">
                                <path
                                    d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
                                    fill="#22AD5C"
                                />
                                <path
                                    d="M12.6875 7.09374L8.9688 10.7187L7.2813 9.06249C7.00005 8.78124 6.56255 8.81249 6.2813 9.06249C6.00005 9.34374 6.0313 9.78124 6.2813 10.0625L8.2813 12C8.4688 12.1875 8.7188 12.2812 8.9688 12.2812C9.2188 12.2812 9.4688 12.1875 9.6563 12L13.6875 8.12499C13.9688 7.84374 13.9688 7.40624 13.6875 7.12499C13.4063 6.84374 12.9688 6.84374 12.6875 7.09374Z"
                                    fill="#22AD5C"
                                />
                                </g>
                                <defs>
                                <clipPath id="clip0_375_9221">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
        
                            <span className="text-green"> In Stock </span>
                            </div>
                        </div>
        
                        <h3 className="font-medium text-custom-1 mb-4.5">
                            <span className="text-sm sm:text-base text-dark">
                            Price: ${product.price}
                            </span>
                            <span className="line-through">
                            {" "}
                            ${product.price}{" "}
                            </span>
                        </h3>
        
                        <ul className="flex flex-col gap-2">
                            <li className="flex items-center gap-2.5">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                                fill="#3C50E0"
                                />
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                                fill="#3C50E0"
                                />
                            </svg>
                            Free delivery available
                            </li>
        
                            <li className="flex items-center gap-2.5">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                d="M13.3589 8.35863C13.603 8.11455 13.603 7.71882 13.3589 7.47475C13.1149 7.23067 12.7191 7.23067 12.4751 7.47475L8.75033 11.1995L7.5256 9.97474C7.28152 9.73067 6.8858 9.73067 6.64172 9.97474C6.39764 10.2188 6.39764 10.6146 6.64172 10.8586L8.30838 12.5253C8.55246 12.7694 8.94819 12.7694 9.19227 12.5253L13.3589 8.35863Z"
                                fill="#3C50E0"
                                />
                                <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0003 1.04169C5.05277 1.04169 1.04199 5.05247 1.04199 10C1.04199 14.9476 5.05277 18.9584 10.0003 18.9584C14.9479 18.9584 18.9587 14.9476 18.9587 10C18.9587 5.05247 14.9479 1.04169 10.0003 1.04169ZM2.29199 10C2.29199 5.74283 5.74313 2.29169 10.0003 2.29169C14.2575 2.29169 17.7087 5.74283 17.7087 10C17.7087 14.2572 14.2575 17.7084 10.0003 17.7084C5.74313 17.7084 2.29199 14.2572 2.29199 10Z"
                                fill="#3C50E0"
                                />
                            </svg>
                            Sales 30% Off Use Code: PROMO30
                            </li>
                        </ul>
        
                        
                            <div className="flex flex-col gap-4.5 border-y border-gray-3 mt-7.5 mb-9 py-9">
                            
                            {/* <!-- details item --> */}
                            <div className="flex items-center gap-4">
                                <div className="min-w-[65px]">
                                <h4 className="font-medium text-dark">Storage:</h4>
                                </div>
        
                                
                            </div>
        
                            {/* // <!-- details item --> */}
                            <div className="flex items-center gap-4">
                                <div className="min-w-[65px]">
                                <h4 className="font-medium text-dark">Type:</h4>
                                </div>
        
                                <div className="flex items-center gap-4">
                                
                                </div>
                            </div>
        
                            
                            </div>
        
                            <div className="flex flex-wrap items-center gap-4.5">
                            <Link
                                href={whatsappUrl}
                                target="_blank"
                                className="w-full  inline-flex font-medium text-white bg-green py-3 px-7 rounded-md ease-out duration-200 hover:bg-blue-dark"
                            >
                                Finalizar compra por Whatsapp
                            </Link>
                            </div>
                        
                        </div>
                    </div>
                    </div>
                </section>
        
    );
    
}