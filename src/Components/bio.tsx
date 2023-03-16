import { useAge } from "@/hooks/useAge";
import style from "@/styles/bio.module.css";

export default function Bio() {
    const age = useAge();

    return (
        <p id={style["bio"]}>
            Hey, I&apos;m a{" "}
            <span className={style.age}>
                {age}
                <noscript className={style.age}>Js required</noscript>
            </span>{" "}
            year old developer and proud selfhoster from germany.
        </p>
    );
}
