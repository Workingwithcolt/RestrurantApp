import { useContext } from 'react';
import { NEW_RESTRAURANT, UPDATE_ON_RESTAURENT, RESTAURENT } from '../../Helpers/ConstantProperties';
import { serviceHelpers } from '../../Helpers/ServiceHelpers';
import DataView from '../GenericComponents/DataView/DataView';
import { AuthContext } from '../Auth/Auth';
import DataviewList from '../GenericComponents/DataView/DataviewList';
import RestraurantCard from './RestraurantCard';

export function ManageRestraurant() {
    const auth = useContext(AuthContext);
    const uid = auth.currentUserObject.uid

    const queryKey = [
        uid,
        UPDATE_ON_RESTAURENT,
        RESTAURENT
    ];

    const queryFunction = async (pageParam) => {
        return await serviceHelpers.getRestraurants(auth, null, pageParam);
    }

    const getSearchableValue = (current) => {
        return (
            current.restaurantEmail + " "
            + current.restaurantName + " "
            + current.phoneNumber + " "
            + current.address
        )
    }

    return (
        <DataView
            routeDetails={{ heading: "Manage Restraurant", subText: "Restraurant" }}
            limitSupported = {true}
            getSearchableValue={getSearchableValue}
            queryKeyParameter={queryKey}
            queryFunctionParameter={queryFunction}
            ShowElement={{ Component: RestraurantCard }}
            searchingPlaceholder={"Search By Restraurant Name, location, phoneNumber, email"}
            DisplayComponent={DataviewList}
            buttonDetails={{ text: "New Restraurant", navigateTo: NEW_RESTRAURANT }}
        />
    );
}


