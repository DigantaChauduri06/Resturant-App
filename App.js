import { StyleSheet, Text, View } from 'react-native'
import MainContainer from './src/screens/MainContainer';
import { LogBox } from 'react-native';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  return (
    <MainContainer />
  )
}
export default App;