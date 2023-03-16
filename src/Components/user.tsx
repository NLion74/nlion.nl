import style from "@/styles/user.module.css";

export default function User() {
    return (
        <div id={style["wrapper--user"]}>
            <h1 id={style["user-name"]}>nlion</h1>
            <div id={style.icons}>
                <a
                    className={style.iconButton}
                    href="https://github.com/NLion74/"
                    target="_blank"
                >
                    <i className="fab fa-github" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}
