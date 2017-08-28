import pantsImage from '../images/pants.png';
import shirtImage from '../images/shirt.png';
import skirtImage from '../images/skirt.png';
import dressImage from '../images/dress.png';
import suitImage from '../images/suit-jacket.png';
import tieImage from '../images/tie.png';

export default function(){
  return {garments: [
    {
      id: 1,
      title: 'Pants',
      image: pantsImage,
      weight: 680
    },
    {
      id: 2,
      title: 'Shirt',
      image: shirtImage,
      weight: 230
    },
    {
      id: 3,
      title: 'Skirt',
      image: skirtImage,
      weight: 340
    },
    {
      id: 4,
      title: 'Dress',
      image: dressImage,
      weight: 340
    },
    {
      id: 5,
      title: 'Suit Jacket',
      image: suitImage,
      weight: 710
    },
    {
      id: 6,
      title: 'Neck Tie',
      image: tieImage,
      weight: 115
    }
  ]}
}
