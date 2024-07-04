const express=require('express');
const { getCountries, getStatesByCountry, getCitiesByState } = require('../controllers/locationController');
const router=express.Router();

router.get('/getCountries', async(req,res)=>{
    try {
        const ans=await getCountries({...req.query});

        if(!ans.status)
        {
            return res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        res.status(400).json({status: false, message: error?.message});
    }
});
router.get('/getStatesByCountry', async(req,res)=>{
    try {
        const ans=await getStatesByCountry({...req.query});

        if(!ans.status)
        {
            return res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        res.status(400).json({status: false, message: error?.message});
    }
});
router.get('/getCitiesByState', async(req,res)=>{
    try {
        const ans=await getCitiesByState({...req.query});

        if(!ans.status)
        {
            return res.status(400).json(ans);
        }
        res.json(ans);
    } catch (error) {
        res.status(400).json({status: false, message: error?.message});
    }
});

module.exports=router;
