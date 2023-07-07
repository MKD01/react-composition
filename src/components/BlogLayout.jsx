import { useEffect, useState } from "react";

export default function BlogLayout({ children }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const totalScrollableDistance = documentHeight - windowHeight;
      const scrollProgress = (scrollPosition / totalScrollableDistance) * 100;
      setProgress(Math.round(scrollProgress));
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <section id='blog-container'>
      <h2 className='progress'>Progress: {progress}%</h2>

      {children}

      <footer>
        <h2 className='footer-progress'>
          {progress < 100
            ? `Progress: ${progress}%`
            : "You're at the bottom of the page"}
        </h2>
      </footer>
    </section>
  );
}
