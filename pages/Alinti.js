import { useState } from "react";

export default function Alinti() {
    const [orjinal, setOrjinal] = useState(false);
    const alintiTr = "Yaşamın amacı, onu anlamaya ve insanlığa hizmet etmeye adanmaktır.";
    const alintiEn = "The purpose of life is to be of service to others and to understand our existence.";
    const yazar = "Dr. Martin Luther King Jr.";

    // checkbox'ın üzerinde değişme olması durumunda 
    // orjinal değişkenini yeni checkbox değeri ile güncelle
    const degisti = (e) => setOrjinal(e.target.checked);

    // https://devdojo.com/zoltan/tailwind-blockquote
    return (
        <blockquote className="p-4 my-4 bg-gray-50 border-l-4 border-gray-300 dark:border-gray-500 dark:bg-gray-800">
            <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
                &ldquo;{orjinal ? alintiEn : alintiTr}&rdquo;
                <span className="ml-4 opacity-50">&ndash; {yazar}</span>
            </p>
            <div className="text-gray-900 dark:text-white text-right mt-2 text-sm">
                <label>
                    <input type="checkbox" checked={orjinal} onChange={degisti} /> Show Original
                </label>
            </div>
        </blockquote>
    );
}