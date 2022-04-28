const router = require('express').Router();
let Shooter = require('../models/shooters.model');


//Display all shooters
router.route('/').get((req,res) => {
    Shooter.find()
    .then(shooters => res.json(shooters))
    .catch(err => res.status(400).json('Error: ' + err))
})


//Adding a new shooter
router.route('/add').post((req, res) => {
    console.log(req.body);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const grade = req.body.grade;
    const homeClub = req.body.homeClub;

    const newShooter = new Shooter({
        fname,
        lname,
        grade,
        homeClub,
    });

    newShooter.save()
    .then(() => res.json('Shooter Added'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Finding shooter by their ID
router.route('/:id').get((req, res) => {
    Shooter.findById(req.params.id)
    .then(shooters => res.json(shooters))
    .catch(err => res.status(400).json('Error: ' + err))
});


//Deleting Shooter
router.route('/:id').delete((req, res) => {
    Shooter.findByIdAndDelete(req.params.id)
    .then(() => res.json('Shooter Deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Updating a shooters details
router.route('/update/:id').post((req, res) => {
    Shooter.findById(req.params.id)
        .then(shooters => {
            shooters.fname = req.body.fname;
            shooters.lname = req.body.lname;
            shooters.grade = req.body.grade;
            shooters.homeClub = req.body.homeClub;

            shooters.save()
                .then(() => res.json('Shooter Details Updated'))
                .catch(err => res.status(400).json('Error: ' + err));  
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;