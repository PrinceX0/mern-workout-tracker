const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')


const router = express.Router()

//GET all workouts
router.get('/', getWorkouts)

//GET a single workout
router.get('/:id', getWorkout)

//POST a new workout
// router.post('/', async (req, res) => {
//     // const { title, load, reps } = req.body
//     // try {
//     //     const workout = await Workout.create({ title, load, reps })
//     //     res.status(200).json(workout)
//     // } catch (error) {
//     //     res.status(400).json({ error: error.message })
//     // }
//     // res.json({ mssg: 'POST new workout' })
// })
router.post('/', createWorkout)

//DELETE a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWorkout)


module.exports = router