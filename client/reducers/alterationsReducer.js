import takeUpPantHemImage from '../images/how_to_pin/take-up-pant-hem.png';
import taperPantLegImage from '../images/how_to_pin/taper-pant-leg.png';
import pantsSeatWaistbandTakenInImage from '../images/how_to_pin/pants-seat-waistband-taken-in.png';
import shirtSleevesLengthTakenUp from '../images/how_to_pin/shirt-sleeves-length-taken-up.png';
import shirtSleevesTakenIn from '../images/how_to_pin/shirt-sleeves-taken-in.png';
import shirtHemTakenUp from '../images/how_to_pin/shirt-hem-taken-up.png';
import shirtShouldersTakenIn from '../images/how_to_pin/shirt-shoulders-taken-in.png';
import shortenSkirt from '../images/how_to_pin/shorten-skirt.png';
import takeInSkirt from '../images/how_to_pin/take-in-skirt.png';
import shortenDress from '../images/how_to_pin/shorten-dress.png';
import takeInDress from '../images/how_to_pin/take-in-dress.png';
import shortenFromDressShoulders from '../images/how_to_pin/shorten-from-dress-shoulders.png';
import shortenJacketLength from '../images/how_to_pin/shorten-jacket-length.png';
import shortenSleeveLength from '../images/how_to_pin/shorten-sleeve-length.png';
import jacketSidesTakenIn from '../images/how_to_pin/jacket-sides-taken-in.png';
import jacketSleevesTakenIn from '../images/how_to_pin/jacket-sleeves-taken-in.png';
import shortenTie from '../images/how_to_pin/shorten-tie.png';

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
    {
      id: 15,
      garmentId: 3,
      title: 'Shorten Skirt Length',
      price: 24.00,
      howToPin: shortenSkirt
    },
    {
      id: 16,
      garmentId: 3,
      title: 'Take In Waist',
      price: 30.00,
      howToPin: takeInSkirt
    },
    {
      id: 17,
      garmentId: 4,
      title: 'Shorten Dress Length',
      price: 24.00,
      howToPin: shortenDress
    },
    {
      id: 18,
      garmentId: 4,
      title: 'Take In Waist',
      price: 30.00,
      howToPin: takeInDress
    },
    {
      id: 19,
      garmentId: 4,
      title: 'Shorten Dress Shoulder Straps',
      price: 15.00,
      howToPin: shortenFromDressShoulders
    },
    {
      id: 20,
      garmentId: 5,
      title: 'Shorten Jacken Length',
      price: 70.00,
      howToPin: shortenJacketLength
    },
    {
      id: 21,
      garmentId: 5,
      title: 'Shorten Sleeve Length - From Wrist',
      price: 40.00,
      howToPin: shortenSleeveLength
    },
    {
      id: 22,
      garmentId: 5,
      title: 'Shorten Sleeve Length - From Shoulder',
      price: 85.00,
      howToPin: shortenSleeveLength
    },
    {
      id: 23,
      garmentId: 5,
      title: 'Jacket Sides Taken In',
      price: 50.00,
      howToPin: jacketSidesTakenIn
    },
    {
      id: 24,
      garmentId: 5,
      title: 'Jacket Sleeves Taken In',
      price: 50.00,
      howToPin: jacketSleevesTakenIn
    },
    {
      id: 25,
      garmentId: 6,
      title: 'Shorten Tie Length',
      price: 25.00,
      howToPin: shortenTie
    },
    {
      id: 26,
      garmentId: 6,
      title: 'Narrow Tie Width',
      price: 25.00,
      howToPin: shortenTie
    },
    {
      id: 27,
      garmentId: 6,
      title: 'Shorten and Narrow',
      price: 35.00,
      howToPin: shortenTie
    },
  ]};
}
