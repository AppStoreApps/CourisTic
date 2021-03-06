/**
 * Learn more on about this class structure on :
 * https://developers.google.com/places/web-service/details?hl=fr#PlaceDetailsResults
 */

import  { GooglePlaceApiPhoto   }            from    './googleplaceapi-photo.model';
import  { GooglePlaceApiAdressComponent  }   from    './googleplaceapi-adresscomponent.model';
import  { GooglePlaceApiLocation    }        from    './googleplaceapi-location.model';
import  { GooglePlaceApiGeometry    }        from    './googleplaceapi-geometry.model';
//import  { GooglePlaceApiService }          from    '../services/googleplaceapi.service';

export class GooglePlaceApiResult {

    name: string;
    types: string[];
    
    vicinity: string;
    formatted_address: string;
    formatted_phone_number: string;
    international_phone_number: string;
        
    icon: string;
    scope: string;
    place_id: string;
    rating: number; 
    price_level: number; 

    url: string;
    website: string;

    geometry : GooglePlaceApiGeometry;
    adress_components: GooglePlaceApiAdressComponent[];
    photos: GooglePlaceApiPhoto[];
    
    //The main picture is the first photo on photos array
    reference_to_main_Image: string;
    url_to_main_Image: string;

}