const { Router } = require('express');
const { getPlan, savePlans, deletPlan, editPlan } = require('./PlanController');

const router = Router();

router.get('/', getPlan)
router.post('/savePlans', savePlans)
router.post('/deletPlan', deletPlan)
router.post('/editPlan', editPlan)

module.exports = router;