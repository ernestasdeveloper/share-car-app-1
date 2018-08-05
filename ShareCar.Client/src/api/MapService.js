// @flow

export interface MapService {
    getNearestLocation(coord: Coord4326): Promise<Coord4326>;
}