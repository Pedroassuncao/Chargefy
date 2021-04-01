import Pce from '../models/Pce';
import imagesView from './images_view';

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
             images: imagesView.renderMany(pce.images)
        };
    },


    renderMany(pces: Pce[]) {
        return pces.map(pce => this.render(pce));
    }

};