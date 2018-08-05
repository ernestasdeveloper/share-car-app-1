//@flow

// import { Coordinate } from "ol/coordinate";

type Coord4326 = number[];
type Geometry = string;

type Waypoint = {
    hint: string,
    distance: number,
    name: string,
    location: Coord4326
}

type Route = {
    geometry: Geometry,
    legs: Leg[],
    distance: number,
    duration: number,
    weight_name: string,
    weight: number
}

type Leg = {
    steps: any,
    distance: number,
    duration: number,
    summary: string,
    weight: number
}