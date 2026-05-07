import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollVideoSection = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const videoSegments = [0, 2, 3, 6, 8, 10, 13, 15];

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".step");

      video.pause();
      video.currentTime = 0;

      const videoTweenTmp = gsap.fromTo(
        video,
        {
          currentTime: videoSegments[0],
        },
        {
          currentTime: videoSegments[sections.length],
          duration: videoSegments[sections.length],
          ease: "none",
          paused: true,
        }
      );

      const videoTween = gsap.to(videoTweenTmp, {
        duration: 0.4,
        ease: "power2.out",
        paused: true,
      });

      sections.forEach((step, i) => {
        const segmentLength =
          videoSegments[i + 1] - videoSegments[i];

        const inc =
          segmentLength / videoSegments[sections.length];

        ScrollTrigger.create({
          trigger: step,
          start: i === 0 ? "top top" : "top bottom",
          end: "bottom bottom",

          onUpdate: (self) => {
            videoTween.vars.progress =
              videoSegments[i] /
                videoSegments[sections.length] +
              self.progress * inc;

            videoTween.invalidate().restart();
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-black"
    >
      {/* Sticky Background Video (Ensures the video is ONLY visible within this component) */}
      <div className="sticky top-0 w-full h-screen overflow-hidden z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://svpvodps-vh.akamaized.net/special/spesial/2019/hercules-ulykken/start-1200.mp4"
            type="video/mp4"
          />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Scroll Sections */}
      {/* Negative margin ensures these sections scroll over the sticky video */}
      <div className="relative z-10 -mt-[100vh]">
        {[0, 1, 2, 3, 4, 5, 6].map((item) => (
          <section
            key={item}
            className="step min-h-screen flex items-center justify-center px-4"
          >
            <div className="text-center">
              <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
                {item}
              </h1>

              <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
                Scroll to control the video animation smoothly
                across all devices.
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default ScrollVideoSection;