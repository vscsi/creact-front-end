//==== Routers set up ====//

//require modules
const express = require('express');
const router = express.Router();

const taskController = require('../controllers/tasks');

<<<<<<< HEAD
router.get('/workspace/tasks', taskController.getTasks);
=======
router.get('/tasks', taskController.getTasks);
>>>>>>> 4d4330355261cb442a7141899ed2b0c3c0c5bb5b

router.post('/task', taskController.postTask);

router.delete('/tasks/:id', taskController.deleteTasks)


module.exports = router;