const validate = (formulario)=>{
    let errors= {};
    if(!formulario.name){
        errors.name="Your breed must be a name";
    }
    else if (!isNaN(parseInt(formulario.name))){
        errors.name="Your breed must be a name";
    }
    else if(formulario.name.length>15){
        errors.name="This name is too long, take it easy bro"
    }
    else if(!formulario.heightMin){
        errors.heightMin="Min required"
    }
    else if(isNaN(parseInt(formulario.heightMin))){
        errors.heightMin="Must be a number"
    }
    else if(formulario.heightMin<=0){
        errors.heightMin="Must be higher than zero"
    }
    else if(parseInt(formulario.heightMin)>=parseInt(formulario.heightMax)){
        errors.heightMin="Min height must be lower than Max height"
    }
    else if(!formulario.heightMax){
        errors.heightMin="Min required"
    }
    else if(isNaN(parseInt(formulario.heightMax))){
        errors.heightMin="Must be a number"
    }
    else if(formulario.heightMin>150){
        errors.heightMin="Must be higher than zero"
    }
    else if(!formulario.weightMin){
        errors.weightMin="Min required"
    }
    else if(isNaN(parseInt(formulario.weightMin))){
        errors.weightMin="Must be a number"
    }
    else if(formulario.weightMin<=0){
        errors.weightMin="Must be higher than zero"
    }
    else if(parseInt(formulario.weightMin)>=parseInt(formulario.weightMax)){
        errors.weightMin="Min weight Must be lower than Max weight"
    }
    else if(!formulario.weightMax){
        errors.weightMin="Min required"
    }
    else if(isNaN(parseInt(formulario.weightMax))){
        errors.weightMin="Must be a number"
    }
    else if(formulario.weightMin>250){
        errors.weightMin="Must be higher than zero"
    }
    else if (!formulario.lifeSpan) {
        errors.lifeSpan = 'Life span is required!!';
    }
    else if (isNaN(parseInt(formulario.lifeSpan))) {
        errors.lifeSpan = 'Life span should be a number';
    }
    else if (formulario.lifeSpan > 50) {
        errors.lifeSpan = 'Saddly, dogs don´t live that long 😥';
    }
    else if (formulario.lifeSpan <= 0) {
        errors.lifeSpan = 'You don´t want your dog to live???? 😮';
    }
    return errors
}
export default validate;