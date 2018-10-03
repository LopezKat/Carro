import React from 'react';
import {
    Text, 
    View,
    Image,
    StyleSheet,
    Button
} 
from 'react-native';

  const Cart = props => ( 
    <View>
      <View style={styles.container}>
          <Image
              source={{ uri: 'https://png.pngtree.com/element_pic/16/12/01/89815cd0e8828d5b9e66af21f83a7102.jpg' }}
              style={styles.image}
          />
          <View>
            <Text style={styles.title}> Donas </Text>
            <Text style={styles.description}> Donas con crema </Text>
          </View>
      </View>
      <View>
        <Text>Total</Text>
          <Button
            title ="Pay"
            onPress = { ()=>{ props.navigation.navigate('FormScreen') } }
          />
      </View>
    </View>
  );

  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3949AB',
        justifyContent: 'center',
        alignItems: 'center'
      },
      containerDetail: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      containerDetailText: {
        color: '#060302',
      },
      title:{
        color: '#fff',
        fontSize: 24,
        marginTop: 20
      },
      image:{
        width: 140,
        height: 140,
        borderRadius: 70,
        resizeMode: 'cover'
      },
      description:{
        color: '#fff',
        padding: 10
      },
    });

export default Cart;

