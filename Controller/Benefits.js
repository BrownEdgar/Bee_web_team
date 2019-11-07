class BenefitsController{
  async  getBenefits(req,res){
        try {
            const benefit = await req.app.sevices.benefits.getBenefits(req.params.id);
            res.send(benefit);
        } catch (error) {
            res.send(error.message);
        }
   } 
}
module.exports= BenefitsController;