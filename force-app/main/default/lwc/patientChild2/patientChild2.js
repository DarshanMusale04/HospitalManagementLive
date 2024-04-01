import { LightningElement,api,wire } from 'lwc';
import getPatientRecords from '@salesforce/apex/PatientProvider.getPatientRecords';
import { MessageContext, publish } from 'lightning/messageService';
import Rio from '@salesforce/messageChannel/Rio__c';



export default class PatientChild2 extends  LightningElement{
    @api searchTextChild2;
    @wire (MessageContext) messageContext;
    record={};
    
//     currentId;
//    currentName;


   

    columns= [
        
        {label:'Patient Name', fieldName:'Name__c', type:'button',
             typeAttributes:{label : {fieldName:'Name__c'}, name: 'urlredirect', variant:'base'  }},
        {label:'Email Id', fieldName:'Email_ID__c'},
        {label:'Sex', fieldName:'Sex__c'},


        {label:'Follow Up', fieldName:'Follow Up', type:'button', typeAttributes:
        {
            label:'Follow Up',
            value: 'view_Patient'
        }
    }
    
    ]
    handleRowAction(event){
        if(event.detail.action.value=='view_Patient'){
            this.currentId = event.detail.row.Id;
            this.currentName = event.detail.row.Name__c;
           
    
            const payLoad= {
                accountId: event.detail.row.Id,
                patienttName: event.detail.row.Name__c
            };
         
    
            publish(this.messageContext,Rio,payLoad);
    
        }
       
        }
        @wire(getPatientRecords, {searchName : '$searchTextChild2'}) patientRecords;

    
       }
    

    


