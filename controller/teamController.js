const Team = require('../models/Team');

// Fetches all team members
const getTeamMembers = async (req, res) => {
    try {
        const team = await Team.find().sort({ createdAt: 1 });
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching team members', error: error.message });
    }
};

// Creates a new team member
const createTeamMember = async (req, res) => {
    try {
        const newMember = new Team(req.body);
        const savedMember = await newMember.save();
        res.status(201).json(savedMember);
    } catch (error) {
        res.status(400).json({ message: 'Error creating team member', error: error.message });
    }
};

// Updates an existing team member
const updateTeamMember = async (req, res) => {
    try {
        const updatedMember = await Team.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true }
        );
        if (!updatedMember) return res.status(404).json({ message: 'Team member not found' });
        res.status(200).json(updatedMember);
    } catch (error) {
        res.status(400).json({ message: 'Error updating team member', error: error.message });
    }
};

// Deletes a team member
const deleteTeamMember = async (req, res) => {
    try {
        const deletedMember = await Team.findByIdAndDelete(req.params.id);
        if (!deletedMember) return res.status(404).json({ message: 'Team member not found' });
        res.status(200).json({ message: 'Team member deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting team member', error: error.message });
    }
};

module.exports = { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember };