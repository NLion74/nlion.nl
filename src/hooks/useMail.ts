import { useState, useEffect } from "react";

export function useMail(mailToSet: string, type?: string) {
    const [mail, setMail] = useState("");

    useEffect(() => {
        if (type === "mailto") {
            setMail(`mailto:${mailToSet}`);
        } else {
            setMail(mailToSet);
        }
    }, [mailToSet]);

    return mail;
}
