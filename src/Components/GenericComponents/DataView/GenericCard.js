import React from "react";
import { Paper } from "@mui/material";
import CardActionButtons from "./CardActionButtons";
import GenericSkeleton from "./GenericSkeleton";

const GenericCard = ({
  contentComponent: ContentComponent,
  item,
  onEdit,
  onDelete,
  ...props
}) => {
  if (item.showSkeleton) return <GenericSkeleton />;

  return (
    <Paper className="bg-white">
      <CardActionButtons known = {item?.known} onEdit={onEdit} onDelete={onDelete} />
      <ContentComponent item={item} />
    </Paper>
  );
};

export default GenericCard;