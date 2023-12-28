import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { imageList } from '../../data/Data';

function ListimgView() {
    return (
        <ImageList sx={{ width: 200, height: 350 }} variant="woven" cols={2} row={2} gap={8}>
            {imageList.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.img}?w=161&fit=crop&auto=format`}
                        alt={item.title}
                    // loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

export default ListimgView