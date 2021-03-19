import React, { Component } from 'react'
import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'
import styles from "./styles"
import Carousel, {Pagination} from 'react-native-snap-carousel';
import imagePath from '../../constants/imagePath';
import navigationStrings from '../../constants/navigationStrings';

export default class LandingPage extends Component {

    state = {
        activeIndex:0,
        carouselItems: [
        {
            image: imagePath.carouselOne,
            text: "Shop Genuine Health Supplements"
        },
        {
            image: imagePath.carouselTwo,
            text: "Get Customized Diet & Workout Plans"
        },
        {
            image: imagePath.carouselThree,
            text: "Consult with Best Nutritionists"
        },
        {}
      ]
    }


    _renderItem({item,index}){
      // console.log(item)
      return (
        <View
          style={{
            //   backgroundColor:'red',
            borderRadius: 5,
            flex: 1,
            width: '100%',
            marginTop: 5,
            justifyContent: 'space-between',
          }}>
          <Image
            style={{
              width: '150%',
              height: '65%',
              marginLeft: '-25%',
              resizeMode: 'contain',
            }}
            source={item.image}
          />
          <View>
            <Text
              style={{
                color: 'white',
                width: '95%',
                fontSize: 25,
                textAlign: 'center',
              }}>
              {item.text}
            </Text>
          </View>
        </View>
      );
    }

    get pagination () {
        const { activeIndex, carouselItems } = this.state;
        if (activeIndex == 3) {
            
            this.props.navigation.navigate(navigationStrings.OUTER_SCREEN)
        }
        return (
            <Pagination
              dotsLength={carouselItems.length}
              activeDotIndex={activeIndex}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={1}
            />
        );
    }

    render() {
        return (
            <View style = {styles.container}>
                <StatusBar backgroundColor = {colors.themeColor} style={styles.statusbar}></StatusBar>
                <View style = {styles.innerContainer}>
                <Carousel
                  layout={"default"}
                  ref={ref => this.carousel = ref}
                  data={this.state.carouselItems}
                  bounces = {true}
                  sliderWidth={300}
                  itemWidth={300}
                  renderItem={this._renderItem}
                  onSnapToItem = { index => this.setState({activeIndex:index}) } />
                  { this.pagination }
                <TouchableOpacity style = {styles.bottomButton}>
                    <Text style = {styles.bottonButtonText}>Get Started</Text>
                </TouchableOpacity>
                </View>
            </View>
        )
    }
}


