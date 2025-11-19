const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const User = require("../models/User");
const Team = require("../models/Team");

var currId= new mongoose.Types.ObjectId();
currId= null;

// Landing page
router.get("/", (req, res) => {
    res.send("land!");
});

//register
router.post("/register", async (req, res) => {
    try {
        const { name, password } = req.body;

        const user = new User({ name, password });
        await user.save();

        //loacl store
        currId= user._id;
        
        res.json({ message: "User registered successfully", user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//login
router.post("/login", async (req, res) => {
    try {
        const { name, password } = req.body;

        var user =await User.findOne({name: name});
        if(user==null){
            return res.status(400).json({ message: "Invalid name" });
        }
        if(((user.password)!=password)){
            return res.status(400).json({ message: "Invalid password" });
        }

        //loacl store
        currId= user._id;
        
        res.json({ message: "Logged In successfully", id: currId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//create
router.post("/create", async (req, res) => {
    try {
        //join
        if (currId==null) {
            return res.status(400).json({ message: "Not logged in" });
        } else {
            const { teamName } = req.body;
            const team = new Team({ teamName: teamName });
            await team.save();
            team.members.push(currId);
            await team.save();
            res.json({ message: "Team created successfully", team });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//all teams
router.get("/join", async (req, res) => {
    try {
        const teams = await Team.find()
        res.json(teams);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//display
router.get("/join/:teamIn", async (req, res) => {
    try {
        const teamIn= req.params.teamIn;
        const teamMembers= [];

        const team = await Team.findOne({teamName:teamIn});
        if (!team) return res.status(404).json({ error: "Team not found" });

        for(let i= 0; i<team.members.length; i++){
            var tmp= await User.findById(team.members[i]);
            teamMembers.push(tmp.name);
        }

        res.json({teamMembers});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


//join
router.post("/join/:teamIn", async (req, res) => {
    try {
        const teamIn= req.params.teamIn;

        const currUser= await User.findById(currId);
        const team = await Team.findOne({teamName:teamIn});
        if (!team) return res.status(404).json({ error: "Team not found" });

        if (currId==null) {
            return res.status(400).json({ message: "Not logged in" });
        }

        // repeat check
        if (team.members.includes(currUser)) {
            return res.status(400).json({ message: "User already in team" });
        }

        team.members.push(currUser);
        await team.save();

        res.json({ message: "User joined the team", team });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//all users
router.get("/allUsers", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
