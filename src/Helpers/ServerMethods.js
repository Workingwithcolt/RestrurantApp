import { endpoints } from "../firebaseHelper/DBConnector";
import { FETCHING_ITEMS_LIMIT } from "./helpers";

export class serverMethods {

    async getRestraurants(auth, options, pagePraam = 1) {
        var databaseQuery = []
        databaseQuery = [["adminId", "==", auth.currentUserObject.uid]]
        let data = await endpoints.restuarent.getAllDocument(databaseQuery, {
            limit: FETCHING_ITEMS_LIMIT,
            cursor: (pagePraam + 1) * FETCHING_ITEMS_LIMIT,
            orderBy: "restaurantName"
        })
        return data;
    }

    async createResturent(auth, state) {
        state.adminId = auth.currentUserObject.uid;
        return await endpoints.restuarent.addDocument(state);
    }

    async updateRestaurent(auth, state, id) {
        let updateId = await endpoints.restuarent.updateDocument(id, state)
        return { id: updateId }
    }
    async deleteRestaurent(auth, id) {
        return await endpoints.restuarent.deleteDocument(id);
    }

}