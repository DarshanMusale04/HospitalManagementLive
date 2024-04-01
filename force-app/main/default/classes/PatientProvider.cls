public with sharing class PatientProvider {
    @AuraEnabled
    public static String getPatientDetails(New_Patient__c objPat ){
    
        try {
            if(objPat !=null){
                insert objPat;
                return 'Record has been Created Successfully..!!';
    
            }
            else {
                return 'Locha';
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            
        }
    
    }
        @AuraEnabled(cacheable=true)
        public static List<New_Patient__c> getPatientRecords(String searchName){
            try {
                if(String.isEmpty(searchName)){
                    return [Select Id, Name__c,Email_ID__c,Sex__c from New_Patient__c];
    
                }
                else {
                    searchName = '%' +searchName+ '%';
                    return [Select Id, Name__c,Email_ID__c,Sex__c from New_Patient__c where Name__c Like :searchName];
    
                }
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
        @AuraEnabled
        public static List<New_Patient__c> fetchFullRecords(New_Patient__c objNewPatient){
            try {
                return[Select Id, Name__c,Sex__c from New_Patient__c ];
                
            } catch (Exception e) {
                throw new AuraHandledException(e.getMessage());
            }
        }
    
    
    }