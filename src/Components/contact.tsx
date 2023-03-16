import React from "react";
import style from "@/styles/contact.module.css";
import { useMail } from "@/hooks/useMail";

export default function Contact() {
    const mail = useMail("nlion@nlion.nl");
    const mailto = useMail("nlion@nlion.nl", "mailto");

    return (
        <section className="section--page">
            <h2>Contact Methods</h2>
            <p className="section--text no-margin-bottom">
                Feel free to use PGP when sending me messages over any platform
                listed below. You can copy my PGP Key from{" "}
                <a href="https://nlion.nl/pgp.txt">nlion.nl/pgp.txt</a> or
                import it using the following command:{" "}
            </p>
            <code className="section--text">
                curl -sL https://nlion.nl/pgp.txt | gpg --import
            </code>
            <div className="margin-top" id={style["contact-table"]}>
                <table>
                    <thead>
                        <td className={style.tableHeader}>
                            <strong>Username</strong>
                        </td>
                        <td className={style.tableHeader}>
                            <strong>Platform</strong>
                        </td>
                    </thead>
                    <tr>
                        <td>
                            <a href={mailto}>{mail}</a>
                            <noscript>
                                Enable Javascript to see this content
                            </noscript>
                        </td>
                        <td>Email (PGP Encrypt if needed)</td>
                    </tr>
                    <tr>
                        <td>
                            <a
                                href="https://matrix.to/#/@nlion:nlion.nl"
                                rel="noreferrer noopener"
                                target="_blank"
                                title="https://matrix.to/#/@nlion:nlion.nl"
                            >
                                @nlion:nlion.nl
                            </a>
                        </td>
                        <td>Matrix (matrix.org project)</td>
                    </tr>
                    <tr>
                        <td>NLion74#3339</td>
                        <td>Discord</td>
                    </tr>
                </table>
            </div>
        </section>
    );
}
