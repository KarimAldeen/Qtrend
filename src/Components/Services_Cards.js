"use client"

import useHover from "@/hooks/useHover";

const Services_Cards = ({Key}) => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHover();
    const isHoveredClassName = isHovered ? `Card_1 Card_1_Hovered` : `Card_1`;

    return (
        <div className='Services_Cards'>
            <div className={`Main_Card Key_${Key}`}>
                <div
                    className={isHoveredClassName}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <h4>After Hover</h4>
                </div>
                <div
                    className="Card_2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="Card_2_Top">
                        <h1>1</h1>
                        <div className="Card_2_Top_Word">
                            <h2>CREATIVE</h2>
                            <h3>DESIGNS</h3>

                        </div>
                    </div>
                    <div className="Card_2_Down">
                    <button>Know More</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Services_Cards