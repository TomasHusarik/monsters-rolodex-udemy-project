import './card-list.styles.css'
import Card from "../card-container/card.component";

const CardList = ({ monsters }) => (


        <div className="card-list">
            {monsters.map((monster) => {

                return (
                    <Card monster={monster}></Card>
                )
            })}
        </div>
);

export default CardList;