import ListItem, { ListItemProps } from "./ListItem";

export type DocumentListProps = {
    list: ListItemProps[];
};

const DocumentList = ({ list }: DocumentListProps) => {
    return (
        <section id="doc-list" className="flex col px-s">
            {list.map((item, index) => {
                return <ListItem key={index} {...item} />;
            })}
        </section>
    );
};

export default DocumentList;
