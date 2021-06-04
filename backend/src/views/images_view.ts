import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      id: image.id,
       url: `http://172.20.4.223:3333/uploads/${image.path}`,
      // url: `http://localhost:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
