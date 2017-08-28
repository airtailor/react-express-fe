import takeUpPantHemImage from '../images/how_to_pin/take-up-pant-hem.png';
import taperPantLegImage from '../images/how_to_pin/taper-pant-leg.png';
import pantsSeatWaistbandTakenInImage from '../images/how_to_pin/pants-seat-waistband-taken-in.png';
import shirtSleevesLengthTakenUp from '../images/how_to_pin/shirt-sleeves-length-taken-up.png';
import shirtSleevesTakenIn from '../images/how_to_pin/shirt-sleeves-taken-in.png';
import shirtHemTakenUp from '../images/how_to_pin/shirt-hem-taken-up.png';
import shirtShouldersTakenIn from '../images/how_to_pin/shirt-shoulders-taken-in.png';

export default function(){
 return  { alterations: [
    {
      id: 1,
      garmentId: 1,
      title: 'Shorten Pant Length - Regular Hem',
      price: 15.50,
      howToPin: takeUpPantHemImage
    },
    {
      id: 2,
      garmentId: 1,
      title: 'Shorten Pant Length - Original Hem',
      price: 24.00,
      howToPin: takeUpPantHemImage
    },
    {
      id: 3,
      garmentId: 1,
      title: 'Shorten Pant Length - Blind Stitch Hem',
      price: 15.50,
      howToPin: takeUpPantHemImage
    },
    {
      id: 4,
      garmentId: 1,
      title: 'Shorten Pant Length - Cuffed Hem',
      price: 24.00,
      howToPin: takeUpPantHemImage
    },
    {
      id: 5,
      garmentId: 1,
      title: 'Slim Pants Legs (Taper)',
      price: 24.00,
      howToPin: taperPantLegImage
    },
    {
      id: 6,
      garmentId: 1,
      title: 'Seat / Waistband Taken In — Pants',
      price: 24.00,
      howToPin: pantsSeatWaistbandTakenInImage
    },
    {
      id: 7,
      garmentId: 1,
      title: 'Seat / Waistband Taken In — Jeans',
      price: 50.00,
      howToPin: pantsSeatWaistbandTakenInImage
    },
    {
      id: 8,
      garmentId: 2,
      title: 'Shirt Sleeves Length Taken Up — With Cuff',
      price: 25.00,
      howToPin: shirtSleevesLengthTakenUp
    },
    {
      id: 9,
      garmentId: 2,
      title: 'Shirt Sleeves Length Taken Up — Without Cuff',
      price: 15.50,
      howToPin: shirtSleevesLengthTakenUp
    },
    {
      id: 10,
      garmentId: 2,
      title: 'Shirt Sleeves Taken In',
      price: 24.00,
      howToPin: shirtSleevesTakenIn
    },
    {
      id: 11,
      garmentId: 2,
      title: 'Shirt Side Seams Taken In',
      price: 25.00,
      howToPin: shirtSleevesTakenIn
    },
    {
      id: 12,
      garmentId: 2,
      title: 'Shorten Dress Shirt Length',
      price: 24.00,
      howToPin: shirtHemTakenUp
    },
    {
      id: 13,
      garmentId: 2,
      title: 'Shorten T-Shirt Length',
      price: 15.50,
      howToPin: shirtHemTakenUp
    },
    {
      id: 14,
      garmentId: 2,
      title: 'Shirt Shoulders Taken In',
      price: 35.00,
      howToPin: shirtShouldersTakenIn
    },
  ]};
}
