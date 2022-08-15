import React from 'react'
import HomeCard from '../Card/HomeCard';

function HomePart({ datas, header, content }) {
    return (
        <>
            <p className='home-parts-header'>{header}</p>
            <div className='home-parts'>
                {
                    datas.map(page => (
                        <HomeCard id={page.id} url={page.url} name={page.name} imagePath={page.imagePath} content={content} />
                    ))
                }
            </div>
        </>
    )
}
export default HomePart;