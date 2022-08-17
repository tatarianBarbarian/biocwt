import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import React, { useCallback, useRef } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import clsx from 'clsx'

export const Carousel = ({ className, children }) => {
  const sliderRef = useRef(null)

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.swiper.slideNext()
  }, [])

  return (
    <>
      <div className={`relative px-5 l:px-12 ${className}`}>
        <Swiper
          ref={sliderRef}
          modules={[Navigation, Pagination]}
          className="pb-5"
          loop={true}
          pagination={{
            type: 'bullets',
            modifierClass: 'mt-8 ',
            clickable: true,
            bulletActiveClass: 'bg-cloud-200',
            renderBullet: (i, className) => {
              const cl = clsx(
                'w-[14px] h-[14px] l:w-[26px] l:h-[26px] rounded-full border-2 l:border-4 border-cloud-400 mr-2 l:mr-5',
                className
              )

              return `<button class="${cl}" />`
            },
          }}
        >
          {React.Children.map(children, (child) => (
            <SwiperSlide>{React.cloneElement(child)}</SwiperSlide>
          ))}
        </Swiper>

        <button
          className="absolute left-0 top-1/2 -translate-y-2/4"
          onClick={handlePrev}
        >
          <FiArrowLeft className="text-cloud-300 hover:text-cloud-400 l:h-12 l:w-12" />
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-2/4"
          onClick={handleNext}
        >
          <FiArrowRight className="text-cloud-300 hover:text-cloud-400 l:h-12 l:w-12" />
        </button>
      </div>
    </>
  )
}
