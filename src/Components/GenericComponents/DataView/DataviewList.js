import React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { getDataWithSkeleton } from '../../../Helpers/helpers';


function DataviewList(props) {
    const { Component } = props.ShowElement;

    const data = getDataWithSkeleton(props.data, props.showSkeleton);
    //gap in figma is much less than the rem or predefined gap
    //that is why pixels are used...
    return (
        <div className='heightAndOverflow' onScroll={props.onScroll}>
            <Grid2 container gap={"4px"}>
                {data?.map((item) => {
                    return (
                        item?.map((element, index) => (
                            <Grid2
                                width={"100%"}
                                key={index}
                                onClick={() => props.setSelected({ element: element, index: index })} >
                                <Component
                                    item={element}
                                    context={props.context}
                                    endOfList={props.data?.length === index + 1}
                                />
                            </Grid2>
                        ))
                    )
                })}
            </Grid2>
        </div >
    );
}

export default DataviewList;
