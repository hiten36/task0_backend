const express=require('express');
const { getUsers, postUser, putUser, deleteUser } = require('../controllers/userController');
const router=express.Router();

router.get('/getUsers', async(req,res)=>{
    try {
        const ans=await getUsers({...req.query});

        if(!ans.status)
        {
            res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        res.status(400).json({status: false, message: error?.message});
    }
});

router.post('/postUser', async(req,res)=>{
    try {
        const ans=await postUser({...req.body});

        if(!ans.status)
        {
            res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        console.log(error);
        res.status(400).json({status: false, message: error?.message});
    }
});

router.put('/putUser/:id', async(req,res)=>{
    try {
        const ans=await putUser({...req.body, id: req.params.id});

        if(!ans.status)
        {
            res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        res.status(400).json({status: false, message: error?.message});
    }
});

router.post('/deleteUser', async(req,res)=>{
    try {
        const ans=await deleteUser({...req.body});

        if(!ans.status)
        {
            res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        res.status(400).json({status: false, message: error?.message});
    }
});

module.exports=router;
