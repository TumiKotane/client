
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
//import { useDispatch, useSelector } from 'react-redux'; // Redux hooks
import { useNavigation } from '@react-navigation/native'; // For navigation
//import { getMe } from '../redux/authSlice'; // Redux action to get user authentication info
//import { RootState } from '../redux/store'; // Assuming you have a RootState type defined for your Redux store
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define navigation type for type safety
type RootStackParamList = {
  Login: undefined;
  AddUser: undefined;
};

type DashboardNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

const Dashboard: React.FC = () => {
  //const dispatch = useDispatch();
  const navigation = useNavigation<DashboardNavigationProp>();
  
  // Selector to access the auth state in Redux store
 // const { user, isError } = useSelector((state: RootState) => state.auth); // RootState is your store's global state type

  //useEffect(() => {
   // dispatch(getMe());

    //if (isError) {
//       Alert.alert('Authentication Error', 'Please log in to access the dashboard.');
//       navigation.navigate('Login');
//     }
//   }, [isError, dispatch, navigation]);

  return (
    <View style={styles.container}>
   
        <>
          <Text style={styles.title}>Welcome, !</Text>
          <Text style={styles.subtitle}>Role: </Text>
          <Button
            title="Go to Add User"
            onPress={() => navigation.navigate('AddUser')}
            color="#4CAF50"
          />
        </>
        <Text style={styles.title}>Loading...</Text>
    
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
});