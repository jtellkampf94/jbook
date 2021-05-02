import { useTypedSelector } from "../hooks/use-typed-selector";
import CellListItem from "./cell-list-item";

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells }) => {
    if (cells?.order && cells?.data) {
      const { order, data } = cells;
      return order.map((id: string) => {
        return data[id];
      });
    }
  });

  const renderedCells = cells?.map(cell => (
    <CellListItem key={cell.id} cell={cell} />
  ));

  return <div>{renderedCells}</div>;
};

export default CellList;
