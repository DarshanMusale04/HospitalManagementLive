public with sharing class NewPatient {
    @AuraEnabled
    public static List<New_Patient__c> searchPatientRecord(Date toDate){
        try {
            if(todate != null){
                return [Select Id,Name, Name__c,Sex__c,Email_Id__c,Consultant__c,Mobile_No__c,CreatedDate from New_Patient__c where CreatedDate<=: toDate];

            }
            else{
                return null;

            }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}