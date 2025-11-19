import { useState, useEffect, useMemo } from "react";

const TextChange = () => {
  const texts = useMemo(
    () => ["Investigative Journalist", "Political Analyst", "Field Reporter"],
    []
  );

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(120);

  useEffect(() => {
    const current = texts[index];
    const typing = () => {
      setCurrentText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      setSpeed(isDeleting ? 60 : 120);

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const timer = setTimeout(typing, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, texts, index, speed]);

  return (
    <span className="text-[#ffb347] font-semibold border-r-2 border-[#ffb347] pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

export default TextChange;
