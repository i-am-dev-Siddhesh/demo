import {
  View,
  Text,
  StyleSheet,
  Animated,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  RefreshControl,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Card from '../../components/card';
import {HomeScreenProps, Post_Props} from '../../constants/Props';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({navigation}: HomeScreenProps) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Post_Props[] | []>([]);

  //some animation part for refresh button
  const ScrollY = new Animated.Value(0);

  const diffCamp = Animated.diffClamp(ScrollY, 0, 95);

  const translateY = diffCamp.interpolate({
    inputRange: [0, 95],
    outputRange: [0, -95],
  });


  //Seperate fuction for calling api
  const fetchDetails = async () => {
    setLoading(true);
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log('err',err);
        Alert.alert('Data Cannot be fetched');
      });
    setLoading(false);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  const onRefresh = () => {
    setData([]);
    fetchDetails();
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        animating={loading}
        style={{position: 'absolute', zIndex: 2, top: '50%', left: '45%'}}
      />
      <Animated.View
        style={{
          transform: [{translateY: translateY}],
          elevation: 4,
          zIndex: 1,
          backgroundColor: '#fff',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}
          onPress={() => navigation.navigate('Login')}>
          <Ionicons name="arrow-back" size={20} color={'#000'} />
          <Text style={{color: '#000'}}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRefresh}>
          <Ionicons name="refresh" size={20} color={'#000'} />
        </TouchableOpacity>
      </Animated.View>
      <View style={{padding: 10}}>
        {!loading && (
          <FlatList
            keyExtractor={(item: Post_Props) => String(item.id)}
            onEndReachedThreshold={0.1}
            showsVerticalScrollIndicator={false}
            data={data}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={onRefresh} />
            }
            ItemSeparatorComponent={() => <View style={{height: 20}} />}
            renderItem={({item}: {item: Post_Props}) => (
              <Card navigation={navigation} item={item} key={item.id} />
            )}
            ListEmptyComponent={
              <View>
                <Text>We Dont have Posts!</Text>
              </View>
            }
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
