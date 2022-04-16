const router = require('express').Router();
let Comp = require('../models/comp.model');


//Adding a new Competition
router.route('/add').post((req, res) => {
    const club = req.body.club;
    const type = req.body.type;
    const targets = req.body.targets;
    const status = req.body.status;
    const shooters = req.body.shooters;

    const newComp = new Comp({
        club,
        type,
        targets,
        status,
        shooters,
    });

    newComp.save()
        .then(() => res.json('Competition Created'))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Displaying all Competitions
router.route('/').get((req,res) => {
    Comp.find()
        .then(comps => res.json(comps))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Finding individual competitions
router.route('/:id').get((req,res) => {
    Comp.findById(req.params.id)
        .then(comps => res.json(comps))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Deleting a Competition
router.route('/:id').delete((req, res) => {
    Comp.findByIdAndDelete(req.params.id)
        .then(() => res.json('Competition Deleted'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Updating a Competition
router.route('/update/:id').post((req, res) => {
    Comp.findById(req.params.id)
        .then(comps => {
            comps.club = req.body.club;
            comps.type = req.body.type;
            comps.targets = req.body.targets;
            comps.status = req.body.status;
            comps.shooters = req.body.shooters;

            comps.save()
                .then(() => res.json('Competition Details Updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
