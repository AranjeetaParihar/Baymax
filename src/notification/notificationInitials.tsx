import notifee from "@notifee/react-native";

export const addBadgeCount = async() =>{
    notifee.setBadgeCount(1).then(()=>console.log("Badge count")
    )
}

export const displayNotification = async(
    title : string,
    message : string,
    image : string,
    categoryId : string
) => {
    const channelId = await notifee.createChannel({
        id:"Default",
        name:"Default Channel",
        sound:"notification"
    })

    await notifee.displayNotification({
        title:title,
        body:message,
        android:{
            channelId:channelId,
            sound:"notification",
            onlyAlertOnce: true
        }
    })
}