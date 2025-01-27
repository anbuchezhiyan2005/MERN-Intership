import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFruit, resetFruit } from './slices/fruitSlices';
import { setDryFruit, resetDryFruit } from "./slices/dryfruitSlices";
import { setVegetable, resetVegetable } from "./slices/vegetableSlices";
import { addToCart } from "./slices/cartSlices";

export default function Redux() {
    const dispatch = useDispatch();
    const fruits = useSelector((state) => state.fruitsInfo.fruits);
    const dryFruits = useSelector((state) => state.dryFruitsInfo.dryFruits);
    const vegetables = useSelector((state) => state.vegetablesInfo.vegetables);

    const [fruitDetails, setFruitDetails] = useState("");
    const [dryFruitDetails, setDryFruitDetails] = useState("");
    const [vegetableDetails, setVegetableDetails] = useState("");

    const handleAddToCart = (items) => {
        dispatch(addToCart(items));
    };

    return (
        <>
            <div class="container">
                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                        <label class="visually-hidden" htmlFor="fruitInput">Fruit Name:</label>
                        <div class="input-group">
                            <div class="input-group-text">Fruit Name:</div>
                            <input
                                type="text"
                                class="form-control"
                                id="fruitInput"
                                onChange={(e) => setFruitDetails(e.target.value)}
                                placeholder="Enter Fruit Name"
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => dispatch(setFruit(fruitDetails))}
                        >
                            Add Fruit
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => handleAddToCart(fruits)}
                        >
                            Add All Fruits to Cart
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => dispatch(resetFruit())}
                        >
                            Reset
                        </button>
                    </div>
                </form>
                <br />

                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                        <label class="visually-hidden" htmlFor="dryFruitInput">DryFruit Name:</label>
                        <div class="input-group">
                            <div class="input-group-text">DryFruit Name:</div>
                            <input
                                type="text"
                                class="form-control"
                                id="dryFruitInput"
                                onChange={(e) => setDryFruitDetails(e.target.value)}
                                placeholder="Enter DryFruit Name"
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => dispatch(setDryFruit(dryFruitDetails))}
                        >
                            Add DryFruit
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => handleAddToCart(dryFruits)}
                        >
                            Add All DryFruits to Cart
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => dispatch(resetDryFruit())}
                        >
                            Reset
                        </button>
                    </div>
                </form>
                <br />

                <form class="row row-cols-lg-auto g-3 align-items-center">
                    <div class="col-12">
                        <label class="visually-hidden" htmlFor="vegetableInput">Vegetable Name:</label>
                        <div class="input-group">
                            <div class="input-group-text">Vegetable Name:</div>
                            <input
                                type="text"
                                class="form-control"
                                id="vegetableInput"
                                onChange={(e) => setVegetableDetails(e.target.value)}
                                placeholder="Enter Vegetable Name"
                            />
                        </div>
                    </div>
                    <div class="col-12">
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => dispatch(setVegetable(vegetableDetails))}
                        >
                            Add Vegetable
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => handleAddToCart(vegetables)}
                        >
                            Add All Vegetables to Cart
                        </button>
                        <button
                            type="button"
                            class="btn btn-primary"
                            onClick={() => dispatch(resetVegetable())}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
