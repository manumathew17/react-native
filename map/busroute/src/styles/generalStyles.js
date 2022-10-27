import {
    StyleSheet,
    Dimensions,
  } from 'react-native';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  export default StyleSheet.create({
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
      center_container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        flexDirection: 'column', 
        alignItems: 'center'
        
      },
      logo: {
        width: 70,
        height: 70,
        resizeMode: 'contain'
      },
  
      generalBtn:{
        width:"80%",
        backgroundColor:"#2cbf5e",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        color:"black"
      },
      generalBtnText:{
        fontSize: 16,
        fontWeight: '600',
        color:"black",
        fontWeight: 'bold'
      },
  
  
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"},
  
        dashBoardHeader:{
          width:windowWidth,
          height:windowHeight*0.1,
          backgroundColor:"#2cbf5e",
          justifyContent: "center",
          alignItems: "center"
  
        },
        blackLogo: {
          width: 70,
          height: 70,
          resizeMode: 'contain',
          tintColor:"black"
        },
  
        rowSpaceEvenly:{
          justifyContent: "space-evenly", 
          flexDirection: "row"
        },
        square: {
          width: 100,
          height: 100,
          borderRadius: 13,
          backgroundColor: "rgba(44, 191, 94, 0.2)"
        },
        blueContainer:
        {
          height: 100,
          borderRadius: 13,
          marginHorizontal:20,
          marginVertical:20,
          backgroundColor: "rgba(82, 37, 180, 0.2)"
        },
  
        generalCard : {
          
          borderRadius: 8,
          backgroundColor: "#ffffff",
          elevation: 20
        },
        generalCardHeader:{
          height: 32,
          borderTopLeftRadius:8,
          borderTopRightRadius:8,
          justifyContent:"center",
          backgroundColor: "rgba(0, 0, 0, 0.08)"
        },
  
        generalHeaderBlueText:{
          fontSize: 12,
          fontWeight: "bold",
          fontStyle: "normal",
          letterSpacing: 0,
          textAlign: "left",
          color: "#5225b4"
        },
  
        generalBlackContainerWithText:{
          padding:5,
          flexWrap:"wrap",
          alignSelf:'baseline',
          justifyContent:"center",
          borderRadius: 6.3,
          backgroundColor: "#000000",
          fontSize: 15.6,
          fontWeight: "bold",
          fontStyle: "normal",
          letterSpacing: 0,
          textAlign: "left",
          color: "#ffffff"
        },
        generalBlackText:{
          fontSize: 12,
          fontWeight: "bold",
          fontStyle: "normal",
          letterSpacing: 0,
          textAlign: "left",
          color: "#000000"
        },
        generalGreyText:{
          fontSize: 12,
          fontWeight: "bold",
          fontStyle: "normal",
          letterSpacing: 0,
          textAlign: "left",
          color: "#7f7f7f"
        },
        generalDivider:{
          height: 1,
          opacity:5,
          borderStyle: "solid",
          borderWidth: 0.5,
          borderColor: "#b2b2b2"
        }
  
    });