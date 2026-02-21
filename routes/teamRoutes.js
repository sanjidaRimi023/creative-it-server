const express = require('express');
const router = express.Router();
const { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember } = require('../controller/teamController');
const verifyAdmin = require('../middleware/authMiddleware');

// Map HTTP methods to team controller functions
router.get('/', getTeamMembers);
router.post('/', verifyAdmin, createTeamMember);
router.put('/:id',verifyAdmin, updateTeamMember);
router.delete('/:id',verifyAdmin, deleteTeamMember);

module.exports = router;