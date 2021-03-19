import {StyleSheet} from "react-native"
import colors from "../../styles/colors"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.themeColor,
        justifyContent: "flex-end"
    },
    innerContainer: {
        flex: 0.85,
        // backgroundColor: "blue",
        alignItems: "center"
    },
    bottomButton: {marginHorizontal: 15, backgroundColor: colors.white, marginBottom: 55, width: "80%", paddingVertical: 15, justifyContent: "center", alignItems:"center", borderRadius: 15},
    bottonButtonText: {fontWeight: "bold", color: colors.whiteBtnText}
})