import React from "react";
import { Typography } from "@mui/material";
import { TITLE_COLOR } from "../../../Helpers/ConstantProperties";

function GenericFormHeader({ title }) {
    if (!title) return <></>

    return (
        <div className="p-2">
            <Typography className='fs-5 p-2 fw-bolder' color={TITLE_COLOR}>
                {title}
            </Typography>
        </div>
    );
}

export default GenericFormHeader;
