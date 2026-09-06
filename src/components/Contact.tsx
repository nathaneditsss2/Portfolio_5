import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { config } from "../config";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = gsap.matchMedia();

    // Keep contact details visible by default on touch devices and with reduced
    // motion. Desktop reveals are optional and revert when the breakpoint changes.
    media.add(
      "(min-width: 1025px) and (hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        if (!contactRef.current) return;
        const contactTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: contactRef.current,
            start: "top 80%",
            end: "bottom center",
            toggleActions: "play none none none",
            invalidateOnRefresh: true,
          },
        });

        contactTimeline.fromTo(
          "h3",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );

        contactTimeline.fromTo(
          ".contact-box",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4"
        );
      },
      contactRef
    );

    return () => media.revert();
  }, []);

  return (
    <div className="contact-section section-container" id="contact" ref={contactRef}>
      <div className="contact-container">
        <h3>{config.developer.fullName}</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <button type="button" className="contact-email" data-cursor="disable">
                {config.contact.email}
              </button>
            </p>
            <h4>Lokasi</h4>
            <p>
              <span>{config.social.location}</span>
            </p>
          </div>
          <div className="contact-box">
            <h4>Media Sosial</h4>
            <button
              type="button"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </button>
            <button
              type="button"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </button>
            <button
              type="button"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </button>
            <button
              type="button"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </button>
            <button
              type="button"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </button>
          </div>
          <div className="contact-box">
            <h2>
              Dirancang dan Dikembangkan <br /> oleh <span>{config.developer.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
