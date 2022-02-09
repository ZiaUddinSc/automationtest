import React from 'react'
import {CSVLink} from 'react-csv'
import moment from 'moment';
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

export const rental_fee_calculation = (from_date,to_date,data) => {
    var totalFee=0.0,days=0,start,end;
    if(from_date !='' && to_date!=''){
         start = moment(from_date, "MM-DD-YYYY");
         end = moment(to_date, "MM-DD-YYYY");
        if(end>start){
             days=end.diff(start, 'days')
        
        }
    }
    //Over the Minimum Rental Period discount will be added
    //availabilty for discount
    var discount_rate=0,minimum_rent_period=parseInt(data.minimum_rent_period),price=parseFloat(data.price)
    
    let durability=parseFloat(data.durability)/minimum_rent_period;
    if(durability>0 && data.type===2){
        durability=(durability+10)*days
    }else{
        durability=(durability)*days
    }
    data['durability']=durability
    if(durability>0){
        durability =durability_points(start,end,data)
    }
    if(parseFloat(data.max_durability)>=durability){
        if(days>minimum_rent_period && data.availability && minimum_rent_period>0 ){
            discount_rate=0.05
            let fee=(price/minimum_rent_period)*days
            let discount_price=fee*discount_rate;
            totalFee=fee-discount_price
        }else if(days>0 && days<=minimum_rent_period&& !data.availability && minimum_rent_period>0){
            totalFee=(price/minimum_rent_period)*days
        }
    }
    return totalFee;
}
    



export const durability_points = (from_date,to_date,data) => {
    var points=0.0,days=0;
    if(from_date !='' && to_date!=''){
        var start = moment(from_date, "MM-DD-YYYY");
        var end = moment(to_date, "MM-DD-YYYY");
        if(end>start){
             days=end.diff(start, 'days')
        
        } 
        if(days>0){
            if(data.type==1){
                points +=days*1
            }else if(data.type==2){
                points +=days*2
                if(data.mileage>0 && data.mileage!==''){
                    points+=.2*parseFloat(data.mileage)
                }
            }
            
        }
    }
    return points
     
}