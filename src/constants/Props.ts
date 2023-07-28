import {NavigationProp, ParamListBase} from '@react-navigation/native';

export interface HomeScreenProps {
    navigation: NavigationProp<ParamListBase>
  };

  export interface Post_Props{
    body:string;
    userId:number;
    id:number;
    title:string;
}