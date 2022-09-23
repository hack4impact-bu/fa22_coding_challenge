const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/* CREATE 'PUT' REQUEST */
router.put("/update:id", async(req,res)=>{
  try{
    const {id} = req.params
    const newTask = await Task.findById(id)
    newTask.text = req.body.text
    await newTask.save()
    res.json(newTask)
  } catch(error){
    res.status(404).json({error})
  }
})
/* CREATE 'DELETE' REQUEST */
router.delete("/delete:id", async(req,res)=>{
  
})
module.exports = router;
