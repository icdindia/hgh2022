import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect } from "react";


export default function Home() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.1,
    speed : '20'
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      document.querySelectorAll('video').forEach(vid => vid.pause());
      emblaApi.scrollPrev();
    } 
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      document.querySelectorAll('video').forEach(vid => vid.pause());
      emblaApi.scrollNext();
    } 
  }, [emblaApi]);

  const scrollHome = useCallback(() => {
    if (emblaApi) {
      document.querySelectorAll('video').forEach(vid => vid.pause());
      emblaApi.scrollTo('0', true);
      // emblaApi.reInit();
    } 
  });




  useEffect(() => {
    if (emblaApi) {

      const onInit = (eventName) => {
        console.log(`Embla just triggered ${eventName}!`)
        const homeVideo = document.getElementById("video1");
        homeVideo.play();
        emblaApi.off('init') // Add event listener
      }

      const onPointerDown = () => {
        console.log(`touch start`);
        document.querySelectorAll('video').forEach(vid => vid.pause());
      }


      const onSettle = (index) => {
        console.log(`settled ${emblaApi.selectedScrollSnap()}`);
        const slideNodes = parseInt(emblaApi.selectedScrollSnap()) + 1;
        console.log(slideNodes);
        const currentVideo = document.getElementById(`video${slideNodes}`);
        // currentVideo.currentTime = 0;
        currentVideo.play();



      }

      
      emblaApi.on('init', onInit) // Add event listener
      emblaApi.on('settle', onSettle) // Add event listener
      emblaApi.on('pointerDown', onPointerDown) // Add event listener


    }
  }, [emblaApi])







  return (
    <div className={styles.container}>

      <Head>
        <title>Sleepwell</title>
      </Head>

      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className='embla__container'>
            <div className='embla__slide'>
              {/* <h2>Slide 1</h2> */}
              <video muted id="video1"  src="../video/1_1.mp4"></video>
            </div>
            <div className='embla__slide'>
              {/* <h2>Slide 2</h2> */}
              <video muted id="video2"  src="../video/2.mp4"></video>
            </div>
            <div className='embla__slide'>
              {/* <h2>Slide 3</h2> */}
              <video muted id="video3"  src="../video/3.mp4"></video>
            </div>
            <div className='embla__slide'>
              {/* <h2>Slide 4</h2> */}
              <video muted id="video4"  src="../video/4.mp4"></video>
            </div>
            <div className='embla__slide'>
              {/* <h2>Slide 5</h2> */}
              <video muted id="video5"  src="../video/1_1.mp4"></video>
            </div>
          </div>
        </div>

        <button type="button" className='prev-btn' onClick={scrollPrev} >
          prev
        </button>
        <button type="button" className='next-btn' onClick={scrollNext} >
          next
        </button>
        <button type="button" className='home-btn' onClick={scrollHome} >
          home
        </button>

      </div>



    </div>
  )
}
