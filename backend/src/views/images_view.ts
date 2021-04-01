import Image from '../models/Image';

export default {
    render(image: Image) {
        return{
             id : image.id,
             url: `http://localhost:3333/uploads/${image.path}`, // com este link so funciona localmente, tera de ser adaptado para funcionar em desenvolvimento

        };
    },


    renderMany(image: Image[]) {
        return image.map(image => this.render(image));
    }

};