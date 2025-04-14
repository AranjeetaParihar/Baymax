import { CommonActions,createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export async function navigate(routeName:string,params?:object) {
    navigationRef.isReady();
    if(navigationRef.isReady()){
        navigationRef.dispatch(CommonActions.navigate(routeName,params))
    }
}

export async function resetAndNavigate(routeName:string) {
    navigationRef.isReady();
    // don’t attempt navigation before the navigation system is initialized
    if(navigationRef.isReady()){
        // clears the entire navigation history and replaces it with a new stack 
        navigationRef.dispatch(CommonActions.reset({
            index:0,routes:[{name:routeName}]
        }))
    }
}