const {Router} = require('express');
const router =  Router();
const { unlink }= require('fs-extra')
const path = require('path')

const Gallery = require('../models/galleries');

router.get('/', async (req,res) => {
  const gallery = await Gallery.find();
  res.json(gallery);
});

router.post('/', async (req,res) => {
    const { name, isbn,country} =  req.body;
    const imagePath= "/uploads/" + req.file.filename;
    console.log(req.body);
    const newGallery = new Gallery({ name,isbn ,country,imagePath });
    await newGallery.save();
    console.log(newGallery);
    // res.send('received heheh!!!') ;
    res.json({message:"insert successful.."})
});

router.delete('/:id', async (req,res) =>{
    // console.log(req.params.id);
    // const delGallery = await Gallery.findByIdAndDelete(req.params.id);
   const paseo = await Gallery.findByIdAndDelete(req.params.id);
   unlink(path.resolve('./Backend/public'+paseo.imagePath)) 
   // console.log(delGallery);
    // res.send("deleting");
    res.json({message:"galery deleted"})
})
// router.get('/',(req, res) => res.json({text : 'Eso Perro'}));
module.exports =  router;