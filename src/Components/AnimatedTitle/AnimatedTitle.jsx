import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const AnimatedTitle = ({ title, containerClass}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(".animated-word", {
        opacity: 1,
        x: 0,
        y: 0,
        z: 0,
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
        stagger: 0.02,
        duration: 1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={containerRef} className={`animated-title ${containerClass}`}>
        {title.split("<br/>").map((line, index) => (
          <div
            key={index}
            className="max-w-full flex-center  flex-wrap gap-2 px-10 md:gap-3"
          >
            {line.split(" ").map((word, i) => (
              <span
                key={i}
                className="animated-word "
                dangerouslySetInnerHTML={{ __html: word }}
              ></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedTitle;
