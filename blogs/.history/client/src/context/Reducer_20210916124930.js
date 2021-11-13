const Reducer = (state, action) => {

    switch(action.type){

        case "LOGIN_START" : return {
            user : null,
            isFetching : true,
            error : false
        };
        case "LOGIN_SUCCESS" : return {
            
        };
        case "LOGIN_FAILURE": return {

        };
        default : return (state);
}