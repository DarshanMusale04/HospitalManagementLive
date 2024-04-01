import { LightningElement } from 'lwc';

export default class PatientParent extends LightningElement {
   
        searchTextParent;
    
        handleEvent(event){
            this.searchTextParent= event.detail;
        }
}
