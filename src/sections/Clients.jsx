import { useEffect, useState } from 'react';
import { clientReviews } from '../constants/Index.js';

const Clients = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use Intersection Observer to trigger fade-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.client-container');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="c-space my-20">
      <h3 className="head-text">Insights from Clients & Colleagues</h3>

      <div className={`client-container ${isVisible ? 'fade-in' : ''}`}>
        {clientReviews.map((item) => (
          <div key={`review-${item.id}`} className="client-review">
            <div className="review-content">
              <p className="text-white-800 font-light">{item.review}</p>

              <div className="client-content">
                <div className="flex gap-3">
                  <img src={item.img} alt="reviewer" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col">
                    <p className="font-semibold text-white-800">{item.name}</p>
                    <p className="text-white-500 md:text-base text-sm font-light">{item.position}</p>
                  </div>
                </div>

                <div className="flex self-end items-center gap-2">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <img key={index} src="/bluestar.png" alt="star" className="w-7 h-7" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
