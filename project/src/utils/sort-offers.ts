import {SortType} from '../const/const';
import {Offers} from '../types/offers';

export default function sortOffers(array:Offers,sortType:string):Offers {
  switch (sortType) {
    case SortType.HighToLow:
      array.sort((a, b)=>{
        if (a.price>b.price){
          return -1;
        }
        if (a.price<b.price){
          return 1;
        }
        return 0;
      });
      break;
    case SortType.LowToHigh:
      array.sort((a, b)=>{
        if (a.price<b.price){
          return -1;
        }
        if (a.price>b.price){
          return 1;
        }
        return 0;
      });
      break;
    case SortType.TopRated:
      array.sort((a, b)=>{
        if (a.rating>b.rating){
          return -1;
        }
        if (a.price<b.price){
          return 1;
        }
        return 0;
      });
      break;
  }
  return (array);
}
