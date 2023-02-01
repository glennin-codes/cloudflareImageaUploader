import express from 'express'
import {getAllCars} from '../controllers/getAllCars.js'
 const router= express.Router();
router.route('/:dataAmount').get(getAllCars);

export default router
