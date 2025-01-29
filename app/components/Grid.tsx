import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'


const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map
            ((item)=>(
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                imgClassName={item.imgClassName}
                img={item.img}
                spareImg={item.spareImg}
                titleClassName={item.titleClassName}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid