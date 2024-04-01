import { LightningElement } from 'lwc';
import  getPatientDetails from '@salesforce/apex/PatientProvider.getPatientDetails';
import { CloseActionScreenEvent} from 'lightning/actions';

export default class Investigation_Chart_LWC extends LightningElement {
    objPatient= { 'sObject' : 'New_Patient__c'}

    handleSave(){
        
        this.objPatient.Name__c = this.template.querySelector('lightning-input[data-formfield="name"]').value;
        this.objPatient.Date__c = this.template.querySelector('lightning-input[data-formfield="date"]').value;
        this.objPatient.Height_cm__c = this.template.querySelector('lightning-input[data-formfield="height"]').value;
        this.objPatient.Weight_Kg__c = this.template.querySelector('lightning-input[data-formfield="weight"]').value;
        this.objPatient.Hb__c = this.template.querySelector('lightning-input[data-formfield="hb"]').value;
        this.objPatient.Blood_Urea__c = this.template.querySelector('lightning-input[data-formfield="bloodurea"]').value;
        this.objPatient.SrCreatinine__c = this.template.querySelector('lightning-input[data-formfield="srcreatinine"]').value;
        this.objPatient.Urine_Protein__c = this.template.querySelector('lightning-input[data-formfield="urineprotein"]').value;
        this.objPatient.Urine_PC__c = this.template.querySelector('lightning-input[data-formfield="urinepc"]').value;
        this.objPatient.Urine_RBC__c = this.template.querySelector('lightning-input[data-formfield="urinerbc"]').value;
        this.objPatient.Urine_Ph__c = this.template.querySelector('lightning-input[data-formfield="24hrurineProteinP:CRatio"]').value;
        this.objPatient.X24_hr_Urine_Protein_P_C_ratio__c = this.template.querySelector('lightning-input[data-formfield="24hrurineProteinP:CRatio"]').value;
        this.objPatient.Serum_Cholesterol__c = this.template.querySelector('lightning-input[data-formfield="serumCholesterol"]').value;
        this.objPatient.Serum_Albumin__c = this.template.querySelector('lightning-input[data-formfield="serumAlbumin"]').value;
        this.objPatient.Other_1__c = this.template.querySelector('lightning-input[data-formfield="other1"]').value;
        this.objPatient.Other_2__c = this.template.querySelector('lightning-input[data-formfield="other2"]').value;




        getPatientDetails({objPat:this.objPatient})

        
        .then((result) =>{
            console.log(result);
        })
        .catch((error) =>{
            console.log(error);

        });
        this.dispatchEvent(new CloseActionScreenEvent());
    }
  

}