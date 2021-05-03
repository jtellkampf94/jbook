import { Fragment } from "react";
import { Cell } from "../state/cell";
import CodeCell from "./code-cell";
import TextEditor from "./text-editor";
import ActionBar from "./action-bar";
import "./cell-list-item.css";

interface CellListItemProps {
  cell: Cell;
}

const CellListItem: React.FC<CellListItemProps> = ({ cell }) => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <Fragment>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </Fragment>
    );
  } else {
    child = (
      <Fragment>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </Fragment>
    );
  }

  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;