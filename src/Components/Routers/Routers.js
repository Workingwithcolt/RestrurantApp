import { Route, Routes } from "react-router-dom";
import GenericLayout from "../GenericComponents/Layout/GenericLayout";
import PageNotFound from "../Errors/PageNotFound";
import { NEW_RESTRAURANT, RESTRAURANTS, EDIT_RESTRAURANT, PRODUCT_TYPE_FINISHED, } from "../../Helpers/ConstantProperties";
import CreateRestraurant from "../Restraurant/createRestraurant";
import { ManageRestraurant } from "../Restraurant/ManageRestraurant";
import { EditRestraurant } from "../Restraurant/EditRestraurant";


function Routers() {
    return (
        <Routes>

            <Route
                path="*"
                element={
                    <PageNotFound />
                }
            />


            <Route
                path={RESTRAURANTS}
                element={
                    <GenericLayout
                        Component={<ManageRestraurant productType={PRODUCT_TYPE_FINISHED} />}
                    />
                }
            />

            <Route
                path={NEW_RESTRAURANT}
                element={
                    <GenericLayout
                        Component={<CreateRestraurant />}
                        needsFirmSelected={false}
                    />
                }
            />

            <Route
                path={EDIT_RESTRAURANT}
                element={
                    <GenericLayout
                        Component={<EditRestraurant />}
                        needsFirmSelected={false}
                    />
                }
            />



        </Routes>
    );
}

export default Routers;
