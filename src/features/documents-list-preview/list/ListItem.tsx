export type ListItemProps = {
    date: string;
    title: string;
    desc: string | null;
};

const ListItem = ({ date, title, desc }: ListItemProps) => {
    return (
        <div className="relative flex gap-s py-m">
            <div id="item-header">
                <div className="doc-cover flex items-center justify-center">
                    <span className="grow">A</span>
                </div>
            </div>
            <div id="item-summary" className="py-s">
                <div className="date">{date}</div>
                <div className="title py-s">
                    <p>{title}</p>
                </div>
                <div className="description">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;
