import { useState } from "react";
import ShowData from "./ShowData";
import { FETCHING_ITEMS_LIMIT } from "../../../Helpers/helpers";
import UseInfiniteQueryFunction from "./UseInfiniteQueryFunction";
import GenericHeader from "../Header/GenericHeader";
import { useNavigate } from "react-router-dom";
import DataviewGrids from "./DataviewGrids";

function DataView(props) {
    // As the limitSupported prop is a bool type, we need to check for undefined
    // otherwise ... undefined and 'false' both will rexturn the same results.
    var limitSupported = props.limitSupported !== undefined ? props.limitSupported : true;

    const queryFunction = async ({ pageParam = 0 }) => {
        return await props.queryFunctionParameter(pageParam)
    }

    const infiniteQueryProps = {
        queryKeyParameter: props.queryKeyParameter,
        queryFunction: queryFunction,
        limitSupported: limitSupported,
        filterData: props.filterData
    };

    var { data, error, loading, fetchNextPage, canFetchData, fetchOnScroll } = UseInfiniteQueryFunction(infiniteQueryProps);


    //we have to find a way to remove this states from here
    //whenever we call this states UseInfiniteQuery is called
    //now, the data is coming from cache that'sWhy we'r not getting any effect.
    const [searchString, setSearchString] = useState("");
    const [selectedItem, setSelectedItem] = useState(undefined);
    const navigate = useNavigate();

    if (!props.getSearchableValue && !props.hideSearch) {
        return (
            <div className="alert alert-danger" role="alert">
                Value for getSearchableValue is required.
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-3">
                <div className="alert alert-danger" role="alert" >
                    {error}
                </div>
            </div>
        )
    }

    if (data && searchString !== "") {
        data = data.filter((current) => {
            var valueToSearchIn = props.getSearchableValue(current).toLowerCase();
            var valueToSearch = searchString.toLowerCase();

            return valueToSearchIn.includes(valueToSearch);
        })
    }

    if (data?.length === 0 && canFetchData) {
        fetchNextPage();
    }

    if (data?.length < FETCHING_ITEMS_LIMIT && canFetchData) {
        fetchNextPage();
    }

    const buttonProps = props.buttonDetails ? {
        onButtonClick: () => navigate(props.buttonDetails.navigateTo),
        buttonText: props.buttonDetails?.text || "+ Add"
    } : {}
    //it enable for flexible use of the button in dataview

    return (
        <div className="d-flex flex-column gap-2  heightAndOverflow container">
            <div className={`${selectedItem && props.DetailsElement ? 'd-none' : ""}`}>
                <GenericHeader
                    title={props.routeDetails.heading}
                    textFieldLabel={props.searchingPlaceholder}
                    setSearchString={setSearchString}
                    {
                    ...buttonProps
                    }
                />
            </div>
            <div className="flex-grow-1 overflow-auto " ref={props.refrance}>
                <ShowData
                    showSkeleton={loading}
                    extraCss={props.extraCss}
                    selectedItem={selectedItem}
                    setSelected={setSelectedItem}
                    data={data}
                    ShowElement={props.ShowElement}
                    DetailsElement={props.DetailsElement}
                    onScroll={fetchOnScroll}
                    DisplayComponent={props.DisplayComponent ? props.DisplayComponent : DataviewGrids}
                />
            </div>
        </div>

    )
}

export default DataView;