import React from "react";
import { TouchableOpacityProps,TextInputProps } from "react-native";

declare interface ButtonProps extends TouchableOpacityProps{
    title:string;
    bg?:"primary"|"secondary"|"danger"|"outline"|"success";
    textColor?:"primary"|"secondary"|"danger"|"default"|"success";
    IconLeft?:React.ComponentType<any>;
    IconRight?:React.ComponentType<any>;
    className?:string;
}

declare interface TextInputProps extends TextInputProps{
    label?:string;
    placeholder:string;
    iconLeft?:any;
    iconRight?:any;
    iconRightPress?:any;
    secureTextEntry?:boolean;
    TextInputStyle?:any;
}



declare interface Ride {
    origin_address: string;
    destination_address: string;
    origin_latitude: number;
    origin_longitude: number;
    destination_latitude: number;
    destination_longitude: number;
    ride_time: number;
    fare_price: number;
    payment_status: string;
    driver_id: number;
    user_email: string;
    created_at: string;
    driver: {
        first_name: string;
        last_name: string;
        car_seats: number;
    };
}


declare interface RideCardType {
    ride_id: string;
    origin_address: string;
    destination_address: string;
    origin_latitude: string;
    origin_longitude: string;
    destination_latitude: string;
    destination_longitude: string;
    ride_time: number;
    fare_price: string;
    payment_status: string;
    driver_id: number;
    user_id: string;
    created_at: string;
    driver: {
      first_name: string;
      last_name: string;
      profile_image_url: string;
      car_image_url: string;
      car_seats: number;
      rating: string;
    };
  }