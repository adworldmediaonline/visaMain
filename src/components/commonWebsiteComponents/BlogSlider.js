'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import BlogCard from './BlogCard';
const BlogSlider = ({ blogs }) => {
  const customSlider = useRef();
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    dots: false,
    infinite: false,
    arrows: false,
    loop: true,
    autoplay: true,
    speed: 2000,

    lazyLoad: true,
    accessibility: true,
    cssEase: 'ease-out',
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 1080,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          speed: 1000,
        },
      },
    ],
  };
  return (
    <div className="bg-white">
      <div className="container space-y-3 ">
        <div className="pl-4">
          <h6 className="text-3xl text-gray-500">Explore More</h6>
        </div>

        <div className="relative flex items-center justify-between">
          <div className="absolute z-10 hidden text-center -left-8 md:block">
            <button onClick={() => customSlider.current.slickPrev()}>
              <IoIosArrowBack
                size={40}
                className="p-2 border rounded-full text-primary hover:text-white hover:bg-secondary border-primary"
              />
            </button>
          </div>
          <div className="w-[100%]">
            <Slider {...settings} ref={customSlider} className="mx-auto ">
              {JSON.parse(blogs)?.length > 0
                ? JSON.parse(blogs).map((blog, index) => (
                    <div className="px-4 py-1 group" key={index}>
                      <BlogCard {...blog} />
                    </div>
                  ))
                : null}
            </Slider>
          </div>
          <div className="absolute z-10 hidden text-center -right-8 md:block">
            <button onClick={() => customSlider.current.slickNext()}>
              <IoIosArrowForward
                size={40}
                className="p-2 border rounded-full text-primary hover:text-white hover:bg-secondary border-primary"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
