import Icon from "@/common/Icons";
import DocumentList from "./list/DocumentList";
import "./style.css";
import FloatActionButton from "./FAB";

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
            <div id="section-divider-vertical">
                <button className="btn-icon">
                    <Icon name="chevron-right" size={32} />
                </button>
            </div>
            <section id="preview" className="grow shrink-1" style={{ marginTop: 94 }}>
                <p>Document preview text</p>
            </section>
            <FloatActionButton />
        </div>
    );
};

export default DocumentListPreviewScreen;
