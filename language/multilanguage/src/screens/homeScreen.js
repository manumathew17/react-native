import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';






const HomeScreen = ({ navigation }) => {
    const {t, i18n} =useTranslation()

    return (
        <SafeAreaView style={styles.container}>


            <View style={styles.topContainer}>
                <Icon name="bicycle" size={30} color="black" />
                <View style={{ width: 5 }} />
                <Text style={styles.normalText}>105 gg</Text>
                <View style={{ width: 10 }} />
                <MaterialCommunityIcons name="star-circle" color={"yellow"} size={30} />
                <View style={{ width: 5 }} />
                <Text style={styles.normalText}>11245 pt</Text>
            </View>
            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1
            }} />
            <View style={styles.containerBlack}>
                <Icon name="bicycle" size={30} color={"white"} />
                <View style={{ flexDirection: "column", alignContent: "center", alignItems: "flex-start", marginLeft: 20 }}>
                    <Text style={[styles.header, { color: "white" }]}>10465 pt</Text>
                    <Text style={[styles.header, { color: "white", fontSize: 12 }]}>{t('start_pedaling_desc')}</Text>

                </View>
            </View>

            <View style={{ flexDirection: "row", marginHorizontal: 20, alignItems: 'center' }}>
                <Text style={styles.normalText}>{t("last_activity")} </Text>
                <Text style={styles.normalText}>  | </Text>
                <Text style={styles.normalText}>9 { t("days_ago")} </Text>
                <View style={{ width: 70 }} />
                <Text style={styles.normalText}>+ 0 pt </Text>
                <MaterialCommunityIcons name="star-circle" color={"yellow"} size={30} />
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>


                <View style={{flex:1, borderColor: 'black', borderWidth: 1, paddingVertical: 20, paddingLeft: 20, paddingRight: 50, borderRadius: 5, marginRight:5 }}>
                    <IonIcon name="location" size={16} color="black" />
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold" }]}>0.0</Text>
                        <Text style={styles.normalText}>  km </Text>
                    </View>
                    <Text style={styles.normalText}>{t("distance")}</Text>

                </View>
                <View style={{flex:1, borderColor: 'black', borderWidth: 1, paddingVertical: 20, paddingLeft: 20, paddingRight: 50, borderRadius: 5, marginLeft:5 }}>
                    <IonIcon name="location" size={16} color="black" />
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold" }]}>0.0</Text>
                        <Text style={styles.normalText}>  km </Text>
                    </View>
                    <Text style={styles.normalText}>{t("time_passed")}</Text>

                </View>
            </View>



            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>


            <View style={{ flex:1,borderColor: 'black', borderWidth: 1, paddingVertical: 20, paddingLeft: 20, paddingRight: 50, borderRadius: 5, marginRight:5 }}>
                    <IonIcon name="location" size={16} color="black" />
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold" }]}>0.0</Text>
                        <Text style={styles.normalText}>  km </Text>
                    </View>
                    <Text style={styles.normalText}>{t("co2_saving")}</Text>

                </View>

                <View style={{flex:1, borderColor: 'black', borderWidth: 1, paddingVertical: 20, paddingLeft: 20, paddingRight: 50, borderRadius: 5 , marginLeft:5}}>
                    <IonIcon name="location" size={16} color="black" />
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Text style={[styles.normalText, { fontSize: 20, fontWeight: "bold" }]}>0.0</Text>
                        <Text style={styles.normalText}>  km </Text>
                    </View>
                    <Text style={styles.normalText}>{t("fuel_saving")} </Text>

                </View>
            </View>




        </SafeAreaView>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    headerText: {
        fontSize: 16,
    },
    topContainer: {
        flexDirection: "row",
        padding: 20,
        alignItems: 'center'
    },

    normalText: {
        color: "black"

    },
    containerBlack: {
        borderRadius: 3,
        backgroundColor: "black",
        margin: 20,
        flexDirection: "row",
        alignItems: 'center',
        padding: 10
    },
    card: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
    },
    title: {
        fontSize: 12,
        fontWeight: "bold",
        fontStyle: "normal",
    },

    header: {
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        color: "black",
        padding: 5
    },
});

export default HomeScreen