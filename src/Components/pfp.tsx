import style from "@/styles/pfp.module.css";

export default function Pfp() {
    return (
        <>
            <img
                alt=""
                id={style["profile-pic"]}
                src="/nlion.png"
                draggable="false"
            ></img>
        </>
    );
}
