import express from 'express'
import {getSingleCar} from "../controllers/getSingleCar.js"
import {deleteCar} from "../controllers/deleteCar.js"
import {addCar} from "../controllers/addCar.js"
 const router= express.Router();
 router.route("/").post(addCar)
router.route('/:carId').get(getSingleCar).patch().delete(deleteCar)
export default router
