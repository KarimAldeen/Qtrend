"use client"

// import useHover from "@/hooks/useHover";
import useHover from "../../hooks/useHover"


const Services_Cards = ({Key,Word1,Word2}) => {
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
                    {/* <h4>Ibra is Trash</h4> */}
                    <img  src={`../Home/2+3/Services_Card/CARD${Key}.webp`}  alt="" />
                </div>
                <div
                    className="Card_2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="Card_2_Top">
                        <h1>{Key}</h1>
                        <div className="Card_2_Top_Word">
                            <h2>{Word1}</h2>
                            <h3>{Word2}</h3>

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