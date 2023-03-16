import Document, { Head, Html, Main, NextScript } from "next/document";


export default class _Document extends Document {
    render() {
        return (
            <Html>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=0, maximum-scale=1, user-scalable=0" />
                <meta property="og:type" content="website" />
                <script defer data-domain="nlion.nl" src="https://plsb.nlion.de/js/script.js"></script>
                <script {...{src: "https://kit.fontawesome.com/c366121ead.js", crossorigin: "anonymous"}}></script>
            </Head>
            <body>
            <div id='root'>
                <Main />
                <NextScript />
            </div>
            </body>
            </Html>
            );
    }
}
