import DocumentList from "./list/DocumentList";
import "./style.css";

const LIST = [
    {
        id: 1,
        date: "23.7.2023",
        title: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd",
        desc: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd"
    },
    {
        id: 2,
        date: "23.7.2023",
        title: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd",
        desc: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd"
    },
    {
        id: 3,
        date: "23.7.2023",
        title: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd",
        desc: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd"
    },
    {
        id: 4,
        date: "23.7.2023",
        title: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd",
        desc: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd"
    },
    {
        id: 5,
        date: "23.7.2023",
        title: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd",
        desc: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd"
    },
    {
        id: 6,
        date: "23.7.2023",
        title: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd",
        desc: "Titlea sdlkajs dhalksj hdakjshd jkahsdkj ahsjdhalkjsh dakhsdjkahAAAAAAAsjdhalkjshdalshdkjahskdhakjshdalkjsAAAAAAdjahsldahskdha;sdkas kdalskdaskjdaksjhdakhsjdhakshdkajhsdkhakshd"
    }
];

const DocumentListPreviewScreen = () => {
    return (
        <div className="flex screen">
            <DocumentList list={LIST} />
            <div id="section-divider-vertical" />
            <section id="preview" className="grow shrink-1">
                <p>Document preview text</p>
            </section>
        </div>
    );
};

export default DocumentListPreviewScreen;