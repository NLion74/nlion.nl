import style from "@/styles/intro.module.css";
import Pfp from "@/Components/pfp";
import User from "@/Components/user";
import Bio from "@/Components/bio";

export default function Intro() {
    return (
        <section id={style["wrapper--hero"]} className={"section--page"}>
            <Pfp />
            <div id={style["wrapper--user-bio"]}>
                <User />
                <Bio />
            </div>
        </section>
    );
}
