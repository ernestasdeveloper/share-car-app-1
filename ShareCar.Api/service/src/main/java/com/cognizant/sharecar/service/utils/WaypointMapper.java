package com.cognizant.sharecar.service.utils;

import com.cognizant.sharecar.api.model.dto.WaypointView;
import com.cognizant.sharecar.repository.entity.Waypoint;

public class WaypointMapper {

    public static Waypoint mapViewToEntity(WaypointView waypointView){
        return new Waypoint(waypointView.getName(),
                waypointView.getLongitude(),
                waypointView.getLatitude());
    }

    static WaypointView mapEntityToView(Waypoint waypoint){
        return new WaypointView(waypoint.getName(),
                waypoint.getLongitude(),
                waypoint.getLatitude());
    }
}
