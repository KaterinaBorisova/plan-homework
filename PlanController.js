const PlanModel = require('./PlanModel')

module.exports.getPlan = async (req, res) => {
   const myPlan = await PlanModel.find();
   res.send(myPlan)
}

module.exports.savePlans = async (req, res) => {
   const { title } = req.body;
   PlanModel.create({ title })
      .then((data) => {
         console.log('Plan added')
         res.send(data)
      })
}

module.exports.deletPlan = async (req, res) => {
   const { _id } = req.body
   PlanModel.findByIdAndDelete(_id)
      .then(() => res.send('Delete a plan'))
}

module.exports.editPlan = async (req, res) => {
   const { _id, title } = req.body
   PlanModel.findByIdAndUpdate(_id, { title })
      .then(() => res.send('Edited'))
}