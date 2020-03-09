const {Router} = require('express');
const router =  Router();

const Gallery = require('../models/galleries');

router.get('/', async (req,res) => {
  const gallery = await Gallery.find();
  res.json(gallery);
});

router.post('/', async (req,res) => {
    const { name, isbn,country} =  req.body;
    console.log(req.body);
    const newGallery = new Gallery({name,isbn ,country});
    await newGallery.save();
    console.log(newGallery);
    // res.send('received heheh!!!') ;
    res.json({message:"insert successful.."})
});

router.delete('/:id', async (req,res) =>{
    // console.log(req.params.id);
    // const delGallery = await Gallery.findByIdAndDelete(req.params.id);
    await Gallery.findByIdAndDelete(req.params.id);
    // console.log(delGallery);
    // res.send("deleting");
    res.json({message:"galery deleted"})
})
// router.get('/',(req, res) => res.json({text : 'Eso Perro'}));
module.exports =  router;