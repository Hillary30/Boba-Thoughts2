import Link from "next/link";


const addRating = () => {
    return ( 
        <div className="rate__container">
            <div className="rate__header">
                <h2>Enter Your Rating</h2>
            </div>
            <div className="rate__body">
                <form id="form">
                    <div className="rate-group">
                        <label for="drink">Name of Drink:</label>
                        <input type="text" className="rate-control" id="drink"/>
                    </div>
                    <div className="rate-group">
                        <label for="topping">Toppings:</label>
                        <input type="text" className="rate-control" id="topping"/>
                    </div>
                    <div className="rate-value">
                        <label>Rating:</label>
                        <input type="radio" id="rating" name="rate" value="1"/>
                        <label for="rating">1</label>
                        <input type="radio" id="rating" name="rate" value="2"/>
                        <label for="rating">2</label>
                        <input type="radio" id="rating" name="rate" value="3"/>
                        <label for="rating">3</label>
                        <input type="radio" id="rating" name="rate" value="4"/>
                        <label for="rating">4</label>
                        <input type="radio" id="rating" name="rate" value="5"/>
                        <label for="rating">5</label>
                    </div>
                    <div className="button-box">
                        <div className="rate-button">
                            <Link href="/rateList"><button id="rate_btn">My List</button></Link>
                        </div>
                        <div className="rate-button">
                            <button id="rate_btn">Add Rating</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default addRating;
/*
<h1>Your Ratings</h1>
<div class="table-container">
    <table id="tableR">
        <thead>
            <tr>
                <th>Drink</th>
                <th>Toppings</th>
                <th>Rating</th>
            </tr>
        </thead>
        <tbody id="tableRating">
        </tbody>
    </table>
</div> */