var express = require('express');
var router = express.Router();
var Student = require('../models/student');

/* Get a name */
router.get('/',function(req,res,next){
  Student.find({},function(err,student){
    if(err){ console.log(err); }

    res.json(student);
  });
});

/* Add a name */
router.post('/',function(req,res,next){

  var newStudent = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  newStudent.save(function(err, post){
    if(err){
      res.status(500).send({
        status: 'Error',
        error: err
      });
    } else {
      res.status(200).json({
        status: 'OK',
        student: student
      })
    }
  });
});


/* Update a name */
router.patch('/',function(req,res,next){
  Student.findById(req.body.id , function(err,student){
    if(err) console.log(err);

    student.firstName = req.body.firstName || student.firstName;
    student.lastName = req.body.lastName || student.lastName;

    student.save(function(err,student){
      if(err) console.log(err);

      res.json({
        status: 'updated!',
        updated_student: student
      });
    });

  });
});


/* Delete a name*/
router.delete('/',function(req,res,next){

  Student.findByIdAndRemove(req.body.id,function(err,student){
    if(err) console.log(err);
    res.json({
      status: 'deleted!',
      student: student
    });
  });

});

module.exports = router;
