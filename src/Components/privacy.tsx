import React from "react";

export default function Privacy() {
    return (
        <section className="section--page">
            <h2>Privacy</h2>
            <p className="section--text">
                This website uses{" "}
                <a
                    href="https://plausible.io/"
                    rel="noreferrer"
                    target="_blank"
                >
                    Plausible Analytics
                </a>{" "}
                which collects neither personally identifiable information
                (PII), nor uses uses cookies. You can read more about how
                Plausible collects data{" "}
                <a
                    href="https://plausible.io/privacy-focused-web-analytics"
                    rel="noreferrer"
                    target="_blank"
                >
                    here
                </a>
                .
            </p>
            <p className="section--text">
                Besides Plausible Analytics this website also uses cloudflare
                for proxying, you can read more about cloadflare&apos;s privacy
                policy{" "}
                <a
                    href="https://www.cloudflare.com/privacypolicy/"
                    rel="noreferrer"
                    target="_blank"
                >
                    here
                </a>
                .
            </p>
        </section>
    );
}
