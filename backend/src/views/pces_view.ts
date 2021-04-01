import Pce from '../models/Pce';

export default {
    render(pce: Pce) {
        return{
             id : pce.id,
             name :  pce.name,
             latitude : pce.latitude,
             longitude : pce.longitude,
             about :  pce.about,
             charger_type : pce.charger_type,
             opening_hours :  pce.opening_hours,
        };
    }
};