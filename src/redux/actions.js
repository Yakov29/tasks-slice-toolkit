export const addTask = (value) => {
    return {
        type: "addTask",
        payload: {
            text: value,
            complated: false,
        }
    }
}