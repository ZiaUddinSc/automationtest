import React from 'react'
import {CSVLink} from 'react-csv'

export const SearchURLGenerate = (parameters,search_key=[]) => {
var  search_url='';
var filter_params={}  
// alert(search_key)
if(search_key.length>0){

    
    

    for (var key in parameters) {
        // console.log("Data",filter_params[key]);
        // console.log(search_key.indexOf(key))
        if ((key, search_key.indexOf(key)) > -1 ) {
            filter_params[key]=parameters[key]
        }       
    }
}else{
    filter_params=parameters   
}
   
//console.log("gsasghf",filter_params.length)
if(Object.keys(filter_params).length>0){

        Object.keys(filter_params).forEach(function(key) {

            if( filter_params[key]!=='' &&  filter_params[key] !== null){
                search_url += key + '=' + filter_params[key] + "&"
                
            }
        
        
        });
        
        if(search_url !== '' && search_url !== null){
            
            search_url = search_url.slice(0, -1) //

        }
}
// alert(search_url)
    // if(parameters.agent_id != '' && parameters.agent_id != null){
   return search_url
       
}

export const findArrayElementByTitle = (array, status) => {

    return array.find((element) => {
      return element.id === status;
    })
  }

export const sumTotalAmount = (oderList) => {
    let totalAmount=0
    if(oderList.length>0){
        totalAmount = oderList.map( ( product ) => {
        return Number(product.subtotal);
        } ).reduce( ( total, current ) => total += current );
    }
    //this.setState( {
    //  totalAmount
    //} );
    return totalAmount;
}
    
export const sumTotalQuantity= (oderList) => {
    let totalQuantity=0
    if(oderList.length>0){
        totalQuantity = oderList.map( ( product ) => {
        return Number(product.quantity);
        } ).reduce( ( total, current ) => total += current );
    }
    //this.setState( {
    //  totalAmount
    //} );
    return totalQuantity;
}

export const ExportReactCSV = ({csvData, fileName}) => {
    return (
            <button className='btn btn-info'>
                
            <CSVLink className='text-white' data={csvData} filename={fileName}>Export</CSVLink>

            </button>
        
    )
}


export const durability_points = (DataList, ActionName,visibilityAction='') => {
    var valid=false;
    if(DataList.length>0){
        let check = DataList.findIndex(o => o.content_type.app_label === ActionName);
    
        if(check>-1&visibilityAction!==''){
            let visibledata = DataList.filter(o => o.content_type.app_label === ActionName);
            var visibility=visibledata.findIndex(o => o.codename === visibilityAction)
            if(visibility>-1){
                valid=true;
            }
        }else if(check>-1&visibilityAction===''){
            valid=true;
        }
    }

    return valid
     
}