class BenefitsController{
    constructor(models){
        this.models = models;
    }
   async getBenefit(_id){
        let benefit = await this.models.benefits.findOne({_id})
        if(!benefit){
            throw new Error("Benefit not found");
        }
        return benefit;
    }
}
module.exports = BenefitsController;