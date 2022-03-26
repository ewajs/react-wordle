import { useState, useEffect } from "react";

const useWord = (length) => {
  const [loading, setLoading] = useState(true);
  const [targetWord, setTargetWord] = useState("");
  const [words, setWords] = useState([]);

  useEffect(() => {
    if (loading)
      fetch(process.env.PUBLIC_URL + `/words_${length}.json`)
        .then((res) => res.json())
        .then((words) => {
          setTargetWord(words[Math.floor(Math.random() * words.length)]);
          setWords(words);
          setLoading(false);
        });
  }, [length]);

  return { loading, targetWord, words };
};

export default useWord;
