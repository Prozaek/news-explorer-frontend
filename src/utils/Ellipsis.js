import React from "react";

export default function Elipsis() {

const textRef = React.useRef(); // записывает объект, возвращаемый хуком, в переменную

    // сравнивает оффсет и скролл контента
    function isEllipsisActive() {
        return textRef.current.offsetHeight < textRef.current.scrollHeight;
    }

    let text = "";

    // обрезает текст при изменении размера экрана
    function resizeListener() {
        if (!textRef.current) return;
        textRef.current.innerHTML = text;
        let words = text.split(" ");
        while (isEllipsisActive()) {
            words.pop();
            textRef.current.innerHTML = `${words.join(" ")}...`;
        }
    }

    // слушает изменение размера и запускает обрезчик текста
    React.useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        text = textRef.current.innerHTML;
        window.addEventListener("resize", resizeListener);
        resizeListener();
    });

    return {textRef}
}