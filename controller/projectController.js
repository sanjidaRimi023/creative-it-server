const Project = require("../models/Project");

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch {
    res.status(500).json({message: "Server error: fail to fetch project"})
  }
};

const createProject = async (req, res)=>{
    try{
        const newProject = new Project(req.body);
        const saveProject = await newProject.save();
        res.status(201).json(saveProject)

    }
    catch{
        res.status(400).json({messge:"bad requestL could not create project"})
    }
}
const deleteProject = async(req, res)=>{
   try{
    const deletedProject = await Project.findByIdAndDelete(req.params.id)
    if(!deletedProject) return res.status(404).json({message: "project not found"})
        res.status(200).json({message: "project deleted successfully"})

   }
   catch{
    res.status(500).json({ message: 'Error deleting project', error: error.message });
   }
}

const updateProject = async (req, res) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true, runValidators: true } // Returns the updated document and runs schema validation
        );
        if (!updatedProject) return res.status(404).json({ message: 'Project not found' });
        res.status(200).json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: 'Error updating project', error: error.message });
    }
}

module.exports = {getProjects, createProject, deleteProject, updateProject}