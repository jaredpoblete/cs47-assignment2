import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, Image, View, StatusBar, Platform, SafeAreaView, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/
  /* insert your code here */
 
  
 /* I tried making a custom component for the lower Action Bar here, but I didn't know the syntax for passing an Image component through?
  const oneAction = {
    actionImage: '/assets/Icons/discover_light.png',
    actionCopy: 'Discover',
   
  };
  const twoAction = {
    actionImage: './assets/Icons/heart_light.png',
    actionCopy: 'Matches',
    
  };
  
  const threeAction = {
    actionImage: './assets/Icons/messages_light.png',
    actionCopy: 'DMs',
    
  };

  const Action = (props) => {
    return <View style={styles.actionObject}>
      <Image source={require(props.actionImage)} style={styles.actionIcon}/>
        <Text style={styles.actionText}>
          {props.actionCopy}
        </Text>
    </View>;
  };
*/

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navFlex}>
        <View style={styles.navObject}>
          <Image source={require('./assets/Icons/menu_light.png')} style={styles.navIcon}/>
        </View>
        <View style={styles.navObject}>
          <Text style={styles.logoMark}> 
            unhinge 
          </Text>
        </View>
        <View style={styles.navObject}>
          <Image source={require('./assets/Icons/sun.png')} style={styles.navIcon}/>
        </View>
      </View>

      <View style={styles.profileFlex}>
        <View style={styles.profileParent}>
          <ImageBackground  source={require('./assets/Profiles/man1.jpg')} resizeMode="cover" style={styles.profileFrame}> 
            <View style={styles.absoluteTop}>
              <Text style={styles.profileName}>
                Guy
              </Text>
            </View>
            <View style={styles.absoluteBot}>
              <Text style={styles.profilePlace}>
                10 miles away
              </Text>
            </View>
          </ImageBackground>
        </View>
      </View>

      <View style={styles.audioFlex}>
        <View style={styles.audioCard}> 
        </View>
        <View style={styles.topAudio}>
          <Text style={styles.audioText}>
            My hottest take...
          </Text>
        </View>
        <View style={styles.botAudio}>
          <Image source={require('./assets/Icons/player_light.png')} style={styles.audioIcon}/>
        </View>
        <View style={styles.botWave}>
          <Image source={require('./assets/Icons/audio_waveform_light.png')} style={styles.audioWave}/>
        </View>
      </View>
      
      <View style={styles.actionFlex}> 
        <View style={styles.actionObject}>
          <Image source={require('./assets/Icons/discover_light.png')} style={styles.actionIcon}/>
          <Text style={styles.actionText}>
            Discover
          </Text>
        </View>
        <View style={styles.actionObject}>
          <Image source={require('./assets/Icons/heart_light.png')} style={styles.actionIcon}/>
          <Text style={styles.actionText}>
            Matches
          </Text>
        </View>
        <View style={styles.actionObject}>
          <Image source={require('./assets/Icons/messages_light.png')} style={styles.actionIcon}/>
          <Text style={styles.actionText}>
            DMs
          </Text>
        </View> 
      </View>  

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: (Themes.light.bg),
    justifyContent: 'space-between',
    alignItems: 'center', 
    alignContent: 'space-between',
    flexDirection: 'column',
   
  },

  // Nav Bar Block Styles
  logoMark: {
    fontSize: 32, 
    color: (Themes.light.text),
    textAlign: 'center',
    fontFamily: 'Sydney-Bold',
  },

  navFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: (Themes.light.bg),
    alignContent: "flex-end",
    margin: 10,  
  },

  navObject: {
    width: 140,
    ...Platform.select({
      ios: {
        height: 41,
      },
      android: {
        height: 54,
      },
      default: {
        // etc
        height: 41,
      }
    }),
    padding: 0,
    margin: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end", 
  },
  navIcon: {
    width: 48,
    height: 48,
  },

// Profile Pic Block Styles
  
profileFlex: {
    display: "flex",
    flexDirection: "row",
    margin: 24,
    justifyContent:'flex-start',
    marginTop: -10,
  },
  absoluteTop: {
    position: "absolute",
    width: 50,
    height: 50,
    top: 10, 
    left: 15,
  },
  absoluteBot: {
    position: "absolute",
    width: 100,
    height: 20,
    bottom: 10, 
    left: 15,
  },
  profileParent: {
    width: '100%',
    height: '300%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 }
    
  },
  profileFrame: {
    width: '100%',
    height: 400,
    margin: 12,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
  
  },  
  profileName: {
    fontSize: 32,
    color: (Themes.light.text),
    textAlign: 'left',
    fontFamily: 'Sydney',
  },
  profilePlace: {
    fontSize: 18,
    color: (Themes.light.textSecondary),
    textAlign: 'left',
    fontFamily: 'Sydney',
  },

  //Audio Card Block Styles
  audioFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: (Themes.light.bg),
    marginTop: -30,
    marginBottom: 20,
  },
  audioCard: {
    width: 365,
    height: 140,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 7,
    backgroundColor: (Themes.light.bgSecondary),
    borderRadius: 18,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: { width: -1, height: 5 }
  },  
  audioText: {
    fontSize: 22,
    color: (Themes.light.text),
    textAlign: 'left',
    fontFamily: 'Sydney',
  },
  topAudio: {
    position: "absolute",
    width: 200,
    height: 50,
    top: 20, 
    left: 20,
    padding: 4,
  },
  botAudio: {
    position: "absolute",
    width: 200,
    height: 70,
    bottom: 20, 
    left: 20,
    alignContent: "flex-end"
  },
  audioIcon: {
    width: 64,
    height: 64
  },
  botWave: {
    position: "absolute",
    width: 200,
    height: 100,
    bottom: 30, 
    right: 20,
    alignItems: "flex-end",
    justifyContent: 'flex-end',
  },
  audioWave: {
    width: 245,
    height: 64,
    resizeMode: 'contain',
  
  },

  // Action Bar Block Styles
  actionFlex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    alignContent: 'flex-end',
    backgroundColor: (Themes.light.navigation),
    width: '200%',
    height: 90,
    padding: 1,
  },

  actionObject: {
    width: 110,
    height: 95,
    padding: 15,
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: 'center', 
  },

  actionIcon: {
    width: 36,
    height: 36,

  },
  actionText: {
    fontSize: 18,
    color: (Themes.light.textSecondary),
    textAlign: 'center',
    fontFamily: 'Sydney',
    padding: 10,
  },  
});
